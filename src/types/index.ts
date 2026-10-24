import type { Component } from 'vue'

export type TextAlign = 'left' | 'center' | 'right'

export interface FontOption {
  id: string
  label: string
  css: string
}

/** Описание поля подписи в мем-шаблоне. x/y — центр блока в процентах, fontSize — в единицах viewBox. */
export interface TextFieldDef {
  id: string
  label: string
  placeholder: string
  defaultText: string
  x: number
  y: number
  fontSize: number
  color: string
  stroke: string
  align: TextAlign
  font?: string
}

/** Состояние одной подписи в редакторе. */
export interface TextItem {
  id: string
  text: string
  x: number
  y: number
  fontSize: number
  color: string
  stroke: string
  align: TextAlign
  font: string
}

export interface MemeDef {
  id: string
  title: string
  description: string
  component: Component
  width: number
  height: number
  defaultBg: string
  palette: string[]
  fields: TextFieldDef[]
}

export interface EditorState {
  items: TextItem[]
  bg: string
}
