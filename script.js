const submitBtn = document.getElementById("submit")
let userDetails = {}
let token
function generateAccessToken() {

    token = Math.random().toString(36).substring(2);
   return token;
 }



const signUp = () => {

   userDetails.name = document.getElementById("fullname").value
   userDetails.email = document.getElementById("email").value
   userDetails.accessToken = generateAccessToken()
   if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
       userDetails.password = document.getElementById("password").value
   }
   console.log("userdetails ", userDetails)
   
   if ((userDetails.name == "") || (userDetails.email == "") || (userDetails.password == "")) {
       document.getElementById("error-feedback").style.display = 'block'
       document.getElementById("sucess-feedback").style.display = 'none'
   } else {
       document.getElementById("error-feedback").style.display = 'none'
       document.getElementById("sucess-feedback").style.display = 'block'

   }

           
           localStorage.setItem('user', JSON.stringify({
               name: userDetails.name,
               email: userDetails.email,
               password: userDetails.password,
               accessToken : userDetails.accessToken
           }))

           const user = JSON.parse(localStorage.getItem('user'))

  
}

submitBtn.onclick=signUp
console.log(JSON.parse(localStorage.user).name)






