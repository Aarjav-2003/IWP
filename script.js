document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.borderColor = "#ff00ff";
    });
    card.addEventListener('mouseout', () => {
        card.style.borderColor = "#00ffcc";
    });
});
