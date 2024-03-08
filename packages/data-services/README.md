# data-services

## Prerequisites
1. Install bun.sh by visiting the [official documentation](https://bun.sh/docs/installation)
2. Create an account with MongoDB Atlas and create a FREE cluster. Note down the connection string.
3. Copy the `.env.sample` file to `.env` and update the `DB_URI` with the connection string from MongoDB Atlas.

## Steps
- Install dependencies:

```bash
bun install
```

- Import data
```bash
bun start
```

This will install the books in mongodb database.