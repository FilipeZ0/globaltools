const PI = 3.141592
let radius;
let circumference;

document.getElementById("submit").onclick() = function () {
    radius = Number(document.getElementById("radius").value);
    
    circumference = 2 * PI * radius;
    document.getElementById("circumference").textContent = `Circumference: ${circumference} u.l.`;
}

console.log(circumference)