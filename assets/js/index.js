/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
    modalButton = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal');
}

modalButton.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        activeModal(i);
    });
});

modalClose.forEach((close, i) => {
    close.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal');
        });
    });
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)