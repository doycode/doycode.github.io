$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if((userName.indexOf("test")>-1) &&  pwd==123){ 
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="webrtc.html";},2000);
    }
    else{
        alert("Wrong Password!");
    }
});
