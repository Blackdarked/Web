document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTopBtn');

    if (backToTopButton) {
        [cite_start]
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        backToTopButton.addEventListener('click', function() {
            document.documentElement.scrollTop = 0
        });
    }

    const checkboxes = document.querySelectorAll('.task-checkbox');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                [cite_start]
                row.classList.add('completed');
            } else {
                [cite_start]
                row.classList.remove('completed');
            }
        });
    });

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            const fullName = document.getElementById('fullname');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            const fullNameError = document.getElementById('fullname-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            fullNameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';

            [cite_start]
            if (fullName.value.trim() === '') {
                fullNameError.textContent = 'Tên không được để trống.';
                isValid = false;
            }

            [cite_start]
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(email.value.trim())) {
                emailError.textContent = 'Email không đúng định dạng.';
                isValid = false;
            }

            [cite_start]
            if (message.value.trim().length < 10) {
                messageError.textContent = 'Nội dung/Góp ý phải có ít nhất 10 ký tự.';
                isValid = false;
            }

            [cite_start]
            if (isValid) {
                alert('Thông tin đã được gửi thành công!');
                contactForm.reset();
            }
        });
    }

});