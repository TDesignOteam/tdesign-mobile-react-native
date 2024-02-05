/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../../example/.env'),
});

// import camelCase from 'camelcase';

// import testCoverage from '../test-coverage';

import { transformSync } from '@babel/core';

export default function mdToReact(options) {
  const mdSegment = customRender(options);

  const reactSource = `
    import React, { useEffect, useRef, useState } from 'react';\n
    import { useLocation, useNavigate } from 'react-router-dom';
    import Prismjs from 'prismjs';
    import 'prismjs/components/prism-bash.js';

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    export default function TdDoc() {
      const tdDocHeader = useRef();
      const tdDocTabs = useRef();
      const tdDocPhone = useRef();

      const isComponent = ${mdSegment.isComponent};

      const location = useLocation();
      const navigate = useNavigate();

      const query = useQuery();
      const [tab, setTab] = useState(query.get('tab') || 'demo');

      useEffect(() => {
        const completeUrl = window.location.origin + '${mdSegment.mobileUrl}';

        tdDocHeader.current.docInfo = {
          title: \`${mdSegment.title}\`,
          desc:  \`${mdSegment.description}\`
        }

        if (isComponent) {
          tdDocPhone.current.qrcodeUrl = completeUrl;
          tdDocTabs.current.tabs = ${JSON.stringify(mdSegment.tdDocTabs)};
        }

        Prismjs.highlightAll();
      }, [tab]);

      useEffect(() => {
        if (!isComponent) return;

        const query = new URLSearchParams(location.search);
        const currentTab = query.get('tab') || 'demo';
        setTab(currentTab);
        tdDocTabs.current.tab = currentTab;

        tdDocTabs.current.onchange = ({ detail: currentTab }) => {
          setTab(currentTab);
          const query = new URLSearchParams(location.search);
          if (query.get('tab') === currentTab) return;
          navigate({ search: '?tab=' + currentTab });
        }
      }, [location])

      function isShow(currentTab) {
        return currentTab === tab ? { display: 'block' } : { display: 'none' };
      }
      return (
        <>
          ${
            mdSegment.tdDocHeader
              ? `<td-doc-header
                slot="doc-header"
                ref={tdDocHeader}
                spline="${mdSegment.spline}"
                platform="mobile"
              ></td-doc-header>`
              : ''
          }
          {
            isComponent ? (
              <>
                <td-doc-tabs ref={tdDocTabs} tab={tab}></td-doc-tabs>
                <div style={isShow('demo')} name="DEMO">
                  ${mdSegment.demoMd.replace(/class=/g, 'className=')}

                  <td-doc-phone ref={tdDocPhone} style={{position: 'relative', zIndex: 999}}>
                    <iframe src="${
                      mdSegment.mobileUrl
                    }" frameBorder="0" width="100%" height="100%" style={{ borderRadius: '0 0 6px 6px' }}></iframe>
                  </td-doc-phone>

                  <td-contributors platform="mobile" framework="react" component-name="${
                    mdSegment.componentName
                  }" ></td-contributors>
                </div>
                <div style={isShow('api')} name="API" dangerouslySetInnerHTML={{ __html: \`${
                  mdSegment.apiMd
                }\` }}></div>
                <div style={isShow('design')} name="DESIGN" dangerouslySetInnerHTML={{ __html: \`${
                  mdSegment.designMd
                }\` }}></div>
              </>
            ) : <div name="DOC" className="${mdSegment.docClass}">${mdSegment.docMd.replace(
    /class=/g,
    'className=',
  )}</div>
          }
          <div style={{ marginTop: 48 }}>
            <td-doc-history time="${mdSegment.lastUpdated}"></td-doc-history>
          </div>
        </>
      )
    }
  `;

  const result = transformSync(reactSource, {
    babelrc: false,
    configFile: false,
    sourceMaps: true,
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    presets: [require('@babel/preset-react')],
  });
  return { code: result.code, map: result.map };
}

const DEAULT_TABS = [
  { tab: 'demo', name: '示例' },
  { tab: 'api', name: 'API' },
  { tab: 'design', name: '指南' },
];

// 解析 markdown 内容
function customRender({ source, file, md }) {
  let { content, data } = matter(source);

  // md top data
  const pageData = {
    spline: '',
    toc: false,
    title: '',
    description: '',
    isComponent: false,
    tdDocHeader: true,
    tdDocTabs: DEAULT_TABS,
    apiFlag: /#+\s*API/i,
    docClass: '',
    lastUpdated: Math.round(fs.statSync(file).mtimeMs),
    ...data,
  };

  // md filename
  const reg = file.match(/src\/components\/[\w-]+\/([\w-]+)\.md/);
  const componentName = reg && reg[1];

  // split md
  let [demoMd = '', apiMd = ''] = content.split(pageData.apiFlag);

  // fix table | render error
  // demoMd = demoMd.replace(/`([^`]+)`/g, (str, codeStr) => {
  //   codeStr = codeStr.replace(/"/g, "'");
  //   return `<td-code text="${codeStr}"></td-code>`;
  // });

  apiMd = apiMd.replace(/`([^`]+)`/g, (str, codeStr) => {
    codeStr = codeStr.replace(/\|/g, '\\|');
    return `\`${codeStr}\``;
  });

  const mdSegment = {
    ...pageData,
    mobileUrl: '',
    componentName,
    docMd: '<td-doc-empty></td-doc-empty>',
    demoMd: '<td-doc-empty></td-doc-empty>',
    apiMd: '<td-doc-empty></td-doc-empty>',
    designMd: '<td-doc-empty></td-doc-empty>',
  };

  if (pageData.isComponent) {
    mdSegment.demoMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${demoMd.replace(/<!--[\s\S]+?-->/g, '')}`,
    ).html;
    mdSegment.apiMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${apiMd.replace(/<!--[\s\S]+?-->/g, '')}`,
    ).html;
  } else {
    mdSegment.docMd = md.render.call(
      md,
      `${pageData.toc ? '[toc]\n' : ''}${content.replace(/<!--[\s\S]+?-->/g, '')}`,
    ).html;
  }

  // 移动端路由地址
  const exampleEnv = dotenv.parsed || {};
  const prefix =
    process.env.NODE_ENV === 'development' ? `http://localhost:${exampleEnv.PORT}` : `/react-native/example/index.html`;
  mdSegment.mobileUrl = `${prefix}/${componentName}`;

  // 设计指南内容 不展示 design Tab 则不解析
  if (pageData.isComponent && pageData.tdDocTabs.some((item) => item.tab === 'design')) {
    const designDocPath = path.resolve(__dirname, `../../src/_common/docs/mobile/design/${componentName}.md`);

    if (fs.existsSync(designDocPath)) {
      const designMd = fs.readFileSync(designDocPath, 'utf-8');
      mdSegment.designMd = md.render.call(md, `${pageData.toc ? '[toc]\n' : ''}${designMd}`).html;
    } else {
      // console.log(`[vite-plugin-tdoc]: 未找到 ${designDocPath} 文件`);
    }
  }

  return mdSegment;
}
