/* eslint-disable class-methods-use-this */
import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

import Activity from './activity';

@Resolver(Activity)
class ActivitiesResolver {
  @Query(() => [Activity])
  async activities(@Ctx() ctx: { prisma: PrismaClient }, @Arg('amount', () => Int, { nullable: true }) amount?: number) {
    const result = await ctx.prisma.activity.findMany({
      include: { position: true, picture: true },
    });
    if (amount) {
      return result.slice(0, amount) ?? [];
    }
    return result;
  }

  @Query(() => Activity, { nullable: true })
  async activity(@Arg('city', () => String) city: string,  @Ctx() ctx: { prisma: PrismaClient }) {
    const result = await ctx.prisma.activity.findMany({
      where: { city },
      include: { position: true, picture: true },
    });
    return result;
  }
}

export default ActivitiesResolver;