const auth = () => {
    const authorisationBtn = document.querySelector('.button-auth');
    const cartBtn = document.querySelector('.button-cart');
    const logOutBtn = document.querySelector('.button-out');
    const modalAuth = document.querySelector('.modal-auth');
    const closeAuth = document.querySelector('.close-auth');
    const logInForm = document.getElementById ('logInForm');
    const inputLogin = document.getElementById ('login');
    const inputPassword = document.getElementById ('password');
    const userName = document.querySelector('.user-name');
    
    const login = (user) => {
    authorisationBtn.style.display = 'none';
    logOutBtn.style.display = 'flex';
    userName.style.display = 'flex';
    cartBtn.style.display = 'flex';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
    
    }
    
    const logout = () => {
        authorisationBtn.style.display = 'flex';
        logOutBtn.style.display = 'none';
        userName.style.display = 'none';
        cartBtn.style.display = 'none';
        userName.textContent = '';
    
        localStorage.removeItem('user');
    
    }
    
    authorisationBtn.addEventListener ('click', () => {
        modalAuth.style.display = 'flex';
    })
    
    closeAuth.addEventListener ('click', () => {
        modalAuth.style.display = 'none';
    })
    
    logOutBtn.addEventListener('click', () => {
        logout();
    })
    
    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = {
            login: inputLogin.value,
            password: inputPassword.value
        }
    
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
        
    })
    
    if (localStorage.getItem ('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }
}

auth();