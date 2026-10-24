import type { MemeDef, TextFieldDef } from '../types'
import { CUSTOM_ID, customMeme } from './custom'

const BASE = import.meta.env.BASE_URL
const WHITE = '#ffffff'
const BLACK = '#000000'

type Extra = Partial<Omit<TextFieldDef, 'id' | 'label' | 'placeholder' | 'defaultText' | 'x' | 'y' | 'w' | 'fontSize'>>

/** Подпись: белый текст с чёрной обводкой (по умолчанию). */
function f(
  id: string,
  label: string,
  defaultText: string,
  x: number,
  y: number,
  w: number,
  fontSize: number,
  extra: Extra = {},
): TextFieldDef {
  return { id, label, placeholder: label, defaultText, x, y, w, fontSize, color: WHITE, stroke: BLACK, align: 'center', rot: 0, ...extra }
}

/** Подпись на светлой зоне: чёрный текст без обводки. */
const ink: Extra = { color: BLACK, stroke: '' }

function m(id: string, title: string, description: string, width: number, height: number, fields: TextFieldDef[]): MemeDef {
  return { id, title, description, src: `${BASE}memes/${id}.jpg`, width, height, fields }
}

export const memes: MemeDef[] = [
  m('drake', 'Дрейк', 'Это нет, а вот это да.', 1200, 1200, [
    f('no', 'Отвергает', 'Писать код с нуля, когда есть готовая библиотека', 75, 25, 44, 58, { ...ink, align: 'left' }),
    f('yes', 'Одобряет', 'Скопировать со Stack Overflow и сказать, что так и было', 75, 75, 44, 58, { ...ink, align: 'left' }),
  ]),
  m('distracted', 'Неверный парень', 'Верность проекту испытывается новой технологией.', 1200, 800, [
    f('left', 'Девушка слева', 'Новый модный фреймворк', 29, 76, 26, 46),
    f('mid', 'Парень', 'Я', 63, 55, 22, 52),
    f('right', 'Девушка справа', 'Рабочий проект на старом стеке', 85, 14, 28, 40),
  ]),
  m('two-buttons', 'Две кнопки', 'Сложный выбор, от которого потеют.', 600, 908, [
    f('a', 'Левая кнопка', 'Сделать лабу сегодня', 26, 14, 26, 25, { ...ink, rot: -10 }),
    f('b', 'Правая кнопка', 'Спать до утра', 61, 11, 22, 25, { ...ink, rot: -9 }),
    f('sweat', 'Подпись снизу', 'Студент за день до дедлайна', 50, 91, 80, 34),
  ]),
  m('brain', 'Расширяющийся мозг', 'Четыре уровня просветления.', 857, 1202, [
    f('l1', 'Уровень 1', 'Писать код в блокноте', 24, 12.4, 44, 44, { ...ink, align: 'left' }),
    f('l2', 'Уровень 2', 'Писать код в IDE', 24, 37.6, 44, 44, { ...ink, align: 'left' }),
    f('l3', 'Уровень 3', 'Просить ИИ написать код', 24, 62, 44, 44, { ...ink, align: 'left' }),
    f('l4', 'Уровень 4', 'Объяснять ИИ, что ты хочешь, так долго, что проще написать самому', 24, 86.7, 44, 40, { ...ink, align: 'left' }),
  ]),
  m('this-is-fine', 'Это нормально', 'Всё горит, но мы держимся.', 580, 282, [
    f('top', 'Сверху', 'Прод лежит, логи красные', 27, 14, 46, 26),
    f('bottom', 'Снизу', 'Это нормально, это фича', 50, 90, 90, 28),
  ]),
  m('woman-cat', 'Женщина и кот', 'Спор, в котором кот невозмутим.', 680, 438, [
    f('woman', 'Женщина', 'Ты опять сломал билд!', 25, 11, 44, 28, { ...ink }),
    f('cat', 'Кот', 'У меня на машине работает', 75, 11, 44, 28, { ...ink }),
  ]),
  m('waiting-skeleton', 'Скелет в ожидании', 'Всё ещё жду.', 298, 403, [
    f('top', 'Сверху', 'Жду, пока соберётся проект', 50, 6, 94, 24),
    f('bottom', 'Снизу', 'Уже третий семестр', 50, 94, 94, 24),
  ]),
  m('harold', 'Гарольд скрывает боль', 'Улыбаемся и делаем вид, что всё хорошо.', 480, 601, [
    f('top', 'Сверху', 'Препод: «Это же элементарно»', 50, 6, 94, 32),
    f('bottom', 'Снизу', 'Я, не понимая ни слова: «Конечно»', 50, 56, 94, 32),
  ]),
  m('grus-plan', 'План Гру', 'Идеальный план с одним небольшим изъяном.', 700, 449, [
    f('p1', 'Панель 1', 'Выучить новый язык', 37.5, 28, 18, 19, ink),
    f('p2', 'Панель 2', 'Написать на нём проект', 88, 29, 18, 19, ink),
    f('p3', 'Панель 3', 'Задеплоить в пятницу вечером', 38, 80, 18, 19, ink),
    f('p4', 'Панель 4', 'Прод упал, а я в отпуске', 88.5, 80, 18, 19, ink),
  ]),
  m('batman-slap', 'Пощёчина Бэтмена', 'Реплика Робина и ответ Бэтмена.', 400, 387, [
    f('robin', 'Робин', 'А давай без code review?', 25, 12, 38, 21, ink),
    f('batman', 'Бэтмен', 'Заткнись, Робин!', 75, 10, 38, 22, ink),
  ]),
]

export function getMeme(id: string): MemeDef | undefined {
  if (id === CUSTOM_ID) return customMeme.value ?? undefined
  return memes.find((x) => x.id === id)
}
