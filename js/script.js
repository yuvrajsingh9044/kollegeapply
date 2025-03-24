function searchColleges() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const colleges = document.querySelectorAll('.college-card');
    colleges.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
}

function toggleFees(event, button) {
    event.stopPropagation();
    const feeSpan = button.previousElementSibling;
    feeSpan.style.display = feeSpan.style.display === 'inline' ? 'none' : 'inline';
    button.textContent = feeSpan.style.display === 'inline' ? 'Hide' : 'Show';
}

function nextStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.classList.add('hidden'));
    document.getElementById(`step${step}`).classList.remove('hidden');
}

function submitForm(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
    window.location.href = 'index.html';
}