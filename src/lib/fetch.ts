import { Mixed, TypeOf } from "io-ts"
import { pipe } from "fp-ts/lib/function"
import { fold } from "fp-ts/Either"

export const fetchAndValidate = <T extends Mixed>(
    url: string,
    validator: T
): Promise<TypeOf<T>> =>
    fetch(url)
        .then((r) => r.json())
        .then(
            (object) =>
                new Promise((resolve, reject) => {
                    console.log(object)
                    const validatedData = validator.decode(object)
                    pipe(
                        validatedData,
                        fold(
                            (left) => reject(left),
                            (right) => resolve(right)
                        )
                    )
                })
        )