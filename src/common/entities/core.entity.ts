import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class CoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAT: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}