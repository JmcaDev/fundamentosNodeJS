import { describe, expect, test } from "@jest/globals"
import { buildMakePerson } from "../../src/js-foundations/05-factory"

describe("js-foundations/05-factory", () => {
    
    const getUUID = () => "1234"
    const getAge = () => 24

    test("BuildmakePerson should return a function", () => {
        const makePerson = buildMakePerson({getUUID, getAge})

        expect(typeof makePerson).toBe("function")
    })

    test("Make person should return a person", () => {
        const makePerson = buildMakePerson({getUUID, getAge})
        const johnDoe = makePerson({name: "John Doe", birthDate: "2000-07-12"})
        expect(johnDoe).toStrictEqual({ id: '1234', name: 'John Doe', birthDate: '2000-07-12', age: 24 })
    })
})