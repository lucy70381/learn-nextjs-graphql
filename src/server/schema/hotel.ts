import { Field, ID, ObjectType } from 'type-graphql';

import Picture from './picture';
import Position from './position';

@ObjectType()
export default class Hotel {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
  
  @Field(() => String, { nullable: true })
  description: string | null | undefined;
  
  @Field(() => String)
  address!: string;
  
  @Field(() => String)
  city!: string;

  @Field(() => String)
  phone!: string;

  @Field(() => String, { nullable: true })
  websiteUrl?: string | null;

  @Field(() => String)
  class!: string;
  
  @Field(() => String, { nullable: true })
  serviceInfo?: string | null;
  
  @Field(() => Picture)
  picture!: Picture;

  @Field(() => Position)
  position!: Position;
}
