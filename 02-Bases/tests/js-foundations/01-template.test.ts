import {test, describe, expect} from "@jest/globals"
import { emailTemplate } from "../../src/js-foundations/01-template"

describe("js-foundation/01-template.ts", () => {

    test("emailTemplate should contain a greeting", () => {
        expect(emailTemplate).toContain("Hi, ")
    })

    test("emailTemplate should contain {{name}} and {{orderId}}", () => {
        expect(emailTemplate).toMatch(/{{name}}/)
        expect(emailTemplate).toMatch(/{{orderId}}/)
    })
})