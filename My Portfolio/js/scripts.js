// Example script for handling form submission and adding posts dynamically

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const postList = document.getElementById('postList');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const comment = document.getElementById('comment').value;
        const email = document.getElementById('email').value;

        // Example: Create a new post element
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <p><strong>Email:</strong> ${email}</p>
            <p>${comment}</p>
            <hr>
        `;

        // Append the new post to the post list
        postList.appendChild(post);

        // Clear the form fields after submission
        document.getElementById('comment').value = '';
        document.getElementById('email').value = '';
    });
});
