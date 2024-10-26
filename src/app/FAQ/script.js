document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        // Toggle the clicked answer
        answer.classList.toggle('active');

        // Change icon based on answer state
        if (answer.classList.contains('active')) {
            icon.textContent = 'arrow_drop_up'; // Change to up arrow
        } else {
            icon.textContent = 'arrow_drop_down'; // Change to down arrow
        }
    });
});
