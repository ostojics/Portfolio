
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
    const primaryNav = document.querySelector('.nav');
    const secondaryNav = document.querySelector('.navigation');


        window.addEventListener('scroll', () => {
            // manipulate the secondaryNav element only if the screen size is bigger that 900px 
            if(screen.width > 900){
                // check if we scrolled beyond the primaryNav and display the secondaryNav if we did, if not hide the secondaryNav again
                if(window.scrollY > primaryNav.offsetHeight){
                    secondaryNav.style.display = 'block';
                } else {
                   secondaryNav.style.display = 'none';
                }
            }
       })


}

// FUNCTION THAT CONTAINS ALL THE FUNCTIONALITY IN THE APP
const app = () => {
    toggleSecondaryNav();
    secondNav(); 
}


// START ALL OF THE FUNCTIONALITY ON LOAD
app();