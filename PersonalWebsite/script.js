document.addEventListener('DOMContentLoaded', function() {
    const text = "Software Engineer"; 
    const typedText = document.getElementById('typed-text');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typedText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typedText.classList.add('blinking-cursor');
        }
    }
    
    setTimeout(typeWriter, 500);
    
    const background = document.querySelector('.background');
    const colors = ['rgba(0, 219, 222, 0.1)', 'rgba(252, 0, 255, 0.1)', 'rgba(255, 255, 255, 0.1)'];
    
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        const size = Math.random() * 200 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${posX}%`;
        circle.style.top = `${posY}%`;
        circle.style.background = color;
        circle.style.animationDuration = `${duration}s`;
        circle.style.animationDelay = `${delay}s`;
        
        background.appendChild(circle);
    }
});