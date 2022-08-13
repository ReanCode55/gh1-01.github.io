function openNav() {
    document.getElementById("myNav").style.width = "160px";
    document.getElementById("myNav").style.left = "0";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0"; 
    document.getElementById("myNav").style.transition = " all 0.3s";
    document.getElementById("myNav").style.left = "-100%";
}

// login btn
$("#btn-user-login").click(function(){
    $("#main-user-for-desktop").slideDown(200);
});
$("#close-user-login").click(function(){
    $("#main-user-for-desktop").slideUp(200);
});
$("#btn-user-login").click(function(){
    $("#user-register").hide();
});
$("#btn-user-login").click(function(){
    $("#user-login").show();
});

// register btn
$("#btn-user-register").click(function(){
    $("#main-user-for-desktop").slideDown(200);
});
$("#close-user-register").click(function(){
    $("#main-user-for-desktop").slideUp(200);
});
$("#btn-user-register").click(function(){
    $("#user-login").hide();
});
$("#btn-user-register").click(function(){
    $("#user-register").show();
});

// form user mobile
$("#user-member").click(function(){
    $("#main-user-for-mobile").slideDown(200);
});
$("#close-user-login-for-mobile").click(function(){
    $("#main-user-for-mobile").slideUp(200);
});
$("#close-user-register-for-mobile").click(function(){
    $("#main-user-for-mobile").slideUp(200);
});


$("#go-register").click(function(){
    $("#user-register-for-mobile").show(200);
});
$("#go-register").click(function(){
    $("#user-login-for-mobile").hide(200);
});
$("#go-login").click(function(){
    $("#user-login-for-mobile").show(200);
});
$("#go-login").click(function(){
    $("#user-register-for-mobile").hide(200);
});