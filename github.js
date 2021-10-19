class Github {
    constructor() {
        this.client_id = '1eb62ac6c188d6e65ebd'; 
        this.client_secret = '8b2ef3b361def843cf1d6502a5d9cc432ad7261d'; 
    } 

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json(); 

        return {
            profile 
        }
    }
} 

