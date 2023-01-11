$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

function verify(){
    var fname = document.getElementById('name').value;
    var fnameRGEX = /^[a-zA-Z]+$/i;
    var fnameResult = fnameRGEX.test(fname);
    if(!fnameResult) {
    alert("you can only enter an alphabet string in names field.");
    return false;
    }

    var email = document.getElementById('email').value;
    var emailRGEX = /^[a-zA-Z]+@+science|arts|commerce|mca+.[a-zA-Z]+.in/;
    if(!emailRGEX.test(email)) {
    alert("you can only enter an email ID in the following format: name@science/arts/commerce/mca.domain.in.");
    return false;
    }

    var phone = document.getElementById("phone").value;
    var phone_check = /^\d{10}$/;
    if(!phone_check.test(phone)){
        alert("Invalid Phone Number!");
        return false;
    }


    var ages = document.getElementById('age').value;
    var booksRGEX = /^\d{1,2}$/;
    if(!booksRGEX.test(ages)) {
    alert("you can only enter a number between 0 and 99");
    return false;}

    var gender = document.getElementById('gender').value;
    var genreRGEX = /M|F|Male|Female|male|female/;
    if(!genreRGEX.test(gender)) {
    alert("you can only enter one of these: M F Male Female.");
    return false;}

    // var password = document.getElementById('password').value;
    // var passwordRGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if(!passwordRGEX.test(password)) {
    // alert("you must have one lowercase alphabet, one uppercase alphabet, one number, and one special character.");
    // return false;}
}
