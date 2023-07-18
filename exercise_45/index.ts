
export default function exercise45 (): void {
    function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): any {
        let carInfo: { manufacturer: string; modelName: string; [key: string]: any } = {
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

    
       