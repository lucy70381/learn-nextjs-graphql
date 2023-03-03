import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Picture {
  @Field(() => String, { nullable: true })
  PictureUrl1?: string | null;

  @Field(() => String, { nullable: true })
  PictureUrl2?: string | null;

  @Field(() => String, { nullable: true })
  PictureUrl3?: string | null;

  @Field(() => String, { nullable: true })
  PictureDescription1?: string | null;

  @Field(() => String, { nullable: true })
  PictureDescription2?: string | null;

  @Field(() => String, { nullable: true })
  PictureDescription3?: string | null;
}