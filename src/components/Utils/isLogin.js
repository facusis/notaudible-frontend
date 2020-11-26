const isLogin = () => !!localStorage.getItem('token');

const logOut = () => {
    localStorage.removeItem('token');
}

module.exports = {isLogin, logOut};