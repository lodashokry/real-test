let text="";
for(i=0;i<16;i++){
    text+="the number is "+""+i+"<br>";
}
document.getElementById("demo").innerHTML=text; 

let odd = "";

for (let i = 7; i < 32; i++) {
    if (i % 2 !== 0) {
        odd += "The odd number is " + i + "<br>";
    }
}

document.getElementById("odd").innerHTML = odd;

let even = "";

for (let i = 10; i >= -20; i--) {
    if (i % 2 == 0) {
        even += "The even number is "+"" + i + "<br>";
    }
}

document.getElementById("even").innerHTML = even;

var element = ["element1", "element2", "element3", "element4"];
document.getElementById( "element").innerHTML=element;