const accordionTitle = document.querySelectorAll('.accordion h3');
accordionTitle.forEach((e) =>
    e.addEventListener('click', toggleAccordion)
);
function toggleAccordion(event) {
    event.target.nextElementSibling.classList.toggle('open');

    event.target.classList.toggle('minus-icon');

    const paragraph = this.nextElementSibling;

    console.log(paragraph);


    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
    } else {
        paragraph.style.display = "block";
    }
}

