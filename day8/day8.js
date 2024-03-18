let demo="";
for(i=0;i<=15;i++){
    demo +=("the number is") +" "+i+"<br>";
}
document.getElementById("demo").innerHTML=demo;

let odd="";
for(i=7;i<=31;i++){
    if(i % 2 !=0){
        odd +=("the number is") +" "+i+"<br>";
    }
    
}
document.getElementById("odd").innerHTML=odd;

let even="";
for(i=10;i>=-20;i--){
    if(i % 2 ==0){
        even +=("the number is") +" "+i+"<br>";
    }
    
}
document.getElementById("even").innerHTML=even;

var element = ["element1" ,"element2","element3","element4"]

document.getElementById("element").innerHTML=element;
