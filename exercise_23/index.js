"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise23() {
    let car = 'subaru';
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == 'subaru');
    console.log("Is car == 'honda'? I predict False.");
    console.log(car == 'honda');
    console.log("Is car === 'Subaru'? I predict False.");
    console.log(car === 'Subaru');
    console.log("Is car !== 'toyota'? I predict True.");
    console.log(car !== 'toyota');
    console.log("Is car != 'audi'? I predict True.");
    console.log(car != 'audi');
    console.log("Is car !== 'subaru'? I predict False.");
    console.log(car !== 'subaru');
    console.log("Is car.startsWith('su')? I predict True.");
    console.log(car.startsWith('su'));
    console.log("Is car.includes('baru')? I predict True.");
    console.log(car.includes('baru'));
    console.log("Is car.length === 6? I predict True.");
    console.log(car.length === 6);
    console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
    console.log(car.toUpperCase() === 'SUBARU');
}
exports.default = exercise23;
