import { describe, expect, jest, test } from "@jest/globals"
import { httpClientPlugin } from "../../src/plugins/http-client"

describe("plugins/http-client.ts", () => {
    test("httpClientPlugin.get() should return a string", async () => {
        const data = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1")

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        })
    })
})