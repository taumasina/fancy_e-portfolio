// Template ID: template_ms5nhke
// Service ID: service_hk83pdf
// Public Key: BWXvVQEVFv5LrP6AZ

function contact(event) {
//    event.preventDefault();
//    emailjs
//        .sendForm(
//            'service_hk83pdf',
//            'template_ms5nhke',
//            event.target,
//            'BWXvVQEVFv5LrP6AZ'
//        ).then(() => {
//            console.log('this worked')
//        })
const loading = document.querySelector('.modal__overlay--loading');
const sucess = document.querySelector('.modal__overlay--success');
loading.classList += ' modal__overlay--visible';
setTimeout(() => {
    loading.classList.remove('modal__overlay--visible');
    success.classList += ' modal__overlay--visible';
    console.log('it worked 1')
}, 1000);

}