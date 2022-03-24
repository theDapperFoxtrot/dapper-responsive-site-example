const formElement = document.querySelector(`form`);

formElement.addEventListener(`submit`, function(event){
  //logic

  event.preventDefault();
  console.log(`submit clicked`)
})