# Тихо — демо-сайт кофейни

Next.js 15, React 19, TypeScript, Tailwind CSS 4, Lucide и Framer Motion. Русский интерфейс, цены в тенге. Backend и база данных не используются.

## Запуск

Требуется Node.js 20.9 или новее и npm.

```bash
npm install
npm run dev
```

Откройте http://localhost:3000.

```bash
npm run build
npm start
```

## Где менять содержимое

- `lib/content.ts`: название, адрес, часы, контакты, маршрут, категории, блюда, цены и пути фотографий.
- `components/Header.tsx`, `components/Footer.tsx`: начертание логотипа «тихо».
- `components/Hero.tsx`, `About.tsx`, `Features.tsx`, `Reviews.tsx`, `CTA.tsx`: тексты соответствующих секций.
- `public/images/`: локальные фотографии, не зависящие от доступности фотостока.
- `app/globals.css`: палитра в `:root`, типографика, адаптивные размеры и оформление.
- `app/layout.tsx`: заголовок и описание сайта.
- `public/icon.svg`: favicon.

Компоненты: Header, Hero, Menu, PopularItems, About, Features, Gallery, Reviews, Location, CTA, Footer и Reservation. `ui.tsx` содержит общие фотографии и анимацию появления.

## Демо-поведение

Форма бронирования валидирует обязательные поля и показывает подтверждение. Никакие данные не передаются и реальная бронь не создаётся. Имя, номер, адрес, аккаунт и отзывы вымышлены. Instagram открывает пояснение внутри сайта; маршрут ведёт на Google Maps по указанному адресу. Карта на странице — декоративная схема. Перед коммерческим использованием замените реквизиты и подключите настоящую обработку бронирования.

## Vercel

Загрузите эту папку в Git-репозиторий и импортируйте его в Vercel. Framework preset: Next.js; Build Command: `npm run build`. Переменные окружения не требуются. Проект не опубликован автоматически.

## Фотографии

Фото скачаны с Unsplash, используются по [Unsplash License](https://unsplash.com/license). Источники:

- Кофе — [Austin Kehmeier](https://unsplash.com/photos/cup-of-latte-HKCHMb-dDqM).
- Интерьер — [Henry Williams](https://unsplash.com/photos/cozy-cafe-interior-bathed-in-warm-sunlight-kV6finvoSd0).
- Круассан — [S O C I A L . C U T](https://unsplash.com/photos/a-woman-holding-a-croissant-in-her-hand-cdjfCRty_hk).
- Торт — [Branimir Petakov](https://unsplash.com/photos/a-piece-of-cake-and-a-cup-of-coffee-on-a-table-MkJ6MbwXSps).
- Бариста — [Kaylee Stoll](https://unsplash.com/photos/barista-pouring-milk-into-coffee-cup-YplXDULeSFA).
