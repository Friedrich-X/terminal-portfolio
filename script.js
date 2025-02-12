document.addEventListener('DOMContentLoaded', function() {
    const text = "Content...\n> Content\n> Content\n> Content\n\n> Content_";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === '\n') {
                typingText.innerHTML += '<br>';
            } else {
                typingText.innerHTML += text.charAt(index);
            }
            index++;
            typingText.scrollTop = typingText.scrollHeight;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const terminalOutput = document.getElementById('terminal-output');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        terminalOutput.style.display = 'block';
        terminalOutput.innerHTML = '> Initializing transmission...<br>';
        
        setTimeout(() => {
            terminalOutput.innerHTML += '> Encrypting data...<br>';
        }, 500);

        setTimeout(() => {
            terminalOutput.innerHTML += '> Establishing secure connection...<br>';
        }, 800);

        setTimeout(() => {
            terminalOutput.innerHTML += '> Sending message...<br>';
        }, 1000);

        setTimeout(() => {
            terminalOutput.innerHTML += '<span class="success">> Message successfully transmitted!</span>';
            contactForm.reset();
        }, 1500);
    });

    // Matrix rain effect
    const canvas = document.createElement('canvas');
    canvas.classList.add('matrix-bg');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const fontSize = 10;
    const columns = canvas.width/fontSize;
    const drops = [];

    for(let x = 0; x < columns; x++)
        drops[x] = 1;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i*fontSize, drops[i]*fontSize);
            
            if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;
            
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // Matrix rain effect anpassen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Matrix-Spalten neu berechnen
        const columns = canvas.width/fontSize;
        drops.length = 0; // Array zurücksetzen
        for(let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    // Event Listener für Bildschirmgrößenänderungen
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    // Project Modal Functionality
    const projectModal = document.getElementById('project-modal');
    const projectDetails = document.getElementById('project-details');
    const closeBtn = document.querySelector('.close-btn');
    const projectItems = document.querySelectorAll('.project-item');

    const projectData = {
        ecommerce: {
            title: "Headline",
            description: "> Point 1\n> Point 2\n> Point 3\n\n" +
                        "Content: Content\nContent: Content",
            tech: "> Content:\n- Point 1\n- Point 2\n- Point 3\n- Point 4"
        },
        portfolio: {
            title: "Headline",
            description: "> Point 1\n> Point 2\n> Point 3\n\n" +
                        "Content: Content\nContent: Content",
            tech: "> Content:\n- Point 1\n- Point 2\n- Point 3"
        },
        weather: {
            title: "Headline",
            description: "> Point 1\n> Point 2\n> Point 3\n\n" +
                        "Content: Content\nContent: Content",
            tech: "> Content:\n- Point 1\n- Point 2\n- Point 3"
        }
    };

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const project = projectData[item.dataset.project];
            projectDetails.innerHTML = `
                <h3>> ${project.title}</h3>
                <div class="project-description">
                    ${project.description.replace(/\n/g, '<br>')}
                </div>
                <div class="project-tech">
                    ${project.tech.replace(/\n/g, '<br>')}
                </div>
            `;
            projectModal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
        }
    });
}); 