
$('a').click(function(){
    var pass = $('#pass').val();
    if(pass == 'youdoloveme' || pass=='Youdoloveme'){
        window.location.replace("yes.html");
    }
    else{
        $("#wrng").text("Wrong password");
    }
});

