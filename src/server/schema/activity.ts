import { Field, ID, ObjectType } from 'type-graphql';

import Picture from './picture';
import Position from './position';

@ObjectType()
export default class Activity {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  location!: string;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  organizer!: string;
  
  @Field(() => String)
  startTime!: string;
  
  @Field(() => String)
  endTime!: string;
  
  @Field(() => String, { nullable: true })
  cycle?: string | null;

  @Field(() => String, { nullable: true })
  websiteUrl?: string | null;

  @Field(() => String)
  class1!: string;

  @Field(() => String)
  class2!: string;

  @Field(() => String)
  city!: string;

  @Field(() => Picture)
  picture!: Picture;

  @Field(() => Position)
  position!: Position;
}