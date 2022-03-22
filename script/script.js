
// const eating = function() {
//   console.log(`Today, my lunch is pizza.`)
// }
//   const dailyTasks = function (task, stayHealthy) {
//     console.log(`Today I will ${task}`);
    
//     stayHealthy();
//   }
  
//   dailyTasks(`learn more JavaScript`, eating);

//   dailyTasks(`learn more JavaScript`, function(){
//     console.log(`My nap schedule starts at lunch.`)
//   });
  
  const heading = document.querySelector(`h1`);
  
  const h1click = function(event){
    console.log(`A click happened!`)
    console.log(event);
  }

  heading.addEventListener('click', h1click);