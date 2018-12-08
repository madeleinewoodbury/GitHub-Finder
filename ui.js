class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Show user profile
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_repos}</span>
                        <span class="badge badge-success">Followers: ${user.public_repos}</span>
                        <span class="badge badge-info">Following: ${user.public_repos}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}<li>
                            <li class="list-group-item">Website/Blog: ${user.blog}<li>
                            <li class="list-group-item">Location: ${user.location}<li>
                            <li class="list-group-item">Member Since: ${user.created_at}<li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    // Show alert message when user is not found
    showAlert(msg, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes to div
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get serach box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);
        
    }

    // Clear profile for new search
    clearProfile() {
        this.profile.innerHTML = '';
    }
}