// Initialize github 
const github = new Github; 

// Search input 
const searchUser = document.getElementById('searchUser'); 

// Event listener for searchUser 
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value; 

    if (userText !== '') {
       // Make http call 
       github.getUser(userText) 
         .then(data => {
            console.log(data); 
            if (data.profile.message === 'Not Found') {
               // Show an alert message 
            } else {
                // Show profile 
            }
         })
    } else {

    }
}); 