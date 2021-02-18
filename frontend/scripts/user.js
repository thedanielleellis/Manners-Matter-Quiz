class User {
    constructor(id, username) {
        this.id = id
        this.username = username;
    }

    //render user instance method
    renderUser() {

        usersDiv.innerHTML +=
        `
        <div id="hud-item-users" "data-id"=${this.id}>
        <h3 id="user-username">${this.username}</h3>
        </div>
        <button class="delete-btn" data-id=${this.id} onclick="deleteUser()">Delete User</button>
        `
        hudUser.innerHTML = `Last User: ${this.username}`
    }
}