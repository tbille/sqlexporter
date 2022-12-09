# SQL exporter

Script to run a sql query with node.

## Run

- Run a pocketbase instance and create a new collection: queries with column: row as a number
- Create a `.env` file

```
export DATABASE_URI=
export SQL_QUERY=

export POCKETBASE_URI=
export POCKETBASE_USER=
export POCKETBASE_PASSWORD=

export USER_ID=
```

- `source .env`
- `npm install`
- `node app.js`