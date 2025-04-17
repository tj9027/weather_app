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
- handle multiple city coordinates in the response
- openapi file to handle endpoints documentation
- create custom `Error` types

## How to run locally

- navigate directory `/backend` through terminal
- follow the `.env-example` to setup secrets
- install neccessary packages with `npm i` or `yarn` (assuming node.js is setup already)
- run the the following script `npm run dev` for local development
- the default `port` is 3000
- check connection with `curl -f http://localhost:3000/health`

## Available Endpoints

- `GET /health`
- `GET /weather-by-city`

### `GET /health`:
- return `200` when api is available

### `GET /weather-by-city`:

- requires `city` (string, required): the name of the city you want weather info for. - example: `/weather-by-city?city=London` 
- make 2 http request to `https://api.openweathermap.org/` 
  - first is to get coordinates to the requested `city` 
  - second is get forecast with `city` coordinates
- the output is as raw response from `https://api.openweathermap.org/data/2.5/forecast`. Which is an array of datapoints for the given coordinates.
