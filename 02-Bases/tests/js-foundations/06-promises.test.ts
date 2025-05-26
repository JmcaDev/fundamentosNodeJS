import { describe, expect, test } from "@jest/globals"
import { getPokemonById } from "../../src/js-foundations/06-Promises"

describe("js-foundations/06-promises", () => {
    test("getPokemongById should return a pokemon", async() => {
        const pokemonId = 1
        const pokemonName = await getPokemonById(pokemonId)

        expect(pokemonName).toBe("bulbasaur")
    })

    test("getPokemonById should return an error if pokemon does not exist", async()=>{
        const pokemonId = 1000000
        
        try {
            await getPokemonById(pokemonId)
            expect(true).toBe(false)
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id: ${pokemonId}`)
        }

    })
})