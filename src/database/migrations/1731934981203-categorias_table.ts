import { MigrationInterface, QueryRunner } from "typeorm";

export class CategoriasTable1731934981203 implements MigrationInterface {
    name = 'CategoriasTable1731934981203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
