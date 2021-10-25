// Initialize github 
const github = new Github;  

//Init UI 
const ui = new UI; 

// Search input 
const searchUser = document.getElementById('searchUser'); 

// Event listener for searchUser 
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value; 

    if (userText !== '') {
       // Make http call 
       github.getUser(userText) 
         .then(data => {
            
            if (data.profile.message === 'Not Found') {
               // Show an alert message  
               setTimeout( () => {
                  ui.showAlert('User not found', 'alert alert-danger mt-3'); 
               }, 2000) 

               ui.clearAlert(); 
            } else {
               // Show the user profile
               ui.showProfile(data.profile); 
               // Show the user repos 
               ui.showRepos(data.repos); 
            }
         })
    } else {
      ui.clearProfile(); 
    }
}); 