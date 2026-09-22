import { defineStore } from "pinia";
import { tokenBuilder } from 'dynamatic';
import themeDefault from '@config/theme.json';
import themeNeon from '@config/theme-neon.json';

const themeDefaultRaw = tokenBuilder(themeDefault);
const themeNeonRaw = tokenBuilder(themeNeon);

const getSavedThemeRaw = () => {
  const storedTheme = localStorage.getItem('currentTheme');

  switch (storedTheme) {
    case 'neon':
      return themeNeonRaw;
    default:
      return themeDefaultRaw;
  }
}

// the data-scheme attribute on the body element is the source of truth for the current scheme, so we need to read it from there instead of relying on the store's state
const saveTempSchemeValue = localStorage.getItem('saveTempSchemeValue') === 'true';

const getCurrentScheme = () => {
  const storedScheme = localStorage.getItem('currentScheme');
  const schemeWithDecay = storedScheme ? JSON.parse(storedScheme) : null;
  const isExpired = schemeWithDecay && schemeWithDecay.expiry && new Date().getTime() > schemeWithDecay.expiry;

  if (saveTempSchemeValue && storedScheme && !isExpired) {
    return schemeWithDecay.value;
  } else {
    localStorage.removeItem('currentScheme');
    return document.body.dataset.scheme;
  }
}
const getSavedSchemePreference = () => {
  return localStorage.getItem('userSchemePreference');
}
const getSystemSchemePreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
const initBodyScheme = () => {
  let startScheme;
  const userScheme = getSavedSchemePreference();

  if (localStorage.getItem('currentScheme')) {
    startScheme = getCurrentScheme();
  } else  {

  switch (userScheme) {
      case 'system':
        startScheme = getSystemSchemePreference();
        break;
      case 'light':
        startScheme = 'light';
        break;
      case 'dark':
        startScheme = 'dark';
        break;
      default:
        startScheme = 'normal';
    }
  }

  document.body.dataset.scheme = startScheme;
}
initBodyScheme();

export const useThemeStore = defineStore({
  id: "Theme",
  state: () => ({
    list: ['default', 'neon'],
    name: localStorage.getItem('currentTheme') || "default",
    raw: getSavedThemeRaw(),
    currentScheme: getCurrentScheme(),
    userSchemePreference: getSavedSchemePreference(),
    systemSchemePreference: getSystemSchemePreference(),
  }),
  actions: {
    build() {
      document.getElementById('theme').innerHTML = this.raw;
    },
    reset() {
      this.raw = themeDefaultRaw;
    },
    update( themeName ) {
      switch (themeName) {
        case 'neon':
          this.name = "neon";
          this.raw = themeNeonRaw;
          break;
        default:
          this.name = "default";
          this.raw = themeDefaultRaw;
      }

      localStorage.setItem('currentTheme', this.name);
      this.build();
    },
    setScheme( scheme ) {
      this.currentScheme = scheme;
      document.body.dataset.scheme = scheme;

      if (saveTempSchemeValue) {
        const now = new Date();
        const ttl = 24 * 60 * 60 * 1000;

        const schemeWithDecay = {
          value: scheme,
          expiry: now.getTime() + ttl
        };

        localStorage.setItem('currentScheme', JSON.stringify(schemeWithDecay));
      } else {
        localStorage.removeItem('currentScheme');
      }
    },
    setUserSchemePreference( preference ) {
      this.userSchemePreference = preference;
      localStorage.setItem('userSchemePreference', preference);
    },
  },
});
