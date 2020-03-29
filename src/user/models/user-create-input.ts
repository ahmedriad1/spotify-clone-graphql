import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserCreateInput {
    @IsNotEmpty()
    @IsEmail()
    @Field(() => String, { nullable: false })
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @Field(() => String, { nullable: false })
    name: string;

    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    password: string;
}
