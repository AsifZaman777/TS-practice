{
    /*
    Enum: An enum is a special class that represents a group of constants (unchangeable variables, like final variables).
    Enums come with in two flavors: numeric and string enums.   
    */
}

//Numeric enums
// by default enums start numbering their members starting from 0
enum MapDirection {
    North,
    East,
    South,
    West
}

let currentDirection = MapDirection.South; 
console.log(currentDirection); // logs 2


//custom initialization
enum Color {
    Red = 1,
    Green,
    Blue
}

let currentColor = Color.Green;
console.log(currentColor); // logs 2

//fully initailized all members

enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let currentStatus = Status.ServerError;
console.log(currentStatus); // logs 500




//String Enums
enum CardinalDirections {
    North = 'NORTH',
    East = 'EAST',
    South = 'SOUTH',
    West = 'WEST'
}
console.log(CardinalDirections.North); // logs NORTH



