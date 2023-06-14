import { useState, useEffect } from 'react';
import { useTheme } from '../../theme';
import { Text } from '../index';
import { HighlightProps } from './types';

export const Highlight = (props: HighlightProps) => {
  const { theme } = useTheme();
  const {
    style = {},
    highlightStyle = {},
    className = '',
    keyword = '',
    text,
    color = theme.colors.brand,
    caseSensitive,
    ...restProps
  } = props;

  const [words, setWords] = useState([text]);
  const [pattern, setPattern] = useState<RegExp>();
  console.log(caseSensitive);
  useEffect(() => {
    try {
      // 转义特殊字符，避免正则匹配失败
      const sepcialCharacters = '[\\^$.|?*+()'.split('');
      const newKeyword = keyword
        ?.split('')
        ?.map((v) => {
          if (sepcialCharacters.indexOf(v) !== -1) {
            return `\\${v}`;
          }

          return v;
        })
        ?.join('');

      if (newKeyword) {
        setPattern(new RegExp(`${newKeyword}`, `${caseSensitive ? 'i' : ''}`));
        setWords(text.split(new RegExp(`(${newKeyword})`, `g${caseSensitive ? 'i' : ''}`)).filter((word) => word));
      }
    } catch (e) {
      console.warn(e);
    }
  }, [caseSensitive, keyword, text]);

  return (
    <Text style={[style]} className={className} {...restProps}>
      {words.map((word, index) => {
        if (pattern?.test(word)) {
          return (
            <Text key={index} className={className} style={[style, { color }, highlightStyle]}>
              {word}
            </Text>
          );
        }
        return (
          <Text key={index} className={className} style={[style]}>
            {word}
          </Text>
        );
      })}
    </Text>
  );
};
