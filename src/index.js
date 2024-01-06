import app from './app.js';
import 'dotenv/config';
import { dbConn } from './db/conn.js'
import { PORT } from './config.js'


dbConn();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})