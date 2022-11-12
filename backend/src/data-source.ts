import "reflect-metadata"
import { DataSource } from "typeorm"
import { Flower } from "./entity/Flower"

export const MyDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "passyoshi",
    database: "myportofolio",
    synchronize: false,
    logging: false,
    entities: [Flower],
    migrations: [],
    subscribers: [],
})
