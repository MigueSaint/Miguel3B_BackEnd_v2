import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser1731681730577 implements MigrationInterface {
    name = 'ModificandoTableUser1731681730577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
