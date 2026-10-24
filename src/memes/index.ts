import type { MemeDef, TextFieldDef } from '../types'
import Zhdun from './Zhdun.vue'
import Normalno from './Normalno.vue'
import Distracted from './Distracted.vue'
import Drake from './Drake.vue'
import TwoButtons from './TwoButtons.vue'
import Brain from './Brain.vue'
import Cat from './Cat.vue'
import GenaCheb from './GenaCheb.vue'
import Hedgehog from './Hedgehog.vue'
import Sunset from './Sunset.vue'

const WHITE = '#ffffff'
const BLACK = '#000000'

/** Короткий конструктор поля подписи. */
function f(
  id: string,
  label: string,
  placeholder: string,
  defaultText: string,
  x: number,
  y: number,
  fontSize: number,
  extra: Partial<TextFieldDef> = {},
): TextFieldDef {
  return { id, label, placeholder, defaultText, x, y, fontSize, color: WHITE, stroke: BLACK, align: 'center', ...extra }
}

const dark = { color: '#1a1a1a', stroke: '#ffffff' }

export const memes: MemeDef[] = [
  {
    id: 'zhdun',
    title: 'Ждун',
    description: 'Бесконечное ожидание: сидишь и ждёшь, а ничего не происходит.',
    component: Zhdun,
    width: 600,
    height: 600,
    defaultBg: '#cfe3f1',
    palette: ['#cfe3f1', '#f1e3cf', '#d9f1cf', '#2b2f3a'],
    fields: [
      f('top', 'Верхняя подпись', 'Что ждём?', 'ЖДУ ОТВЕТА', 50, 10, 56),
      f('bottom', 'Нижняя подпись', 'Сколько ждём?', 'ТРЕТИЙ ДЕНЬ', 50, 92, 52),
    ],
  },
  {
    id: 'eto-normalno',
    title: 'Это нормально',
    description: 'Собака в горящей комнате пьёт кофе и делает вид, что всё под контролем.',
    component: Normalno,
    width: 600,
    height: 400,
    defaultBg: '#f4d9a8',
    palette: ['#f4d9a8', '#d8e6f4', '#e8d0e8', '#3a2f2f'],
    fields: [
      f('top', 'Верхняя подпись', 'Ситуация', 'ДЕДЛАЙН ЗАВТРА', 50, 9, 46),
      f('bottom', 'Нижняя подпись', 'Реакция', 'ЭТО НОРМАЛЬНО', 50, 93, 50),
    ],
  },
  {
    id: 'otvlyoksya',
    title: 'Отвлёкся',
    description: 'Парень оборачивается на «новое» прямо при своей девушке.',
    component: Distracted,
    width: 600,
    height: 400,
    defaultBg: '#d6ecd2',
    palette: ['#d6ecd2', '#f3dcd2', '#d2dcf3', '#2f3a33'],
    fields: [
      f('girl', 'Девушка слева', 'Старое', 'СТАРЫЙ ПРОЕКТ', 20, 13, 30),
      f('guy', 'Парень', 'Я', 'Я', 50, 13, 40),
      f('other', 'Девушка справа', 'Новое', 'НОВАЯ ИДЕЯ', 80, 13, 30),
    ],
  },
  {
    id: 'drake',
    title: 'Дрейк',
    description: 'Верхний вариант отвергаем, нижний одобряем.',
    component: Drake,
    width: 600,
    height: 600,
    defaultBg: '#f2c14e',
    palette: ['#f2c14e', '#8fd3c8', '#f29bb5', '#8aa4ff'],
    fields: [
      f('no', 'Не нравится', 'Что отвергаем', 'Делать\nзаранее', 72, 25, 36, dark),
      f('yes', 'Нравится', 'Что одобряем', 'Делать в ночь\nперед сдачей', 72, 75, 36, dark),
    ],
  },
  {
    id: 'dve-knopki',
    title: 'Две кнопки',
    description: 'Трудный выбор между двумя одинаково привлекательными вариантами.',
    component: TwoButtons,
    width: 600,
    height: 600,
    defaultBg: '#e5d9f2',
    palette: ['#e5d9f2', '#d9f2e5', '#f2e5d9', '#2c2a3a'],
    fields: [
      f('left', 'Левая кнопка', 'Вариант 1', 'СПАТЬ', 30, 22, 34, dark),
      f('right', 'Правая кнопка', 'Вариант 2', 'ДОДЕЛАТЬ', 70, 22, 34, dark),
      f('bottom', 'Подпись внизу', 'Кто выбирает', 'Я В 3 НОЧИ', 50, 94, 44),
    ],
  },
  {
    id: 'rasshiryayushchiysya-mozg',
    title: 'Расширяющийся мозг',
    description: 'Четыре уровня просветления: от простого к космическому.',
    component: Brain,
    width: 600,
    height: 720,
    defaultBg: '#2d3e5e',
    palette: ['#2d3e5e', '#4b2d5e', '#2d5e4b', '#111111'],
    fields: [
      f('l1', 'Уровень 1', 'Простой вариант', 'Писать код', 30, 12.5, 34),
      f('l2', 'Уровень 2', 'Вариант чуть умнее', 'Писать тесты', 30, 37.5, 34),
      f('l3', 'Уровень 3', 'Умный вариант', 'Писать документацию', 30, 62.5, 34),
      f('l4', 'Уровень 4', 'Космический вариант', 'Не писать ничего', 30, 87.5, 34),
    ],
  },
  {
    id: 'skeptichny-kot',
    title: 'Кот «Ну давай, расскажи»',
    description: 'Скептичный кот в очках не верит ни единому слову.',
    component: Cat,
    width: 600,
    height: 600,
    defaultBg: '#bfd8e8',
    palette: ['#bfd8e8', '#e8d8bf', '#d8bfe8', '#30343b'],
    fields: [
      f('top', 'Верхняя подпись', 'Что услышал кот', 'НУ ДАВАЙ,', 50, 9, 58),
      f('bottom', 'Нижняя подпись', 'Продолжение', 'РАССКАЖИ', 50, 92, 58),
    ],
  },
  {
    id: 'gena-i-cheburashka',
    title: 'Гена и зверёк',
    description: 'Диалог зелёного крокодила с гармошкой и большеухого друга.',
    component: GenaCheb,
    width: 600,
    height: 500,
    defaultBg: '#f7e7b4',
    palette: ['#f7e7b4', '#c9e7f7', '#f7c9d6', '#2e3a2f'],
    fields: [
      f('gena', 'Реплика крокодила', 'Что говорит Гена', 'А давай\nпоспим?', 24, 12, 34, { ...dark, color: '#1b4d2a' }),
      f('cheb', 'Реплика зверька', 'Что отвечает', 'Давай!\nВ понедельник.', 76, 12, 34, { ...dark, color: '#5a3818' }),
    ],
  },
  {
    id: 'ezhik-v-tumane',
    title: 'Ёжик в тумане',
    description: 'Ёжик с узелком бредёт в тумане: «Какая красивая лошадь…».',
    component: Hedgehog,
    width: 600,
    height: 500,
    defaultBg: '#aebfc9',
    palette: ['#aebfc9', '#b9c9ae', '#c9aeb9', '#3a4650'],
    fields: [
      f('top', 'Верхняя подпись', 'Фраза', 'Какая красивая лошадь…', 50, 9, 40),
      f('bottom', 'Нижняя подпись', 'Продолжение', 'Интересно, а что в тумане?', 50, 94, 32),
    ],
  },
  {
    id: 'klassika',
    title: 'Классика: сверху и снизу',
    description: 'Классический формат с крупным Impact-подобным текстом на закате.',
    component: Sunset,
    width: 600,
    height: 400,
    defaultBg: '#5b3f8c',
    palette: ['#5b3f8c', '#1f6f8b', '#c0392b', '#1d1d2e'],
    fields: [
      f('top', 'Верхний текст', 'Начало шутки', 'КОГДА ПОСЛЕ ДЕПЛОЯ', 50, 12, 48, { font: 'impact' }),
      f('bottom', 'Нижний текст', 'Конец шутки', 'ВСЁ ВЗОРВАЛОСЬ', 50, 90, 52, { font: 'impact' }),
    ],
  },
]

export function getMeme(id: string): MemeDef | undefined {
  return memes.find((m) => m.id === id)
}
