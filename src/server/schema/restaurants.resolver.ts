/* eslint-disable class-methods-use-this */
import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

import Restaurant from "./restaurant";

@Resolver(Restaurant)
class RestaurantsResolver {
  @Query(() => [Restaurant])
  async restaurants(@Ctx() ctx: { prisma: PrismaClient }, @Arg('amount', () => Int, { nullable: true }) amount?: number) {
    const result = await ctx.prisma.restaurant.findMany({
      include: { position: true, picture: true },
    });
    if (amount) return result.slice(0, amount);
    return result;
  }
}

export default RestaurantsResolver;