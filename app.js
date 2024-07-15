document.addEventListener('DOMContentLoaded', () => {
    // Product Data
    const products = [
        { name: 'Eggs', description: 'Fresh Eggs.', image: 'egg.png' },
        { name: 'Boiled Eggs', description: 'Perfectly boiled eggs.', image: 'boiled.png' },
        { name: 'Fried Eggs', description: 'Fresh and healthy fried egg .', image: 'fried.png' },
        { name: 'Omelette', description: 'Delicious veggie omelette.', image: 'omlet.png' },
        { name: 'Egg Bhurji', description: 'Tasty egg bhurji.', image: 'egg_bhurji.png' },
        { name: 'Half Fried Eggs', description: 'Spicy half fried eggs.', image: 'halffry.png' },
        { name: 'Full Fried Eggs', description: 'Perfectly full fried eggs.', image: 'fullfry.png' },
        
    ];

    // Dynamically insert products
    const productContainer = document.querySelector('.product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="buy-now">Buy Now</button>
        `;
        productContainer.appendChild(productElement);
    });

        // GSAP Animations (continued)
        gsap.from(".hero", { duration: 1.5, opacity: 0, y: -50, ease: "power2.inOut" });
        gsap.from(".products", { duration: 1, opacity: 0, y: 50, ease: "power2.inOut", scrollTrigger: ".products" });
        gsap.from(".location", { duration: 1, opacity: 0, y: 50, ease: "power2.inOut", scrollTrigger: ".location" });
        gsap.from(".contact", { duration: 1, opacity: 0, y: 50, ease: "power2.inOut", scrollTrigger: ".contact" });
    
        // Contact Form Submission (if applicable)
        // Example:
        // const contactForm = document.getElementById('contactForm');
        // contactForm.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     alert('Thank you for contacting us!');
        //     contactForm.reset();
        // });
    
        // Buy Now Button
        const buyNowButtons = document.querySelectorAll('.buy-now');
        buyNowButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('For purchase, visit our shop');
            });
        });
    
        // Hover Effects
        const productCards = document.querySelectorAll('.product');
        productCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            });
    
            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = 'none';
            });
        });
    });
    