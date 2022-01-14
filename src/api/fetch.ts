import { Mixed, TypeOf } from "io-ts"
import { pipe } from "fp-ts/lib/function"
import { fold } from "fp-ts/Either"

export const fetchAndValidate = async (url: string): Promise<any> => {

    const response = await fetch(url);
    const data = await response.json();
  
        return data;
   
}

