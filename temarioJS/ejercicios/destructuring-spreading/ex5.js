// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let myPerson = {
    job: {
        name: "chocolatero"
    }
}

let {job: {name: myPersonJobName}} = myPerson

console.log(myPersonJobName)