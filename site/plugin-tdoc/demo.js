import Markdownitfence from 'markdown-it-fence';
import { codeMap } from '../plugin-rn-to-md';

function mdInJsx(_md) {
  return new Markdownitfence(_md, 'md_in_jsx', {
    validate: () => true,
    render(tokens, idx) {
      const { content, info } = tokens[idx];
      return `<pre className="language-${info}"><code className="language-${info}">{\`${content.replace(
        /`/g,
        '\\`',
      )}\`}</code></pre>`;
    },
  });
}

export default function renderDemo(md, container) {
  md.use(mdInJsx).use(container, 'demo', {
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const [, componentName, codeName] = tokens[idx].info.trim()?.split(' ') || [];
        const code = codeMap[componentName]?.get(codeName);

        const tpl = `
            <td-doc-demo code={\`${code}\`} show-code mode="open" demo-name="${codeName}" component-name="${componentName.trim()}"></td-doc-demo>
          `;

        // eslint-disable-next-line no-param-reassign
        tokens.tttpl = tpl;

        return `<div className="tdesign-demo-wrapper tdesign-demo-item--${componentName.trim()}-${codeName} tdesign-demo-item--${componentName.trim()}">`;
      }
      if (tokens.tttpl) return `${tokens.tttpl || ''}</div>`;

      return '';
    },
  });
}
