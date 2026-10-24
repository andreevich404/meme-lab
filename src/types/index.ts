export type TextAlign = 'left' | 'center' | 'right'

export interface FontOption {
  id: string
  label: string
  css: string
}

/**
 * Описание поля подписи в мем-шаблоне.
 * x/y — центр блока в процентах картинки, w — ширина блока в % картинки,
 * fontSize — в пикселях натуральной ширины картинки, rot — поворот в градусах.
 * stroke === '' — без обводки.
 */
export interface TextFieldDef {
  id: string
  label: string
  placeholder: string
  defaultText: string
  x: number
  y: number
  w: number
  fontSize: number
  color: string
  stroke: string
  align: TextAlign
  rot: number
  font?: string
}

/** Состояние одной подписи в редакторе. */
export interface TextItem {
  id: string
  text: string
  x: number
  y: number
  w: number
  fontSize: number
  color: string
  stroke: string
  align: TextAlign
  rot: number
  font: string
}

export interface MemeDef {
  id: string
  title: string
  description: string
  src: string
  width: number
  height: number
  fields: TextFieldDef[]
}

export interface EditorState {
  items: TextItem[]
}
