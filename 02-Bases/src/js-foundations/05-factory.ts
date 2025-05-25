interface BuildMakePersonOptios {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptios {
    name: string;
    birthDate: string;
}


export const buildMakePerson = ({getUUID, getAge}: BuildMakePersonOptios) => {

    return ({name, birthDate}: PersonOptios) => {
        return{
            id: getUUID(),
            name,
            birthDate,
            age: getAge(birthDate)
        }
    }
}
