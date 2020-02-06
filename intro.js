
console.log("Hola, mundo");

const PI = 3.14;
console.log("El valor de PI es " + PI);

/template string forma de concatenar/

console.log(`El valor de PI es ${PI}`)

let edad = 21;

if (edad >= 21) {
    console.log("Es mayor de edad");
}else{
    console.log("E menor de edad");
}

let contador = 0;
while (contador <3){
    console.log(`El valor de contador es  ${contador}`);
    contador++
}

for (let i = 0; i < contador; i++) {
    console.log(`El valor de i es ${i}`)
}


const numero = [10, 20, 15, 40, 50];
console.log(numero)


numero.push(70)
console.log(numero)

console.log(numero[1])

let ultimo = numero.pop()

console.log("------")
console.log(numero)
console.log(ultimo)

console.log(`longitud: ${numero.Longitud}`)

for (num in nuemro){
    console.log(`El valor es: ${num}`)
}