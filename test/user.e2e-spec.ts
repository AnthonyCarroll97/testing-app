import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from 'supertest';
import { AppModule } from "src/app.module";


describe("user e2e tests", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("should get a 200 from GET /users", () => {
        return request(app.getHttpServer())
        .get("/users")
        .expect(200)
    })

    it("GET /users/:id", () => {
        return request(app.getHttpServer())
        .get("/users/1")
        .expect(200)

    })

    it("should not create a user that does not have a first and last name", () => {
        return request(app.getHttpServer())
        .post("/users")
        .expect(422)
    })

    it("should create a user", async () => {
        const response = await request(app.getHttpServer())
        .post("/users")
        .send({
            email: "ryo@email.com",
            name: "Ryo"
        })

        expect(response.status).toEqual(201)
        
    })
})