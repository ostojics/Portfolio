
// SECONDARY NAV FUNCTIONALITY
const secondNav = () => {
    const checkBox = document.querySelector('.navigation-checkbox');
    const navItems = document.querySelectorAll('.navigation-link');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            checkBox.checked = false;
        })
    })
}

// FUNCTION THAT CHECK WHEN USER HAS SCROLLED FROM THE MAIN NAVIGATION AND DISPLAYS THE SECONDARY ONE
const toggleSecondaryNav = () => {

    window.onscroll = () => {
        const primaryNav = document.querySelector('.nav');
        const secondaryNav = document.querySelector('.navigation');
        const scrollTop = window.pageYOffset;


        if(scrollTop > primaryNav.offsetHeight){
            secondaryNav.style.display = 'block';
        } else {
            secondaryNav.style.display = 'none';
        }
    }
}

// FUNCTION THAT CONTAINS ALL THE FUNCTIONALITY IN THE APP
const app = () => {
    toggleSecondaryNav();
    secondNav();
}


// START ALL OF THE FUNCTIONALITY ON LOAD
app();