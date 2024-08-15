function getCode() {
    var resendBtn = document.createElement("button");
    resendBtn.setAttribute("id", "resend");
    resendBtn.setAttribute("disabled", "");
    document.getElementById("btn").appendChild(resendBtn);
    let number = 20;
    let interval = setInterval(() => {
        resendBtn.innerText=`Resend code ${number}`;
        if(number === 0){
            resendBtn.removeAttribute("disabled", "");
            clearInterval(interval);
        }
        number -= 1;
  }, 1000);
}
