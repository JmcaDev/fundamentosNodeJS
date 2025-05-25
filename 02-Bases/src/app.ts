// const {emailTemplate} = require("./js-foundations/01-template")
// console.log(emailTemplate)

// require("./js-foundations/02-destructuring")

// const {getUserById} = require("./js-foundations/04-arrow")
// const id = 1
// getUserById(id, (error, user) =>{
//     if(error){
//         throw new Error(error)
//     }
//     console.log(user)
// })

// const {getAge, getUUID} = require("./plugins")
// const { buildMakePerson } = require("./js-foundations/05-factory")

// const makePerson = buildMakePerson({ getUUID, getAge})

// const obj = {name: "John", birthDate: "2000-07-12"}

// const john = makePerson(obj)
// console.log({john})

// const getPokemonById = require("./js-foundations/06-Promises")

// getPokemonById(4)
//     .then((pokemon) => console.log({pokemon}))
//     .catch((err) => console.error("Por favor intente de nuevo"))
//     .finally(() => console.log("Finalmente"))

import { buildLogger } from "./plugins/logger.plugin"

const logger = buildLogger("app.js")
logger.log("Hola mundo")
logger.error("Esto es un error")
