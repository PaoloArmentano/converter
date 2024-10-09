/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = document.getElementById("user-input").value
const convertBtn = document.getElementById("convert-btn")
const metersFeetBox = document.getElementById("metersFeetBox")
const litersGallonsBox = document.getElementById("litersGallonsBox")
const kilogramsPoundsBox = document.getElementById("kilogramsPoundsBox")


function metersToFeet(){
    let userInput = document.getElementById("user-input").value
    let metersToFeetResult = userInput * 3.281
    let feetToMetersResult = userInput / 3.281
    metersFeetBox.innerText = `${userInput} meters = ${metersToFeetResult.toFixed(2)} feet | ${userInput} feet = ${feetToMetersResult.toFixed(2)} meters`
}


 function litersToGallons(){
    let userInput = document.getElementById("user-input").value
    let literstoGallonsResult = userInput * 0.264
    let gallonsToLitersResult = userInput / 0.264
    litersGallonsBox.innerText = `${userInput} liters = ${literstoGallonsResult.toFixed(2)} gallons | ${userInput} gallons = ${gallonsToLitersResult.toFixed(2)} liters`
 }


 function kilogramsToPounds(){
    let userInput = document.getElementById("user-input").value
    let kilogramsToPoundsResult = userInput * 2.204
    let poundsToKilogramsResult = userInput / 2.204
    kilogramsPoundsBox.innerText = `${userInput} kilograms = ${kilogramsToPoundsResult.toFixed(2)} pounds | ${userInput} pounds = ${poundsToKilogramsResult.toFixed(2)} kilograms`
 }


function convertAll(){
    metersToFeet()
    litersToGallons()
    kilogramsToPounds()
}

convertBtn.addEventListener("click", convertAll)

