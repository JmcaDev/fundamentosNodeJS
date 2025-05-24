
// const {emailTemplate} = require("./js-foundations/01-template")
// console.log(emailTemplate)


// require("./js-foundations/02-destructuring")
const {getUserById} = require("./js-foundations/04-arrow")

const id = 1

getUserById(id, (error, user) =>{
    if(error){
        throw new Error(error)
    }

    console.log(user)
})