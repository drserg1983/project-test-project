import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserRol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userRol: string;

}