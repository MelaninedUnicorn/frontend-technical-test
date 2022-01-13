import { Mixed, TypeOf } from "io-ts"
import { pipe } from "fp-ts/lib/function"
import { fold } from "fp-ts/Either"

export const fetchAndValidate = async (url: string, cb = null): Promise<{ data: any; }> => {

    const response = await fetch(url);

    const data = await response.json();

    if (!cb) {
        return data;
    }
    else {
        return cb(data);
    }

}

