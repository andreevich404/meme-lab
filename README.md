# Мем-лаб

Лабораторная работа: сайт с любимыми мемами и интерактивным редактором. Выберите мем в галерее,
перетаскивайте подписи, меняйте текст, шрифт и цвета, затем скачайте PNG или скопируйте в буфер.

Шаблоны — настоящие картинки из `public/memes/`; картинки локальные, поэтому при экспорте нет проблем с CORS.

## Возможности

- 10 мемов в адаптивной галерее (1 колонка на мобильных, 2-4 на широких экранах)
- Перетаскивание подписей (pointer events, работает на touch)
- Настройки подписи: текст, размер, цвет, обводка, шрифт, выравнивание
- Добавление / удаление подписей, сброс; «Свой мем» — загрузка собственной картинки с двумя подписями
- Кириллические шрифты подписей из Google Fonts (Oswald, Russo One, Rubik Mono One)
- Экспорт в PNG (`html-to-image`, pixelRatio 2) и копирование в буфер обмена
- Сохранение состояния в `localStorage`
- Hash-роутинг (`#/meme/<id>`), тёмная тема по `prefers-color-scheme`

## Стек

Vue 3 + TypeScript, Vite, Tailwind CSS v4, html-to-image.

## Запуск

```bash
npm ci
npm run dev      # разработка
npm run build    # vue-tsc + vite build -> dist/
npm run preview  # предпросмотр сборки
```

## Деплой на GitHub Pages

В `vite.config.ts` задан `base: './'`, поэтому сборка работает под любым именем репозитория.
Workflow `.github/workflows/deploy.yml` запускается при push в `main` (или вручную).
В настройках репозитория: Settings -> Pages -> Source: **GitHub Actions**.

## Структура

```
src/components   Gallery, MemeCard, Editor, DraggableText, ControlsPanel
src/memes        реестр шаблонов index.ts и «Свой мем» (custom.ts)
public/memes     JPG-шаблоны
src/composables  useDraggable, useExport, useHashRoute
src/types        типы
```

## Источники изображений

Шаблоны взяты из публичного каталога шаблонов imgflip (`api.imgflip.com/get_memes`).
Права на исходные изображения принадлежат их авторам; изображения используются в учебных целях.
