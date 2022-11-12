import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Flower {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", {length: 255})
    src: string;

    @Column("varchar", {length: 45})
    color: string;

    @Column("varchar", {length: 45})
    keywords: string;

    @Column("varchar", {length: 255})
    description: string;

}
