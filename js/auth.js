// js/auth.js

function loginUser(email, password, role) {
    if (email && password) {
        // సెషన్ సేవ్ చేయడం
        localStorage.setItem('user_role', role);
        localStorage.setItem('user_email', email);
        
        // రోల్ బట్టి డాష్‌బోర్డ్ కి పంపడం
        if (role === 'valiass') {
            window.location.href = 'dashboard.html'; // valiass/dashboard.html
        } else if (role === 'school') {
            window.location.href = '../school/dashboard.html';
        } else if (role === 'parent') {
            window.location.href = '../parent/dashboard.html';
        }
    } else {
        alert('Please enter email and password');
    }
}

function logoutUser() {
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_email');
    localStorage.removeItem('selected_section');
    window.location.href = '../index.html';
}
