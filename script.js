
 function startApp(){
    document.getElementById("chatPage").style.display="none";
    document.getElementById("passwordPage").style.display="block";

 }
function checkCode(){
    debugger
    var code = document.getElementById("secretCode").value;
    if(code==="0306"){
        document.getElementById("passwordPage").style.display="none";
        document.getElementById("giftPage").style.display="block";

    }
    else{
        alert("Wrong Code👎");
    }

    
}
 
