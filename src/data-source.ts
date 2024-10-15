import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "arizH",
  password: "aris",
  database: "proyecto_dw",
  synchronize: true,
  logging: true,
  // entities: [Post, Category],
  subscribers: [],
  migrations: [],
});
