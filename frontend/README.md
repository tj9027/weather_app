# FrontEnd

## Technology

-Vite
-React
-Tailwind CSS
-Zod
-Lucide(icons)
-date-fns

## Structure

```
─ frontend
│  ├─ README.md
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  └─ react.svg
│  │  ├─ component
│  │  │  ├─ CurrentWidget.tsx
│  │  │  ├─ ForecastCard.tsx
│  │  │  ├─ ForecastWidget.tsx
│  │  │  ├─ InputWidget.tsx
│  │  │  └─ Navigation.tsx
│  │  ├─ config.ts
│  │  ├─ index.css
│  │  ├─ main.tsx
│  │  ├─ page
│  │  │  └─ Dashboard.tsx
│  │  ├─ service
│  │  │  └─ weather.ts
│  │  ├─ store
│  │  │  └─ weatherStore.tsx
│  │  ├─ types
│  │  │  ├─ backendWeather.type.ts
│  │  │  └─ formattedWeather.type.ts
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.app.json
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
```

## About structure

Main differences from the Vite boilerplate.

- component
- store
- page
- service
- types

`store` contains `context providers` to keep them from other possible future `hooks`

`component` contains only relevant blocks. Future folder seperations for modular blocks such as main "theme" building blocks and feature by feature blocks.

`service` contains only files which handle data

`types` contains only type/interface

`page` contain only main pages. in this case only `Dashboard`

## Possible Improvements

- remove data handling from service and use `backend` to restructure data to reduce load.
- in a monorepo; create `shared` folder containing common files such as `type`
- create more `page` to handle different scenarios such as `error` page.
- create more robust ux/ui with tailwind
- create tests
- verify `health` of backend api before load and handle error accordingly
- add `dropdown select` in case multiple city matches the user `input` string 

## How to run locally

- navigate directory `/frontend` through terminal
- install neccessary packages with `npm i` or `yarn` (assuming node.js is setup already)
- run the the following script `npm run dev` for local development
- open browser (if doesn't open automatically) and go to `http://localhost:5173`
