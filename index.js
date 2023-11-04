function buyGame(){
    var firstName = document.getElementById("firstNameBox").value;
    var lastName = document.getElementById("lastNameBox").value;
    var email = document.getElementById("emailBox").value;
    var contact = document.getElementById("contactBox").value;
    var game = document.getElementById("gameBox").value;
    var trxid = document.getElementById("trxidBox").value;
    var discount;

    if(game = "Genshin Impact"){
        discount = 2.99
    }
    else if(game = "Honkai Impact 3rd"){
        discount = 1.99
    }
    else if(game = "Honkai Star Rail"){
        discount = 0.99
    }
    else if(firstName == null || lastName == null || email =="" || contact == null || game == null || trxid == null || discount == null){
        document.getElementById("paymentSuccessBox").innerHTML =`Invalid Input`;
    }

    document.getElementById("paymentSuccessBox").innerHTML = `
      <h4> Dear ${firstName} ${lastName}, Congratulations for buying ${game}. <br><br>
      Since you have bought ${game}, we will give a discount of $${discount}. 
      Please use your email: ${email} and send us a mail at ${game}@hoyoverse.com and we will send back the discount ammount in your bkash number(${contact}) right away. <br>
      While sending us the email, provide your transaction id: ${trxid}.</h4><br>
      <h4>Download Link: <a href="https://www.hoyoverse.com/en-us/">Hoyoverse Link</a></h4><br><br>
      <h4>Thank you for buying from HOYOVERSSE. Happy Gaming!</h4>`;
}