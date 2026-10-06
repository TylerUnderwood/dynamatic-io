
import { readonly, watch } from 'vue';
import { defineStore } from 'pinia';
import { tokenBuilder } from 'dynamatic';
import themeDefault from '@config/theme.json';
import themeNeon from '@config/theme-neon.json';

type Scheme = 'dark' | 'light';
type SchemePreference = Scheme | 'system' | 'nopreference';

const systemScheme: Scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const styleSheetId = 'theme';

type Theme = {
  name: string;
  defaultScheme: Scheme;
  css: string;
  tokens: any;
};

const themes: Record<string, Theme> = {
  default: {
    name: 'Web Brutalism',
    defaultScheme: 'light',
    css: tokenBuilder(themeDefault),
    tokens: themeDefault,
  },
  neon: {
    name: 'Neon',
    defaultScheme: 'dark',
    css: tokenBuilder(themeNeon),
    tokens: themeNeon,
  }
};

type ThemeId = keyof typeof themes;

const savedThemeId = localStorage.getItem('themeId') as ThemeId | null;
const savedScheme = localStorage.getItem('scheme') as Scheme;
const savedUserSchemePreference = localStorage.getItem('userSchemePreference') as SchemePreference;
const savedShouldStoreTempScheme = localStorage.getItem('shouldStoreTempScheme') === 'true';

const saveSchemeExpiration = () => {
  const now = new Date();
  const ttl = 24 * 60 * 60 * 1000;

  localStorage.setItem('schemeExperation', (now.getTime() + ttl).toString());
}
const isSchemeExpired = () => {
  const schemeExperation = localStorage.getItem('schemeExperation');
  if (!schemeExperation) return true;
  return parseInt(schemeExperation) < Date.now();
}
const resolveSchemeFromPreference = ( preference: SchemePreference, id: ThemeId ): Scheme => {
  switch (preference) {
    case 'system':
      return systemScheme;
    case 'nopreference':
      return themes[id].defaultScheme;
    default:
      return preference;
  }
}

const initialThemeId: ThemeId = savedThemeId || 'default';
const initialScheme: Scheme = 
  savedShouldStoreTempScheme && savedScheme && !isSchemeExpired() 
    ? savedScheme
    : resolveSchemeFromPreference(savedUserSchemePreference, initialThemeId);

interface ThemeStore {
  list: typeof themes;
  id: ThemeId;
  scheme: Scheme;
  isDarkMode: boolean;
  userSchemePreference: SchemePreference;
  shouldStoreTempScheme: boolean;
}

export const useThemeStore = defineStore('Theme', {
  state: (): ThemeStore => ({
    list: readonly(themes),
    id: initialThemeId,
    scheme: initialScheme,
    isDarkMode: initialScheme === 'dark',
    userSchemePreference: savedUserSchemePreference || 'nopreference',
    shouldStoreTempScheme: savedShouldStoreTempScheme || false,
  }),
  actions: {
    build() {
      const themeStyleSheet = document.getElementById(styleSheetId) as HTMLStyleElement;

      if (!themeStyleSheet) {
        throw new Error(`Style sheet element with id ${styleSheetId} not found`);
      }

      themeStyleSheet.innerHTML = this.list[this.id].css;
    },
    onChangeId() {
      localStorage.setItem('themeId', this.id);

      this.scheme = resolveSchemeFromPreference(this.userSchemePreference, this.id);

      this.build();
    },
    updateSchemeExpiration() {
      if (this.shouldStoreTempScheme) {
        saveSchemeExpiration();
      } else {
        localStorage.removeItem('schemeExperation');
      }
    },
    updateScheme() {
      document.body.dataset.scheme = this.scheme;
      document.body.setAttribute('instant-transitions', '')
      localStorage.setItem('scheme', this.scheme);

      this.updateSchemeExpiration();

      setTimeout(() => {
        document.body.removeAttribute('instant-transitions')
      }, 10)
    },
    onChangeScheme() {
      // Sync the isDarkMode state with the scheme
      if (this.isDarkMode !== (this.scheme === 'dark')) {
        this.isDarkMode = this.scheme === 'dark';
      }

      this.updateScheme();
    },
    onChangeIsDarkMode() {
      this.scheme = this.isDarkMode ? 'dark' : 'light';
    },
    onChangeUserSchemePreference() {
      localStorage.setItem('userSchemePreference', this.userSchemePreference);
      this.scheme = resolveSchemeFromPreference(this.userSchemePreference, this.id);
    },
    onChangeShouldStoreTempScheme() {
      localStorage.setItem('shouldStoreTempScheme', this.shouldStoreTempScheme.toString());
      this.updateSchemeExpiration();
    },
    init() {
      watch(() => this.id, this.onChangeId);
      watch(() => this.scheme, this.onChangeScheme);
      watch(() => this.isDarkMode, this.onChangeIsDarkMode);
      watch(() => this.userSchemePreference, this.onChangeUserSchemePreference);
      watch(() => this.shouldStoreTempScheme, this.onChangeShouldStoreTempScheme);

      this.updateScheme();
      this.build();
    },
  },
});
