
let price = document.querySelector("#price1");
let percentage = document.querySelector("#percentage");
let number_of_people = document.querySelector("#number-of-people");
let input = document.querySelectorAll(".input");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let reset = document.querySelectorAll(".reset");
let formBody1 = document.querySelector("#form-body1");
let formBody2 = document.querySelector("#form-body2");
let formBody3 = document.querySelector("#form-body3");
let formBody4 = document.querySelector("#form-body4");
let formBodyReset = document.querySelectorAll(".form-body-reset")
let test = document.querySelector("#test");
let final = document.querySelector("#final");
let priceHolder;

window.onload = function() {
    button1.addEventListener("click" , function() {
        console.log("button1 clicked")
        let priceInput = price.value.toString();
        let priceInputDollars = priceInput.split(".")[2];
        let priceInputCents = priceInput.split(".")[1];
        if (!priceInput || (price.value && priceInputCents && priceInputCents.length != 2)) {
            alert("Please enter a valid meal price.")
        } else {
            priceHolder = price.value;
        console.log(priceHolder);
        formBody1.style.display = "none";
        formBody2.style.display = "grid";
        }  
    });
    button2.addEventListener("click", function() {
        console.log("button2 clicked")
        if (percentage.value == "") {
            alert("Please choose a percentage.")
        } else {
            priceHolder += "," + percentage.value;
        console.log(priceHolder);
        formBody2.style.display = "none";
        formBody3.style.display = "grid";
        }
    });
    button3.addEventListener("click", function() {
        console.log("button3 clicked");
        if (number_of_people.value == "") {
            alert("Please enter the number of people splitting the tip.")
        } else {
        final.innerHTML = priceHolder + "," + number_of_people.value;
        priceHolder += "," + number_of_people.value;
        console.log(priceHolder);
        formBody3.style.display = "none";
        formBody4.style.display = "grid";
        }
    });
    for(let i = 0; i < reset.length; i++) {
        reset[i].addEventListener("click", function(){
            console.log("reset clicked");
            priceHolder = undefined;
            for(let i = 0; i < formBodyReset.length; i++) {
                formBodyReset[i].style.display = "none";
            }
            for(let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
            formBody1.style.display = "grid";
        })
    }
}