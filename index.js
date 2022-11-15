
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7","8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const generateBtn = document.getElementById('generate-btn')
const passwordOne = document.getElementById('password-one')
const passwordTwo = document.getElementById('password-two')
let passwordLength = 15

generateBtn.addEventListener('click',function (){

    function getRandomCharacter(){
        return characters[Math.floor(Math.random() * characters.length)]
    }

    function getRandomPassword(){
        let randomPassword =""
        for(let i = 0; i < passwordLength; i++){
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    }

    passwordOne.textContent = getRandomPassword()
    passwordTwo.textContent = getRandomPassword()

})