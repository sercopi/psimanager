function isLoggedUser() {
    return localStorage.getItem('user_token');
}

export {
    isLoggedUser
}

