
$('a').click(function(){
    var pass = $('#pass').val();
    if(pass == 'youdontloveme' || pass=='Youdontloveme'){
        window.location.replace("yes.html");
    }
    else{
        $("#wrng").text("Wrong password");
    }
});

