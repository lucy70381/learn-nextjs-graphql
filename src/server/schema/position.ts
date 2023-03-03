import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Position {
  @Field(() => Number)
  PositionLon!: number;

  @Field(() => Number)
  PositionLat!: number;

  @Field(() => String)
  GeoHash!: string;
}