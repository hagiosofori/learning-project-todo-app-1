
import request from 'supertest';
import app from "./index";

describe("Server",() => {
  test(
    `given that the server is running, 
    when a request is made to the / endpoint, 
    then it should return the text "Express + Typescript server"`,
    async () => {
      const response = await request(app).get('/');

      expect(response.text).toEqual('Express + Typescript server')
    }
  );
});
