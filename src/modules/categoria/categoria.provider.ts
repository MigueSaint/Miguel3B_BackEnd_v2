import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";


export const categoriaProviders=[
    {
        provide:'CATEGORIA_REPOSITORY_PG',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
        inject: ['DATABASE_CONNECTION_POSTGRES'],
    }
]