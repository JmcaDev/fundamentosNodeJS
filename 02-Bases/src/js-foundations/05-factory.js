
const buildMakePerson = ({getUUID, getAge}) => {

    return ({name, birthDate}) => {
        return{
            id: getUUID(),
            name,
            birthDate,
            age: getAge(birthDate)
        }
    }
}




// const john = buildPerson(obj)
// console.log(john)

module.exports = {
    buildMakePerson,
}