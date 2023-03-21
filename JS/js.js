let Arr= []
let newArr= []

function sumPrime(){
    let a = prompt("nhap a","")
    let b = prompt("nhap b ","")
 

    for (let i = a; i<=b; i++){
        Arr.push(i)
    }
    
    for (let z = 0; z < Arr.length; z++) {
        for (let j = 2; j < b; j++){
            if (Arr[z]%j==0){
                newArr.push(Arr[z])
                break
            }
        }
    }
    console.log(Arr)
console.log (newArr)

    
}

sumPrime()








// // Bai 2
// let draw = ""
 
// function drawing(){
// let a = prompt("nhap a","")
// for (let i = 1;i<=a;i++){
//     draw = draw + "*"
//    document.write(draw +"<br/>")
// }}
// document.getElementById("bai2").innerHTML = drawing;