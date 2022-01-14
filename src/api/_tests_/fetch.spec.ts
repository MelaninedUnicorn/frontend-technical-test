import { render, screen ,waitFor} from "@testing-library/react"
import { baseUrl } from "../common";
import { setupServer } from 'msw/node';
import { fetchAndValidate } from "../fetch"
import { DefaultRequestBody, rest } from "msw";

const server = setupServer(
  rest.get<DefaultRequestBody, any>(
      `${baseUrl}`,
      (req, res, ctx) => {
          return res(
              ctx.delay(100),
              ctx.json({})
          );
      }
  ),
  rest.get<DefaultRequestBody, any>(
      `${baseUrl}/conversations/1`,
      (req, res, ctx) => {
          return res(
              ctx.delay(100),
              ctx.json([
                  {
                      "id": 1,
                      "recipientId": 2,
                      "recipientNickname": "Jeremie",
                      "senderId": 1,
                      "senderNickname": "Thibaut",
                      "lastMessageTimestamp": 1625637849
                  },
                  {
                      "id": 2,
                      "recipientId": 3,
                      "recipientNickname": "Patrick",
                      "senderId": 1,
                      "senderNickname": "Thibaut",
                      "lastMessageTimestamp": 1620284667
                  },
                  {
                      "id": 3,
                      "recipientId": 1,
                      "recipientNickname": "Thibaut",
                      "senderId": 4,
                      "senderNickname": "Elodie",
                      "lastMessageTimestamp": 1625648667
                  }
              ])
          );
      }
  ),


);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
describe("FetchUtils", () => {
    it("should return an empty object", async () => {
      const data = await fetchAndValidate(baseUrl);
        
            expect(data).toEqual({});
        
      
        
    })
    it('should returns expected dataset', async ()  => {
      const expected = [
        {
          "id": 1,
          "recipientId": 2,
          "recipientNickname": "Jeremie",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1625637849
        },
        {
          "id": 2,
          "recipientId": 3,
          "recipientNickname": "Patrick",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1620284667
        },
        {
          "id": 3,
          "recipientId": 1,
          "recipientNickname": "Thibaut",
          "senderId": 4,
          "senderNickname": "Elodie",
          "lastMessageTimestamp": 1625648667
        }
      ]
   
    
      const data = await fetchAndValidate(`${baseUrl}/conversations/1`)

      expect(data).toEqual(expected);
    });
    
    
}) 