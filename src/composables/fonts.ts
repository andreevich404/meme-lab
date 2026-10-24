import type { FontOption } from '../types'

/** Все кириллические шрифты подгружаются через Google Fonts <link> в index.html. */
export const fonts: FontOption[] = [
  { id: 'oswald', label: 'Impact-стиль (Oswald)', css: '"Oswald", Impact, "Arial Narrow Bold", sans-serif' },
  { id: 'russo', label: 'Russo One', css: '"Russo One", Impact, sans-serif' },
  { id: 'rubikmono', label: 'Rubik Mono One', css: '"Rubik Mono One", "Arial Black", sans-serif' },
  { id: 'arial', label: 'Arial Black', css: '"Arial Black", Arial, "Helvetica Neue", sans-serif' },
  { id: 'comic', label: 'Comic', css: '"Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive' },
  { id: 'serif', label: 'С засечками', css: 'Georgia, "Times New Roman", serif' },
]

export function fontCss(id: string): string {
  return (fonts.find((x) => x.id === id) ?? fonts[0]).css
}
