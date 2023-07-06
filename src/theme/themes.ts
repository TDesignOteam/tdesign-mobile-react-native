import { isEmpty } from 'lodash';
import { ThemeType, ThemeTokensType, CommonTokensType } from './types';

// light
import { lightTokens } from './light/tokens';
import { lightClassNames } from './light/classnames';

// dark
import { darkTokens } from './dark/tokens';
import { darkClassNames } from './dark/classnames';
import { commonClassNames } from './common/classnames';

/**
 * @description 主题类型
 */
export type ThemeName = 'light' | 'dark';

export type ConfigType = {
  light?: Partial<ThemeType>;
  dark?: Partial<ThemeType>;
};
class Theme {
  public name: ThemeName;

  public light: ThemeType;

  public dark: ThemeType;

  constructor() {
    this.name = 'light';
    this.light = {
      ...lightTokens,
      classnames: {
        ...lightClassNames(),
      },
    };
    this.dark = {
      ...darkTokens,
      classnames: {
        ...darkClassNames(),
      },
    };
  }

  initTheme(config?: ConfigType) {
    const { light, dark } = config || {};

    function mergeTheme(originTheme: ThemeType, customTheme: Partial<ThemeType>): ThemeType {
      const mergeResult: Record<string, any> = {};
      Object.keys(originTheme).forEach((key) => {
        if (key !== 'classnames') {
          mergeResult[key] = {
            ...originTheme?.[key as keyof ThemeType],
            ...(customTheme?.[key as keyof ThemeType] || {}),
          };
        }
      });
      mergeResult.classnames = {
        ...originTheme.classnames,
        ...lightClassNames(mergeResult as ThemeTokensType, commonClassNames(mergeResult as CommonTokensType)),
        ...customTheme.classnames,
      };

      return mergeResult as ThemeType;
    }

    if (!isEmpty(light)) {
      this.light = mergeTheme(this.light, light);
    }
    if (!isEmpty(dark)) {
      this.dark = mergeTheme(this.dark, dark);
    }
  }

  changeTheme(themeType: ThemeName) {
    this.name = themeType;
  }

  getThemeName() {
    return this.name;
  }
}

export const themes = new Theme();
