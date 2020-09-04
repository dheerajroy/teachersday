var url = window.location.href.split('=')
var name = url[2]

name = name.charAt(0).toUpperCase()+name.slice(1, name.length)

var gender = url[1].split('&')[0]
if(gender === '1'){
    gender = 'Sir'
}
else{
    gender = 'Ma\'am'
}
var span = document.querySelector('span')
span.innerHTML = `${name} ${gender}`


// setTimeout(function(){ alert("Developed by Dheeraj.D"); }, 2000);