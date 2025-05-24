
// const {emailTemplate} = require("./js-foundations/01-template")
// console.log(emailTemplate)


// require("./js-foundations/02-destructuring")
const {getUserById} = require("./js-foundations/03-callbacks")

const id = 3

getUserById(id, function(error, user){
    if(error){
        throw new Error(error)
    }

    console.log(user)
})