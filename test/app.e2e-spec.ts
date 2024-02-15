import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/TestMessage')
      .expect(200)
      .expect('MY_MESSAGE - TestMessage');
  });

  it('/healthA (GET)', () => {
    return request(app.getHttpServer())
      .get('/healthA')
      .expect(200)
      .expect('MESSAGE_FOR_A - HEALTH A');
  });

  it('/healthB (GET)', () => {
    return request(app.getHttpServer())
      .get('/healthB')
      .expect(200)
      .expect('MESSAGE_FOR_B - HEALTH B');
  });
});
