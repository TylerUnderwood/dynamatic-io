/// <reference types="vite/client" />

declare module 'dynamatic' {
  type ThemeValue = string | { [key: string]: ThemeValue };
  type Theme = { [category: string]: { [token: string]: ThemeValue } };

  export function tokenCategories(theme?: Theme): Record<string, Record<string, string>>;
  export function tokensNative(theme?: Theme): Record<string, string[]>;
  export function tokenBuilder(theme?: Theme): string;
}
