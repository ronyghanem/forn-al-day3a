 // Mobile Navigation
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('nav ul').classList.remove('show');
            });
        });
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        
        // Sticky header on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });