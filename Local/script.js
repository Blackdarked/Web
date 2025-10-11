document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.task-checkbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.classList.add('completed');
            } else {
                row.classList.remove('completed');
            }
        });
    });

    const backToTopButton = document.getElementById('backToTopBtn');
    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        };
        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

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

            if (fullName.value.trim() === '') {
                fullNameError.textContent = 'Tên không được để trống.';
                isValid = false;
            }
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(email.value.trim())) {
                emailError.textContent = 'Email không đúng định dạng.';
                isValid = false;
            }
            if (message.value.trim().length < 10) {
                messageError.textContent = 'Nội dung/Góp ý phải có ít nhất 10 ký tự.';
                isValid = false;
            }
            if (isValid) {
                alert('Thông tin đã được gửi thành công!');
                contactForm.reset();
            }
        });
    }
});