import { describe, expect, test } from "@jest/globals"
import { characteres } from "../../src/js-foundations/02-destructuring"

describe("js-foundation/02-destructuring.ts", () => {
    test("characteres should contain flash and supermand", () => {
        expect(characteres).toContain("Flash")
        expect(characteres).toContain("Superman")
    })

    test("First character should be Flash, and second superman", () => {
        const [flash, superman] = characteres

        expect(flash).toBe("Flash")
        expect(superman).toBe("Superman")
    })
})