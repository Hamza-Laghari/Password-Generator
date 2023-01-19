const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let genpass = document.getElementById("gen-pass")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

function handleClick() {
    /* Save value of myText to input variable */
    var input = document.getElementById("pass1").value;
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
     
    alert("Copied Text: " + input);
}
function handleClick2() {
    /* Save value of myText to input variable */
    var input = document.getElementById("pass2").value;
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
     
    alert("Copied Text: " + input);
}
function getRandomCharacter() {
    const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function hamza(){
    console.log("Button is working");
}

function generateRandomPassword() {
    let length = document.querySelector("#passLengthh").value;
    let passwordLength = length
    
    if(length<16&&length>1){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    pass1.textContent = randomPassword;
    generateRandomPassword2();
}
else if(length<1)
{
    alert("Enter password length")
}

else alert("Password length must be less than 15!!")
}

function generateRandomPassword2() {
    let Length2= document.querySelector("#passLengthh").value;
    let passwordlength2 = Length2   
    let randomPassword2 = ""
    if(Length2<1)
    {
        alert("Enter password length")
    }
    for (let i = 0; i < passwordlength2; i++) {
        randomPassword2 += getRandomCharacter2()        
    }
     pass2.textContent = randomPassword2 

}
function getRandomCharacter2() {
    const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let randomChar2 = Math.floor(Math.random() * characters.length)
    return characters[randomChar2]
}




