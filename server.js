import Fastify from 'fastify'

export async function init () {
	const fastify = Fastify({});
	fastify.get('/api/health', (request, reply) => {
		reply.send({ status: 'ok' })
	});

    // register any extra routes here
	fastify.register(await import('./plugins/users'), { prefix: '/api' });

	return fastify;
}