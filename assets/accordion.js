const accordionTitle = document.querySelectorAll('.accordion h3');
accordionTitle.forEach((e) =>
    e.addEventListener('click', toggleAccordion)
);
function toggleAccordion(event) {
    event.target.nextElementSibling.classList.toggle('open');
}