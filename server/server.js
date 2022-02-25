import Fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import dotenv from 'dotenv';
// import routes from './routes.js';
import config from './config/serverconf.js';

const fastify = Fastify({logger: true});

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
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
