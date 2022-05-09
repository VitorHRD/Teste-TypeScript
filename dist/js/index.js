"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
let t = [{ id: "pipoca", text: "abobora", src: "vinho" }];
let v = null;
let c = null;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
    Size["GG"] = "Gigante";
})(Size || (Size = {}));
;
const camisa = {
    Camisa: "regata",
    Tamanho: Size.M,
    Color: "Preta"
};
let teste;
teste = null;
function sum(a, b) {
    return a + b;
}
;
function sayHello(name) {
    const olá = `Olá ${name} a noite Tainha e muita programação`;
    return olá;
}
function noReturn(msg) {
    console.log(msg + " pipoca");
}
;
function greeting(name, greet) {
    if (greet) {
        console.log(`${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
;
;
let r = [{ n1: 3, n2: 4 }, { n1: 3, n2: 4 }];
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
;
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`Seu numero é ${info}`);
        return;
    }
    console.log("Não foi passado um número ");
}
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow === true) {
            console.log(`O usuário é um ${this.role}`);
            return;
        }
        console.log("Pedido Negado");
    }
}
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    ;
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
;
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.crearedAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
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
const cronos = new Car("fiat", 4);
cronos.showBrand();
const a4 = new SuperCar("audi", 4, 2.0);
console.log(a4);
a4.showBrand();
const sam = new Person("sam");
console.log(sam);
