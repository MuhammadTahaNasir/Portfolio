/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

// Initialize EmailJS
emailjs.init('uStfquEv7Rx9QxaZa')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_b7xxdrj', 'template_u8w39bs', '#contact-form')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully'
            contactMessage.classList.remove('error')
            contactMessage.classList.add('success')

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error)'
            contactMessage.classList.remove('success')
            contactMessage.classList.add('error')
        })
}

contactForm.addEventListener('submit', sendEmail)
