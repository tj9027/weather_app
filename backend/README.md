# Backend

## Tehnology

- Node.js
- Express
- Axios
- Zod

## Structure

```
─ backend
│  ├─ .env-exammple
│  ├─ README.md
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ config.ts
│  │  ├─ controller
│  │  │  ├─ location.ts
│  │  │  └─ weather.ts
│  │  ├─ index.ts
│  │  ├─ router
│  │  │  ├─ health.ts
│  │  │  ├─ index.ts
│  │  │  └─ weather.ts
│  │  └─ types
│  │     ├─ location.type.ts
│  │     └─ weather.type.ts
│  └─ tsconfig.json
```

## About Structure

Main folders

- controller
- router
- types

`controller` contains main handlers for each endpoints and deal with external services/apis
`router` contains express routes. Main use could be the seperation between `public` and `private` endpoints
`types` contains only typescript data types and can be seperated in another `/shared` folder in a monorepo

## Possible Improvements

- handle data processing to offload from frontend
- better error handling and remove excessive use of `try/catch`
- internal error code for different api errors
- update the weather api to use latest available `3.0`
- create tests
