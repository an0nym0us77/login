
$('a').click(function(){
    var pass = $('#pass').val();
    if(pass == 'youdontloveme'){
        window.location.replace("yes.html");
    }
    else{
        $("#wrng").text("Wrong password");
    }
});

