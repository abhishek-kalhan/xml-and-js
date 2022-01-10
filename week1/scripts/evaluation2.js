let feedbackData = document.getElementById('feedbackData')
let feedbackDataEmail = document.getElementById('feedbackDataEmail')
let feedbackDataDate = document.getElementById('feedbackDataDate')
let feedbackDataComment = document.getElementById('feedbackDataComment')

    function displayData(e) {
        event.preventDefault();
    feedbackData.innerText = "Submitted Data: " 
    feedbackDataEmail.innerText = "Email: " + document.getElementById('email').value
    feedbackDataDate.innerText = "Date: " + document.getElementById('date').value
    feedbackDataComment.innerText = "Comment: " + document.getElementById('comment').value
    
    }