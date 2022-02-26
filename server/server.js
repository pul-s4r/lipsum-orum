import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'fastify-cors';
import multipart from 'fastify-multipart';
import dotenvExpand from 'dotenv-expand';
import config from './config/serverconf.js';

import userRoutes from './routes/user.js';
import contentEntryRoutes from './routes/contentEntry.js';
import timelineRoutes from './routes/timeline.js';

const envs = dotenv.config();
dotenvExpand.expand(envs);
const CONNECTION_URL = process.env.CONNECTION_URL;

const fastify = Fastify({logger: true});
const client = new MongoClient(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(CONNECTION_URL);

async function testroute (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
};

// fastify.register(require('fastify-swagger'), swagger.options);
fastify.register(cors, { origin: `${config.url}${config.port}` });
fastify.register(multipart); 

var routeList = [userRoutes, contentEntryRoutes, timelineRoutes];
for(let idx in routeList) {
  routeList[idx].forEach((route, idx) => {
    fastify.route(route);
  });
}

fastify.register(testroute);

const start = async () => {
  try {
    await fastify.listen(config.port, config.url);
    /* await client.connect((err) => {
      const collection = client.db("test").collection("devices");
      // console.log("Connected with result: ", collection);
    }); */
    mongoose.connect(process.env.CONNECTION_URL)
      .then(() => console.log("MongoDB Connected ..."));
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  } finally {
    await client.close();
  }
};

start();
