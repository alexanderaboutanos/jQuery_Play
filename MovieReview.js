// title
$('body').append($('<h1>MOVIES APP!</h1>'))

// 2 inputs, submit button, subtitle 
$('body').append('<form>Title: <input type="text" id="Title">Rating: <input type="text" id="Rating"><button id="submitButton">Submit!</button></form><div><div> Movie Reviews Below!</div><ul id="MovieReviewList"></ul></div>')

// handle submit button click, add new rating
$('#submitButton').on("click", function(clickEvent){
    clickEvent.preventDefault();
    let Title = $('#Title').val();
    let Rating = $('#Rating').val();
    let MovieReview = `I would rate ${Title} at a ${Rating}`
    $('#MovieReviewList').append(`<li>${MovieReview}<button class="movieDeleteButton">Delete</button></li>`)
})

// delete button on each rating
$('ul').on("click", ".movieDeleteButton", function(evt){
    evt.preventDefault();
    evt.target.closest('li').remove()
})
