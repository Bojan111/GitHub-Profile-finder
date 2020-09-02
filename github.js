class GitHub {
    constructor(){
        this.client_id = 'd2308646d8ce63b3d640';
        this.client_secret = 'b2c806c0252ce6e770b63ca5b017c5ce794b615a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos? per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}