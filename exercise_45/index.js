"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise45() {
    function createCar(manufacturer, modelName, ...options) {
        let carInfo = {
            manufacturer: manufacturer,
            modelName: modelName,
        };
        for (let option of options) {
            for (let key in option) {
                carInfo[key] = option[key];
            }
        }
        return carInfo;
    }
    // Calling the function with required information and additional options
    let car1 = createCar('Toyota', 'Camry', { color: 'Silver', year: 2022 });
    let car2 = createCar('Ford', 'Mustang', { color: 'Red', convertible: true });
    // Printing the returned objects
    console.log(car1);
    console.log(car2);
}
exports.default = exercise45;
