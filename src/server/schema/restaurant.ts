import { Field, ID, ObjectType } from "type-graphql";

import Picture from "./picture";
import Position from "./position";

@ObjectType()
export default class Restaurant {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  address!: string;

  @Field()
  phone!: string;

  @Field()
  openTime!: string;

  @Field(() => String, { nullable: true })
  websiteUrl?: string;

  @Field(() => String, { nullable: true })
  class?: string;

  @Field()
  city!: string;

  @Field(() => Picture)
  picture!: Picture;

  @Field(() => Position)
  position!: Position;
}