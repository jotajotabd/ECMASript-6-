let arr = [{

    name: "Jhoa",
    edad: 30,
    alias: "JJ"
},{
    name: "Jhon",
    edad: 35,
    alias: "JE"
},
{
    name: "Jose Luis",
    edad: 59,
    alias: "Berry"
},
{
    name: "Vilma",
    edad: 61,
    alias: "Mima"
}]

// ARROW FUNCTION:

let familiaName = arr.map(function(persona){
    console.log(`${persona.name} pero les dicen ${persona.alias}`)
})

let familiaAge = arr.map(persona => console.log (persona.edad))

const suma = num => num + num;

// Clases, módulos y generadores:

class calculadora {
    constructor (){
        this.number1 = 0;
        this.number2 = 0;
    }
    calcular(a,b){
        this.number1 = a;
        this.number2 = b;
        return this.number1 + this.number2
    }
}

const SUMA = new calculadora();
console.log(SUMA.calcular(4,6))

// Funciones generadoras:

function* generadorDeCalculos(){

    yield `El resultado es ${5 + 5}`;

    yield `El resultado es ${5 * 5}`;

    yield `El resultado es ${5 / 5}`;
}

let calculoGenerator = generadorDeCalculos();

console.log(calculoGenerator.next().value)
console.log(calculoGenerator.next().value)
console.log(calculoGenerator.next().value)
console.log(calculoGenerator.next().value)

// Ecm 7 (Includes y multiplicación de exponentes)

var arr1 = [1,2,3,4,5]

if (arr1.includes(4)){
    console.log("Si está")
}else{
    console.log("No está")
}

var numero = 5
var exponente = 2

var resultado = numero ** exponente
console.log(resultado)

// Ecm 8 ( Obeject entries, values, padStart y padEnd)

const nameFamily = Object.entries(arr);
console.log(nameFamily)

const edadFamily = Object.values(arr);
console.log(edadFamily.length)

// Ecm 8 (Async y await )

const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero

// Otro ejemplo

const delay = () => {
    return new Promise(
        resolve => setTimeout(resolve, 1000)
    )
};
const counter = async() => {
    await delay();
    console.log('one second')
    await delay();
    console.log('two seconds')
    await delay();
    console.log('three seconds')
    await delay();
    console.log('four seconds')
    await delay();
    console.log('five seconds')
};
counter();


// ECM 9 (Continuación)

/**
 * Spread Operator
 */
 const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
  };
  
  let { name, ...addInfo } = obj;
  console.log(`name: ${name}`);
  console.log(`additional information: `, addInfo);
  
  let { country, ...nameAndAge } = obj;
  console.log(`name and age: `, nameAndAge);
  
  /**
   * Porpagation Properties
   */
  const person = {
    name: 'Oscar',
    age: 32
  };
  
  const personInformation = {
    ...person,
    country: 'MX'
  };
  console.log(`personInformation: `, personInformation);
  
  /**
   * Promise Finally
   */
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);

//Ecm 10 

//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

//----------------trim---------------------------/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello1 = 'hello world                  ';
console.log(hello1);
console.log(hello1.trimEnd()); // final

//-------------optional catch biding-------------/

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);