document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Public API endpoint

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                // If the HTTP response status is not 2xx, throw an error
                throw new Error(HTTP error! status: ${response.status});
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(data => {
            // Clear the loading message
            dataContainer.innerHTML = '';

            // Display the data
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p><strong>User ID:</strong> ${post.userId}</p>
                        <p>${post.body}</p>
                    `;
                    dataContainer.appendChild(postElement);
                });
            } else {
                dataContainer.innerHTML = '<p class="error">No data found or data format is unexpected.</p>';
            }
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch operation
            console.error('Fetch error:', error);
            dataContainer.innerHTML = <p class="error">Failed to load data: ${error.message}. Please try again later.</p>;
        });
});