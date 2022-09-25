import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { isBoolean, IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field((type) => Number)
    id: number;

    @Field(() => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;

    @Field((type) => Boolean, { nullable: true })
    @Column({ default: true })
    @IsOptional()
    @IsBoolean()
    isVegan?: boolean;

    @Field((type) => String)
    @Column()
    @IsString()
    address: string;

    @Field((type) => String)
    @Column()
    @IsString()
    ownerName: string;

    @Field((type) => String, { defaultValue: "snack" })
    @Column()
    @IsString()
    categoryName: string;
}
