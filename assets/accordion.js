const accordionTitle = document.querySelectorAll('.accordion h3');
accordionTitle.forEach((e) =>
    e.addEventListener('click', toggleAccordion)
);
function toggleAccordion(event) {
    console.log(event)
    event.target.nextElementSibling.classList.toggle('open');

    event.target.classList.toggle('minus-icon')
}

