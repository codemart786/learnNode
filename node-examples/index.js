var rect = require('./rectangle');
function solveRectangle(l ,b) {
    console.log("Solving for rectangle with l = " +l+ " and b = "+b);
    rect(l ,b ,(err ,rectangle) => {
        if(err) {
            console.log("ERR "+err.message);
        } else {
            console.log("The area of rectangle is "+rectangle.area());
            console.log("The perimeter of rectangle is "+rectangle.perimeter());
        }
    });
}

solveRectangle(1 ,4);
solveRectangle(3 ,5);
solveRectangle(-1 ,0);
solveRectangle(0 ,0);
solveRectangle(5 ,-5);
solveRectangle(-5 ,5);

