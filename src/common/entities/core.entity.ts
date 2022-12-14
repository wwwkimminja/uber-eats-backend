import { Field } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class CoreEntity {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    @CreateDateColumn()
    @Field(type => Date)
    createdAT: Date;

    @UpdateDateColumn()
    @Field(type => Date)
    updatedAt: Date;


}