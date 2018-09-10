Install dependencies:

```
npm install
```

Run a mongoDB server (leave running in a terminal window):

```
mongod
```

Seed the database:

```
mongo < server/db/seed_data.js
```

Run webpack (leave running in a terminal window):

```
npm run build
```

Run express (leave running in a terminal window):

```
npm run server:dev
```

### Using

The application is running on port 3000 so visit http://localhost:3000/.
