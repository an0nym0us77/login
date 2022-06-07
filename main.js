
$('a').click(function(){
    var pass = $('#pass').val();
    if(pass == 'Sadguru@123' || pass == 'Sadhguru@123'){
        window.location.replace("yes.html");

    }
    else{
        alert('Wrong password');
    }
});
