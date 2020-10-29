const userNumber = document.querySelector("#number");

const result= document.querySelector("#display")

const romanDict={"M":1000, "CM":900,"D":500, "CD":400, "C":100, "XC":90, "L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1}
function convertRomans(){
    let romans=""
    let number= parseInt(userNumber.value)
    if (number > 3000){
            alert("Number must be lower then 3000")
        }
    for (i in romanDict){
        while (number >= romanDict[i]){
            number -= romanDict[i]
            romans += i 
        }        
    }
    
    result.innerText= `Roman Numeral of ${userNumber.value} is ${romans}.`

}

document.querySelector("#btn").addEventListener("click", convertRomans)