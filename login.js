function log111(){
    h=prompt("Enter the Email OTP");
    if (h=="123m") {
        document.write("")
        alert("Login Success")
        window.location.href = "http://127.0.0.1:5502/project%20FN/loindex.html";  
    }
    else{
    alert("invalid OTP ")
    log111()
    }
}
function l(){
        window.location.href = "./loindex.html";
}