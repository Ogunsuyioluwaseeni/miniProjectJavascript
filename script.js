// objects to store details
let userDetailsDatabase = {}


function getUserDetails() {

    //get Username
    let userName = prompt("Enter your username")
    if (userName == null) {
        return
    }


    function validateUsername(userName) {
        if (userName.length < 10 && userName.length > 0) {
            return true
        } else {
            return false
        }

    }
    while (validateUsername(userName) == false) {
        userName = prompt("Username must be less than 10 and greater than 0")
    }
    userDetailsDatabase["UserName"] = userName

    //get Email address
    let email = prompt("Enter your email address")
    if (email == null) {
        return
    }

    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        emailCheckResult = emailCheck.test(email)
        if (emailCheckResult == true) {
            return true
        } else {
            return false
        }
    }
    while (validateEmail(email) == false) {
        email = prompt("Enter a valid email")
    }
    userDetailsDatabase["Email"] = email

    //get Phonenumber
    let phoneNumber = prompt("Enter your phone number")
    if (phoneNumber == null) {
        return
    }

    function validatePhoneNuber(phoneNumber) {
        if (phoneNumber.length == 11) {
            return true
        } else return false
    }
    while (validatePhoneNuber(phoneNumber) == false) {
        phoneNumber = prompt("Phone number must be 11 digit, try again!")
    }
    userDetailsDatabase["PhoneNumber"] = phoneNumber

    //getPassword
    let password = prompt("Enter your password")
    if (password == null) {
        return
    }

    function validatePassword(password) {
        if (password.length < 6) {
            return false
        } else return true
    }
    while (validatePassword(password) == false) {
        password = prompt("Password must not be less than 6 digit")
    }
    userDetailsDatabase["Password"] = password

    // confirmpassword
    let confirmPassword = prompt("Confirm your password")
    if (confirmPassword == null) {
        return
    }

    function validateConfirmPassword(confirmPassword) {
        if (confirmPassword != password) {
            return false
        } else return true
    }
    while (validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt("Confirm Password does not match, try again!")
    }
    userDetailsDatabase["ConfirmPassword"] = confirmPassword


}

// to displays user details

function displayUserDetails() {
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.Email}`)

}