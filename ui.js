class UI {
    constructor(){
        this.profile = document.getElementById('profile'); 
    } 

    showProfile(user){ 
        this.profile.innerHTML = `
           <div class="container" 
            <div class="card card-body mb-3">
             <div class="row">
               <div class="col-md-3">
                  <img class="img-fluid mb-2" src="${user.avatar_url}"> 
                  <a class="btn btn-primary btn-block mb-3" target="_blank" href="${user.html_url}">View Profile</a>
               </div> 
               <div class="col-md-9">
                  <span class="badge badge-primary">Public Repos: ${user.public_repos}</span> 
                  <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                  <span class="badge badge-secondary">Followers: ${user.followers}</span>
                  <span class="badge badge-success">Following: ${user.following}</span>

                  <ul class="list-group"> 
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/blog: ${user.blog}</li>
                    <li class="list-group-item">Member since: ${user.created_at}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                  </ul> 
            
               </div>
             </div> 
            </div>  
            
            <div class="card card-body">
               <h3 class="page-heading mb-3">Latest Repos:</h3> 
               <div id="repos"></div>
            </div> 
           </div> 
           
        `
    } 
    // Show alert message 
    showAlert(message, className) {
        // Clear the alert message 
        this.clearAlert(); 

        // Create a div and add a class + message 
        const div = document.createElement('div'); 
        div.className = className; 
        div.appendChild(document.createTextNode(message)); 
        
        // Get the serach container and add the div before the search 
        const container = document.querySelector('.searchContainer'); 
        const search = document.querySelector('.search'); 
        container.insertBefore(div, search); 
        
        setTimeout(() => {
            this.clearAlert(); 
        }, 3000); 
        
    }

    // Clear the alert message 
    clearAlert() {
       const currentAlert = document.querySelector('.alert'); 
       
       if (currentAlert) {
          currentAlert.remove(); 
       }
    }

    // Clear the profile 
    clearProfile() {
        this.profile.innerHTML = ''; 
    }
} 
