// #1
$(window).ready(console.log("let's get ready to party with Jquery!"))

// #2
$('article img').addClass("image-center")

// #3
$('p').last().remove();

// #4
$('h1').css("font-size", function(){ return (Math.floor(Math.random() * 101))})

// #5
$('ol').append($("<li>whatever you want</li>"))

// #6
$('aside').empty().append($("<p>Im sorry that was a stupid list anyways</p>"))

// #7
$('.form-control').on('keyup', function(){
    $('body').css("background-color", function(){
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    return `rgb(${red},${blue},${green})`
    })})

// #8
$('img').on('click', function(evt){
    evt.target.remove()
})

//

