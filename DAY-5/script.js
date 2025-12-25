 //area and Perimeter of 
 let length = Number(prompt("Enter a length"));
 let PI = 3.14;
 let Diameter = Number(prompt("Enter Diameter"));
 let radius = Diameter/2;
 let Breadth = Number(prompt("Enter a Breadth"))
 let Height = Number(prompt("Enter a Height"))

 //Sphere
console.log("The Area of Sphere is " + Math.round(4*PI*radius*radius));
console.log("The perimeter of Sphere is " + Math.round(2*PI*radius));
 
 //square
console.log("The Area of Square is " + Math.round(length*length));
console.log("The perimeter of Square is " + Math.round(4*length));

 //cone
console.log("The Area of Cone is " + Math.round(PI*radius * (length+radius)));
console.log("The perimeter of Cone is " + Math.round(2/PI*radius));

 //hemisphere
 console.log("The Area of Hemisphere is " + Math.round(3*PI*radius*radius));
 console.log("The perimeter Hemisphere is " + Math.round(2*PI*radius));

 //rectangle
 console.log("The Area of Rectangle is " + Math.round(length*Breadth));
console.log("The perimeter of Rectangle is " + Math.round (2*(length+Breadth)) );

 //triangle
 console.log("The Area of Triangle is " + Math.round((1/2)*Breadth*Height));
console.log("The perimeter of Triangle is " + Math.round (length+Breadth+Height));