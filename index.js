// // // document.getElementById("text-count").innerText="1";
// // let myage=0;
// // console.log(myage);
// let myage,mydogage
// myage=1;
// mydogage=7;
// console.log(myage*mydogage)
// let bonouspoints=50
// console.log(bonouspoints)
// bonouspoints=bonouspoints+50
// console.log(bonouspoints)
// bonouspoints=bonouspoints-25
// console.log(bonouspoints)
// bonouspoints=bonouspoints+70
// console.log(bonouspoints)
// let firstname="arun",lastname="kumar"
// let fullname=firstname+lastname
// console.log(fullname)
// let firstname="Arun", lastname="kumar"
// // let fullname=firstname+lastname

// function greeting(){
//     console.log("hi there"+" "+firstname+" "+lastname)
// }
// // greeting()
// let mypoints=3

// function add3points(){
//     mypoints+=3
// }
// function removal(){
//     mypoints-=1
// }
// add3points()
// add3points()
// add3points()
// removal()
// removal()



// console.log(mypoints)
// function purchasing(){
//     console.log("button clicked")
//     document.getElementById("error").innerText="something went wrong";
// }
// let result=document.getElementById("error")
// console.log(result)



// function purchasing(){
//     console.log("button clicked")
//     result.textContent="something went wrong try again later"
// }
// let result=document.getElementById("error")






// console.log("10"+"20") // "1020"
// console.log(10+20) // 30
// console.log("10"+20) // "1020"
// console.log(10+"20") // "1020"



// let data=document.getElementById("data")
// let change=document.getElementById("count")
// let count=0

// function clicked(){
//     count+=1
//     console.log("Increment button "+count+" clicked")
//     change.innerText = "the count is " +  count;
// }

// // let save=document.getElementById("save-btn")
// function saved (){
//     let countStr=count +"-"
//     console.log("Save button clicked")
//     data.innerText +=countStr;
//     change.innerText = "the count is 0";
//     count=0
// }



// let data=document.getElementById("data")
// let change=document.getElementById("count")
// let valued=document.getElementById("id1")
// let count=0
// let finalcount = 0
// function clicked(){
//     count+=1
//     console.log("Increment button "+count+" clicked")
//     change.innerText = "the count is " +  count;
// }

// function saved (){
//     let countStr=count +"-"
//     console.log("Save button clicked")
//     data.innerText +=countStr;
//     change.innerText = "the count is 0";    
//     finalcount =count+finalcount
//     valued.innerText = "the count is " + finalcount;
//     count=0

// }



// let num1=8
// let num2=2  
// document.getElementById("num1-el").innerText=num1
// document.getElementById("num2-el").innerText=num2

// function add(){
//     let result=num1+num2
//     document.getElementById("result").innerText="Sum: "+result
// }
// function sub(){
//     let result=num1-num2
//     document.getElementById("result").innerText="Difference: "+result
// }
// function div(){
//     let result=num1/num2
//     document.getElementById("result").innerText="Quotient: "+result
// }

// function mul(){
//     let result=num1*num2
//     document.getElementById("result").innerText="Product: "+result
// }



// let age = 100
// if (age < 100) {
//     console.log("Not eligible")
// }
// else if(age ===100){
//     console.log("here is your birthday card from the king")
// }
// else{
//     console.log("not eligible, you have already gotten one")
// }



// let firstcard =10
// let secondcard = 11

// let sum = firstcard + secondcard

// if(sum<=20){
//     console.log("do you want to draw a new card?")
// }
// else if(sum===21){
//     console.log("Blackjack!")
// }
// else{
//     console.log("You are out of the game!")
// }


// let hasDiscount = true

// function processingOrder() {
//     if (hasDiscount) {
//         console.log("discount applied to your food")
//         hasDiscount = false
//     } else {
//         console.log("no discount added to your food")
//     }
// }
// processingOrder()
// processingOrder()

// let firstcard = 10
// let secondcard = 10
// let hasBlackjack = false
// let isAlive = true
// let sum = firstcard + secondcard
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let check =false


// function startGame() {
//     console.log("Started the game")
//     renderGame()
// }

// function renderGame() {
// console.log("rendered game")
// if(!check){
// cardsEl.innerText = "cards: " +firstcard + ", " + secondcard
// check = true
// }

// sumEl.textContent = "Sum: " + sum
// if(sum <= 20) {
//     message = "do you want to draw a new card?"
//     // console.log(message)
//     // console.log("do you want to draw a new card?")
// }
// else if(sum === 21) {
//     message = "Blackjack!"
//     // console.log(message)
//     // console.log("Blackjack!")
//     hasBlackjack = true
//     isAlive = false
// } else {
//     message = "You are out of the game!"    
//     // console.log("You are out of the game!")
//     isAlive = false
// }
// // console.log(message)
// console.log("Is alive: " + isAlive)
// messageEl.textContent = message
// }


// function drawNewCard() {
//     console.log("you taken a new card")
//     let newCardValue = 1
//     sum += newCardValue
//     cardsEl.textContent += ", " + newCardValue
//     sumEl.textContent = "Sum: " + sum
//     renderGame()
// }



// let featuredposts =[
//     "How to learn JavaScript",
//     "Understanding Asynchronous JavaScript",
//     "JavaScript Best Practices for Beginners"
// ]
// console.log(featuredposts)

// let details = [
//     "arun",
//     20,
//     true
// ]
// console.log(details)

// let featuredposts = [
//     "How to learn JavaScript",
//     "Understanding Asynchronous JavaScript",
//     "JavaScript Best Practices for Beginners"
// ]

// let newpost = "How to learn JavaScript in 2023"
// featuredposts.push(newpost)
// console.log(featuredposts)
// let anotherpost = 20
// featuredposts.push(anotherpost)
// console.log(featuredposts)
// featuredposts.pop()
// console.log(featuredposts)



// let cards
// let isAlive
// let hasBlackjack = false
// let sum = 0
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el")
// let player = {
//     name: "Arun",
//     chips: 145,
//     sayHello: function(){
//         console.log("Hello, my name is " + this.name + " and I have $" + this.chips)
//     }
// }
// player.sayHello() // Call the sayHello method to display player's name and chips
// playerEl.textContent = player.name + ": $" + player.chips // Display player's name and chips
// let check =false

// function getRandomCard() {
//     let randomNumber = Math.floor (Math.random() * 13) + 1 // Generate a random number between 1 and 13
//     if(randomNumber >10) {
//         return 10 // If the card is Ace, return 11
//     }
//     else if(randomNumber === 1) {
//         return 11 // If the card is Ace, return 11
//     }
//     else{
//         return randomNumber // Return the random number as is
//     }
// }

// function startGame() {
        
//     let firstcard = getRandomCard() // Function to get a random card value
//     let secondcard = getRandomCard() // Function to get a random card valu
//     console.log("Started the game")
//     cards= [firstcard, secondcard] // Array to hold the cards
//     console.log(cards)
//     isAlive= true
//     sum = firstcard + secondcard // Calculate the initial sum of the cards
//     renderGame()

// }



// function renderGame() {
// console.log("rendered game")
// // if(!check){
// // cardsEl.innerText = "cards: " +firstcard + ", " + secondcard
// // check = true
// // }
// cardsEl.textContent = "Cards: " // Reset the cards display
// for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent +=  cards[i] +" " // Display all cards in the array
// }

// sumEl.textContent = "Sum: " + sum
// if(sum <= 20) {
//     isAlive = true // Player is still alive
//     message = "do you want to draw a new card?"
//     // console.log(message)
//     // console.log("do you want to draw a new card?")
// }
// else if(sum === 21) {
//     message = "Blackjack!"
//     // console.log(message)
//     // console.log("Blackjack!")
//     hasBlackjack = true
//     isAlive = false
// } else {
//     message = "You are out of the game!"    
//     // console.log("You are out of the game!")
//     isAlive = false
// }
// // console.log(message)
// console.log("Is alive: " + isAlive)
// messageEl.textContent = message
// }


// function drawNewCard() {
    
//     console.log("you taken a new card")
//     if(isAlive && !hasBlackjack) { // Check if the player is alive and hasn't won
//         let newCardValue = getRandomCard() // Get a new random card value
//     sum += newCardValue
//     // cardsEl.textContent += ", " + newCardValue
//     // sumEl.textContent = "Sum: " + sum
//     cards.push(newCardValue) // Add the new card to the array
//     console.log(cards)
//     }

//     renderGame()
// }



let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stage=document.getElementById("stage-el")
let fightbutton=document.getElementById("fightbutton")

fightbutton.addEventListener("click", function(){
    let randomIndex1 =Math.floor(Math.random()*fighters.length)
    let randomIndex2 =Math.floor(Math.random()*fighters.length)
    stage.textContent = fighters[randomIndex1] + " vs " + fighters[randomIndex2]

})
