//index.js
window.manager = new Manager();


// index.js 最顶部
const token = localStorage.getItem('token');
if (!token) {
    location.href = '/welcome.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (!logoutBtn) return;

    logoutBtn.addEventListener('click', () => {
        const ok = confirm('CONFIRM LOGOUT?');

        if (!ok) return;

        localStorage.removeItem('token');
        alert('LOGOUT SUCCESSFUL');
        location.href = '/welcome.html';
    });
});
