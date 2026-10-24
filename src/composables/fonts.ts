import type { FontOption } from '../types'

export const fonts: FontOption[] = [
  { id: 'impact', label: 'Impact', css: 'Impact, "Anton", "Arial Narrow Bold", "Haettenschweiler", sans-serif' },
  { id: 'arial', label: 'Arial Black', css: '"Arial Black", Arial, "Helvetica Neue", sans-serif' },
  { id: 'comic', label: 'Comic', css: '"Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive' },
  { id: 'serif', label: 'С засечками', css: 'Georgia, "Times New Roman", serif' },
]

export function fontCss(id: string): string {
  return (fonts.find((x) => x.id === id) ?? fonts[0]).css
}
