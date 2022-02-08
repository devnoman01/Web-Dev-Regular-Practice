//  button event handler
document.getElementById('postButton').addEventListener('click', function() {
    
    //  get user comment
    const commentBox = document.getElementById('comment');
    
    //  creating comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    //  appending the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    //  clearing comment text box
    commentBox.value = '';
});