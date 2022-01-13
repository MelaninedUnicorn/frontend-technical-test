import { render, screen ,waitFor} from "@testing-library/react"

import { getInitials } from "../getInitials"

describe("GetInitialsUtils", () => {
    it("should return a string containing the first letter of each word of a string, separated by a dot", () => {
        expect(getInitials("Bbb")).toEqual(`B`);
        expect(getInitials("Aaa Bbb")).toEqual(`A.B`);
        expect(getInitials("Aaa Bbb Ccc")).toEqual(`A.B.C`);
        expect(getInitials("Aaa B3b C2c")).toEqual(`A.B.C`);
        expect(getInitials("1aa B3b C2c")).toEqual(`1.B.C`);
        expect(getInitials("1aa 222")).toEqual(`1.2`);
    })
}) 