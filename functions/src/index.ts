import * as functions from 'firebase-functions';
import * as firebaseAdmin from 'firebase-admin';

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

firebaseAdmin.initializeApp();

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.post('/', (req, res) =>
  res
    .status(200)
    .json({
      message: 'hello world',
      requestBody: req.body
    })
);

export const helloWorld = functions.https.onRequest(app);
