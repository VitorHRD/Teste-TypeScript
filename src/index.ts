
//tsc -w
let x: number = 10;

let t: { id: String, text: string, src: string }[] = [{ id: "pipoca", text: "abobora", src: "vinho" }];

let v: number | null = null;

//Type alias 

type myType = String | null;
let c: myType = null;

//enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
    GG = "Gigante"
};
const camisa: object = {
    Camisa: "regata",
    Tamanho: Size.M,
    Color: "Preta"
};


//Literal Types
let teste: "algum Valor" | null;
teste = null;


//functions
function sum(a: number, b: number) {
    return a + b;
};

function sayHello(name: String): String {
    const olá: string = `Olá ${name} a noite Tainha e muita programação`;
    return olá;
}
function noReturn(msg: string): void {
    console.log(msg + " pipoca");
};
function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
};

//interfaces 
interface MathFunctionParams {
    n1: number;
    n2: number;
};
let r: MathFunctionParams[] = [{ n1: 3, n2: 4 }, { n1: 3, n2: 4 }];

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
};
//narrowing
//checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`Seu numero é ${info}`);
        return;
    }
    console.log("Não foi passado um número ");
}

//generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(item);
    })
}
//classes
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean): void {
        if (canShow === true) {
            console.log(`O usuário é um ${this.role}`);
            return;
        }
        console.log("Pedido Negado");
    }
}

//interface em classes 

 interface IVehicle{
     brand : string
     showBrand():void
 }
 class Car implements IVehicle{
     brand
     wheels
     constructor(brand:string , wheels :number){
         this.brand = brand;
         this.wheels = wheels;
     };
     showBrand(): void {
         console.log(`A marca do carro é ${this.brand}`)
     }
 };

//herança 
class SuperCar extends Car {
    engine;

    constructor(brand : string , wheels:number , engine:number){
       super(brand , wheels);
       this.engine = engine ;
    }
}
//decorators
//constructor decorator
function BaseParamters(){
    return function<T extends {new (...args:any[]):{}}>(constructor:T){
        return class extends constructor{
            id= Math.random();
            crearedAt= new Date();
        }
    }
}
@BaseParamters()
class Person{
    name;

    constructor(name:string){
        this.name = name
    }
}
console.log(camisa);
console.log(c);
console.log(x);
console.log(t);
console.log(v);
console.log(sum(333, 333));
console.log(sayHello("marilene"));
noReturn("eu gosto de comer");
greeting("josé", "welcome");
greeting("josé");
console.log(r);
console.log(sumNumbers({ n1: 857, n2: 333 }));
doSomething(5);
doSomething(true);
showArraysItems([1, 2, 3]);
showArraysItems([{ a: "pipoca", b: "banana" }]);
showArraysItems(["carro", "moto", "Passarinho"]);
const marinho = new User("Zéca", "Admim", true);
console.log(marinho);
marinho.showUserName();
marinho.showUserRole(false);
const cronos = new Car("fiat" , 4);
cronos.showBrand()
const a4 = new SuperCar("audi" , 4, 2.0)
console.log(a4)
a4.showBrand()
const sam = new Person("sam");
console.log(sam)