import { render, screen ,waitFor} from "@testing-library/react"
import { baseUrl } from "../../api/common";

import { fetchAndValidate } from "../fetch"

describe("FetchUtils",  () => {
    it("should return an empty object", () => {
        fetchAndValidate(baseUrl).then((data)=>{
            console.log(data)
            expect(data).toEqual({});
        })
      
        
    })
    it("should returns expected dataset ", () => {
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
        fetchAndValidate(`${baseUrl}/conversations/1`).then((data)=>{
            console.log(data)
            expect(data).toEqual(expected);
        })
      
        
    })
}) 