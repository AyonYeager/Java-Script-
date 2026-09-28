// // alert("warning , this web page can take your data")
// // alert("Hello World");

// console.log("Code is running...")
// console.log("Code is also running...")
// console.log("Code is looking like a wow...")
// var a = prompt("enter numbers")
// var istrue = confirm("confirm all cookies and manage data")
// console.log("your number is " + a)

// if (istrue){
//     console.log("ready to explore")
// }
// else{
//     console.log("exit")
// }

// document.title="node js inc"
// document.body.style.background="red"

// let age = 15
// let exp= 3
// age += exp
// if (age>=18){
//     console.log("ready to go ");
// }
// else{
//     console.log("out");
//     }

// a = 6
// b=8
// let c = a>b ?(a-b):(b-a)
// console.log(c)
// let a = 1;
// for(let i = 0; i<=100; i++){
//     console.log(a+i);
// }
// let i = 0
// while(i < 5){
//     console.log(i)
//     i++;
// }


// let i = 0
// do{
//     console.log(i)
//     i++;
// }while(i<5);

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }

// for (const value of Object.values(obj)) {  
//         console.log(value)
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// console.log("This is strings tutorial")
// let a = "Harry";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// // console.log(a[5]);

// console.log(a.length)

// let real_name = "Harry"
// let friend = "Rohan"
// console.log("His name is " + real_name + " and his friends name is " + friend)
// console.log(`His name is ${real_name} and his friends name is ${friend}`)

// let b = "ShivamSh"
// console.log(b.toUpperCase())
// console.log(b.toLowerCase()) 
// console.log(b.length) 
// console.log(b.slice(1, 5)) 
// console.log(b.slice(1)) 

// console.log(b.replace("Sh", "77"))
// console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

// console.log(b)



// function factorial(n) {

//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(21))

// a=["b,d,ed,e,d,e"]

// for(val of a){
//     console.log(val)
// }

// let str  = "439-805849-5958450";
// console.log(Array.from(str));

// console.log(a.toString());
// console.log(a.pop())

// a.push(8,9)
// console.log(a)

// a.shift()
// a.unshift(2)
// let a = [1345676];
// console.log(a.join(","))

// let arr = ['y', 'o', 'w', 'a', 'i', 'm', 'o'];
// console.log(arr.join(" 4356789")); 

// arr = [1,2,3,3,4,5,6,7,8,9]

// delete arr[3];
// console.log(arr)
// console.log(typeof(arr[3]))

// arr = [1,2,8,3,4,7,4,5,3,9]
// arr.splice(1,8)

// // console.log(arr.slice(1,8))
// console.log(arr)



// document.body.firstElementChild 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children
// document.body.firstElementChild.children[1].nextElementSibling
// document.body.firstElementChild.nextElementSibling
// document.body.firstElementChild.previousElementSibling


// let bj = document.getElementsByClassName("box")

// console.log(bj)

// bj[3].style.backgroundColor = "red"
// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
// document.querySelectorAll(".box").style.backgroundColor = "green" 
// .matches,.closet,.contains

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "green";

// })




// document.querySelector(".container").innerHTML
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName
// document.querySelector(".container").nodeName
// document.querySelector(".container").hidden = "true"

// document.querySelector(".box").innerHTML = "siuu"
// document.querySelector(".box").hasAttribute("div")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style","display:none")
// document.querySelector(".box").removeAttribute("style")
// document.querySelector(".box").dataset
// document.querySelector(".box").remove()
// document.querySelector(".container").classList
// document.querySelector(".container").className
// document.querySelector(".container").classList.add("green")
// document.querySelector(".container").classList.remove("green")
// document.querySelector(".container").classList.toggle("green")



// let button = document.getElementById("btn")

// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("we got scammed")
// })

// button.addEventListener("keydown", (e)=>{
//     console.log(e ,e.key, e.keyCode)

// })




// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")


// setTimeout((e)=>{
//     console.log("yo dude");


// },2000)
// setTimeout((e)=>{
//     console.log("wassup");


// },2000)

// const fn =()=>{
//     console.log("nothing")
// }
// const callback =(arg)=>{
//     console.log(arg)
//     fn()
// }

// const loadScript = (src , callback)=>{
//     let sc = document.createElement("script")
//     sc.src = src
//     sc.onload = callback("thank you ",fn)
//     document.head.append(sc)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )



// console.log("ready")

// let prom1 = new Promise((resolve, reject) => {

//     a = Math.random()
//     if (a < 0.5) {
//         reject("your number isn't supporting")
//     }
//     else {
//         setTimeout(() => {
//             console.log("done printing")
//             resolve("good")
//         }, 2000)
//     }
// })
// let prom2 = new Promise((resolve, reject) => {

//     a = Math.random()
//     if (a < 0.5) {
//         reject("your number isn't supporting 2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("done printing 2")
//             resolve("good 2")
//         }, 2000)
//     }
// })

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })


// let p3 = Promise.allSettled([prom1 , prom2])
// let p3 = Promise.race([prom1 , prom2])
// let p3 = Promise.resolve([prom1 , prom2])
// let p3 = Promise.reject([prom1 , prom2])
// let p3 = Promise.any([prom1 , prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })


// let a = prompt("enter first number: ")
// let b = prompt("enter second number: ")
// let sum = parseInt(a) + parseInt(b)

// if (isNaN(a) || isNaN(b)) {
//     throw SyntaxError("error only integers are acceptable")
// }
// else {
//     console.log(sum)
// }
// let x = 2;
// function main() {
//     try {
//         console.log("your sum is : ", sum * x)

//     } catch (error) {
//         console.log("error agya bhai")

//     }
//     finally {
//         console.log("end of story")
//     }
// }




// class animal {
//     constructor(name) {
//         this.name = name
//         console.log(name)
//     }
//     eats() {
//         console.log("can eat")

//     };
//     jumps(){

//         console.log("can jump")
//     };
// }

// class lion extends animal{
//     constructor(name){
//     super(name)
//     console.log("objs name had updated")
//     };
//     eats(){
//         super.eats()
//         console.log("eating")};
//     claws(){
//         console.log("have fangs")
//     };
// }

// let a = new animal("rabbit");
// console.log(a);
// let l = new lion("barbarian")
// console.log(l);









// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {


//             resolve("you should thanks christ that i'm here to protect you , i'm stronger , i'm better , i'm smarte , i'm better i'm not like you weaklings")
//         }, 5000)

//     })
// async function getdata() {


//         let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     title: 'foo',
//                     body: 'bar',
//                     userId: 1,
//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//         let data = await x.json()
//         return data


//     }




// async function main() {
//     console.log("hvorgnoro")
//     console.log("prossesing")
//     console.log("prossesing")
//     console.log("coming up")
//     let data = await getdata()
//     console.log(data)
//     console.log("end")
// }
// main()



// async function sleep() {
//     return new Promise((resolve , reject) =>{

    
//     setTimeout(() => {
//         resolve(45)
//     }, 2000)
//     })
// }
// (async function main() {

//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b);
// })()

// let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
// console.log(x, y, rest)


// console.log(a1)
// function sum(a,b,c){
//     return a+b+c

// }
// let obj = {
//         a: 1, 
//         b: 2,
//         c: 3
//     }

//     let {a, b} = obj
//     console.log(a, b)
//     var a1 = 67
//     let arr = [3,4,9]
//     console.log(sum(...arr))
//     console.log(sum(arr[0],arr[1],arr[2]))

// const sleep = async ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }

// const sum = async(a,b,c)=>{
//     return a+b+c
// }


