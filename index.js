// Template ID: template_ms5nhke
// Service ID: service_hk83pdf
// Public Key: BWXvVQEVFv5LrP6AZ

function contact(event) {
    event.preventDefault();
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
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(  
                'The email service is temporarily unavailable. Please contact me directly via jazzlin.escovar@gmail.com'         
            );
        })
}
