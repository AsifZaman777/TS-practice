const bike: {
  type: string;
  brand: string;
  model: string;
  price: number;
  isAvailable: boolean;
} = {
    type: 'Mountain',
    brand: 'Hero',
    model: 'Xtreme',
    price: 1000,
    isAvailable: true
    };

console.log(bike);



const car : {type:string, mileage:number}
= {
    type: 'SUV',
    mileage: 20
};

car.type='Sedan'; 
car.mileage=10;

console.log(car);

// we can also use without defined list of properties

const plane : {[index:string]:number}= {};


plane.engine=2;
plane.wings=2;
plane.seats=100;

console.log(plane);


