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



let num1=8
let num2=2  
document.getElementById("num1-el").innerText=num1
document.getElementById("num2-el").innerText=num2

function add(){
    let result=num1+num2
    document.getElementById("result").innerText="Sum: "+result
}
function sub(){
    let result=num1-num2
    document.getElementById("result").innerText="Difference: "+result
}
function div(){
    let result=num1/num2
    document.getElementById("result").innerText="Quotient: "+result
}

function mul(){
    let result=num1*num2
    document.getElementById("result").innerText="Product: "+result
}




