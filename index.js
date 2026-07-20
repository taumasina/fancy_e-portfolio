// Template ID: template_ms5nhke
// Service ID: service_hk83pdf
// Public Key: BWXvVQEVFv5LrP6AZ

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
       document.body.classList.remove("dark-theme") 
    }
}

function contact(event) {
    event.preventDefault();
    console.log('Form submitted');
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    
    emailjs
        .sendForm(
            'service_hk83pdf',
           'template_ms5nhke',
            event.target,
            'BWXvVQEVFv5LrP6AZ'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
            console.log('Email sent successfully');
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(  
                'The email service is temporarily unavailable. Please contact me directly via jazzlin.escovar@gmail.com'         
            );
            console.log('EmailJS error:', error);
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open"
}

.catch((error) => {
    loading.classList.remove('modal__overlay--visible');
    console.log('EmailJS error:', error);
});