
# Country's capital city and their weather

This app enables users to give a country name and then receive the current weather of the capital city of that country.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Shemama/UltimateAI.git
```

Go to the project directory


Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## API Reference

#### Get the weather of a city

```http
  GET /country/${countryname}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `countryname` | `string` | **Required**. Name of the country |





