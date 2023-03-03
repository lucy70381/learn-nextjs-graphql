import 'reflect-metadata';

import { PrismaClient } from '@prisma/client';
import ActivitiesResolver from '@server/schema/activities.resolver';
import HotelsResolver from '@server/schema/hotels.resolver';
import RestaurantsResolver from '@server/schema/restaurants.resolver';
import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { IncomingMessage, ServerResponse } from 'http';
import { buildSchema } from 'type-graphql';


// disable next js from handling this route
export const config = {
  api: {
    bodyParser: false,
  },
};
const prisma = new PrismaClient();
const server = new ApolloServer({
  schema: await buildSchema({
    resolvers: [HotelsResolver, ActivitiesResolver, RestaurantsResolver],
  }),
  context: () => ({ prisma }),
});


const startServer = server.start();

export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
};
