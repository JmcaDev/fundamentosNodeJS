import { describe, expect, test } from "@jest/globals"
import { getUserById } from "../../src/js-foundations/03-callbacks"

describe("js-foundations/03-callbacks", () => {
    test("getUserById should return an error if user does not exist", () => {
        const id = 10
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id: ${id}`)
            expect(user).toBeUndefined()
        })
    })

    test("getUserById should return the user", () => {
        const id = 1
        getUserById(id, (err, user) => {

            expect(user).toStrictEqual({
                id: 1,
                name: "John Doe"
            })
            expect(err).toBeUndefined()
        })
    })
})