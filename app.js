let Marky = prompt("Enter Your Marks Out of 550:");
let Marks = Number(Marky);
let Name = prompt("Enter Your NAME:");
let RollNo = prompt("Enter Your Roll No:");
let FontColor = prompt("Enter Sub Heading Font Color:");
let MainHd = prompt("Enter Main Heading Color:");
let BorderColor = prompt("Enter Border Color:");
let BorderStyle = prompt("Enter Border Style:");
let BoxBGColor = prompt("Enter Box Background Color:");
let PageBGColor = prompt("Enter Page Background Color:");
let FontStyle = prompt("Enter Font Style:");

let percentage = (Marks*100)/550;
let per = percentage.toFixed(2);

if(per>=80 && per<100){
    document.querySelector(".five").innerText = "GRADE: A+";
}
else if(per<80 && per>=70){
    document.querySelector(".five").innerText = "GRADE: A";
}
else if(per<70 && per>=60){
    document.querySelector(".five").innerText = "GRADE: B";
}
else if(per<70 && per>=60){
    document.querySelector(".five").innerText = "GRADE: C";
}
else if(per<60 && per>=50){
    document.querySelector(".five").innerText = "GRADE: D";
}
else if(per<50){
    document.querySelector(".five").innerText = "GRADE: FAIL";
}


document.querySelector(".box").style.borderColor= `${BorderColor}`;
document.querySelector(".box").style.borderStyle= `${BorderStyle}`;
document.querySelector(".box").style.backgroundColor = `${BoxBGColor}`;
document.querySelector(".box").style.fontFamily = `${FontStyle}`;
document.querySelector("body").style.backgroundColor = `${PageBGColor}`;
document.querySelector(".one").innerText = `NAME: ${Name}`;
document.querySelector(".two").innerText = `ROLL NO: ${RollNo}`;
document.querySelector(".three").innerText = `OBTAIN MARKS: ${Marks}`;
document.querySelector(".four").innerText = `TOTAL MARKS: 550`;
document.querySelector("h1").style.color = `${MainHd}`;
document.querySelector(".six").innerText = `PERCENTAGE: ${per}`;
