class Github {
    constructor() {
        this.client_id = 'd69d988b81d2af66769f';
        this.client_secret = '60e5c24a995218e0f4eb20e796ad399e28397b9d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}