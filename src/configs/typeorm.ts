import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";
import { registerAs } from "@nestjs/config";
import * as path from 'path';

dotenvConfig({ path: ".env.development" });
/*process.env.DB_host*/
const config = {
    type: "postgres",
    database: "trabajo_m4",
    host: "dpg-cq5cmreehbks73bn4jvg-a",
    port: 5432,
    username: "postgresdb",
    password: "SvbfJNkZiD49KLFZPKySMvN7Km0RsSnn",
    synchronize: true,
    logging: false,
    dropSchema: true,
    autoLoadEntities: false,
    entities: [path.join(__dirname, '../../dist/**/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, '../../dist/migrations/*{.js,.ts}')],
};

export default registerAs("typeorm", () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
