const formElement = document.querySelector(`form`);

formElement.addEventListener(`submit`, function(event){
  event.preventDefault();
  console.log(`submit clicked`);
  //logic
  // These store the values from the input fields
  const commenterName = document.querySelector(`#name`).value;
  const commenterEmail = document.querySelector(`#email`).value;
  const commentText = document.querySelector(`#comment`).value;
  
  // This will check for input in all the fields, and not run if empty.
if (commenterName && commenterEmail && commentText != '') {
/*create comment elements
  - <div>Container Div</div>
  - <h6>Name</h6>
  - <span>Current Date</span>
  - <p>Comment</p>
*/
/* At first I was trying to create a child element that would appear below the original comments. Instead, I've targeted the container, and inserted the input values in a template literal with the necessary HTML formatting. */
    // Setting a variable to capture the current date when commenting
  const commentDate = new Date();

  //Making logic for appending the commment to the page
  function commentCreator(input) {
    let comment = document.createElement(`div`);
    let element = document.getElementById
    comment.textContent = input;
    return comment;
  }

  const postedComment = document.querySelector(`.comments-wrapper`);

  postedComment.appendChild(commentCreator(commentDate));
  postedComment.appendChild(commentCreator(commenterName));
  postedComment.appendChild(commentCreator(commentText));


  // If there was more than one comment box, then the second comment box would be called (`comment`)[1]. These will find the inputs by their name, and change the placeholder back to their defaults when the form is successfully filled.
  document.getElementsByName(`name`)[0].placeholder=`Name`;
  document.getElementsByName(`email`)[0].placeholder=`Email address`;
  document.getElementsByName(`comment`)[0].placeholder=`Comment`;

  console.log(commentDate);
  console.log(commenterName);
  console.log(commenterEmail);
  console.log(commentText);
} else {
  // If the form is empty, the empty fields will populate the placeholder text with an error message
  document.getElementsByName(`name`)[0].placeholder=`ERROR: Enter name!`;
  document.getElementsByName(`email`)[0].placeholder=`ERROR: Enter email!`;
  document.getElementsByName(`comment`)[0].placeholder=`ERROR: You haven't entered a comment! Try again.`;
}
})