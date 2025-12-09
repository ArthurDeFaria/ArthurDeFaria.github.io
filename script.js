document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'flex'; // Mostra o card
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });
        });
    });
});

// document.addEventListener('DOMContentLoaded', () => {
    
//     const elementsToAnimate = document.querySelectorAll('#about [data-aos]');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Adiciona uma classe quando o elemento está visível
//                 entry.target.classList.add('aos-animate');
//                 observer.unobserve(entry.target); // Para a animação não repetir
//             }
//         });
//     }, {
//         threshold: 0.1 // A animação começa quando 10% do elemento está visível
//     });

//     elementsToAnimate.forEach(element => {
//         observer.observe(element);
//     });
// });