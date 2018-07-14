var rect = {
    perimeter: (x ,y) => (2 * (x + y)),
    area: (x ,y) => (x * y)
};

function solveRectangle(l ,b) {
    console.log("Solving for rectangle with l = " +l+ " and b = "+b);

    if(l <= 0 || b <= 0)    console.log('Rectangle dimensions should be greater than zero');
    else {
         console.log('The area of rectangle is '+rect.area(l ,b));
         console.log('The perimeter of rectangle is '+rect.perimeter(l ,b));
   }
}

solveRectangle(2 ,4);
solveRectangle(3 ,5);
solveRectangle(-1 ,0);
solveRectangle(0 ,0);
solveRectangle(5 ,-5);
solveRectangle(-5 ,5);

