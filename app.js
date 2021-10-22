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
            } else {
               ui.showProfile(data.profile); 
            }
         })
    } else {
      
    }
}); 