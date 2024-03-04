const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.trim();

    if (query.length > 0) {
        fetch(`search.php?query=${query}`)
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            })
            .catch(error => console.error('Error fetching search results:', error));
    } else {
        searchResults.innerHTML = ''; // Clear results if search query is empty
    }
});

function displayResults(results) {
    let html = '';
    results.forEach(result => {
        html += `<div>${result}</div>`;
    });
    searchResults.innerHTML = html;
}
