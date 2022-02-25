import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
// import routes from './routes.js';
import config from './config/serverconf.js';

const envs = dotenv.config();
dotenvExpand.expand(envs);
const CONNECTION_URL = process.env.CONNECTION_URL;

const fastify = Fastify({logger: true});
const client = new MongoClient(process.env.CONNECTION_URL);
// console.log(CONNECTION_URL);

async function testroute (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
};

// fastify.register(require('fastify-swagger'), swagger.options);
// fastify.register(fastifyCors, () => {
//
// });

fastify.register(testroute);

const start = async () => {
  try {
    await fastify.listen(config.port, config.url);
    await client.connect();
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  } finally {
    await client.close();
  }
};

start();
