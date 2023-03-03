/* eslint-disable class-methods-use-this */
import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Query, Resolver } from "type-graphql";

import Hotel from './hotel';

@Resolver(Hotel)
class HotelsResolver {
  @Query(() => [Hotel])
  async hotels(@Ctx() ctx: { prisma: PrismaClient }) {
    const result = await ctx.prisma.hotel.findMany({
      include: { position: true, picture: true },
    });
    return result;
  }

  @Query(() => Hotel, { nullable: true })
  async hotel(@Arg('name', () => String) name: string, @Ctx() ctx: { prisma: PrismaClient }) {
    const result = await ctx.prisma.hotel.findFirst({
      where: { name },
      include: { position: true, picture: true },
    });
    return result;
  }
}

export default HotelsResolver;