// search.js

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get search query from input
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    // Perform search
    var results = performSearch(searchQuery);

    // Display search results
    displaySearchResults(results);
});

function performSearch(query) {
    // Perform search logic here (e.g., search through data)

    // For demonstration purposes, return dummy search results
    var dummyResults = [
        { title: 'Result 1', content: 'This is the first search result.' },
        { title: 'Result 2', content: 'This is the second search result.' }
    ];

    return dummyResults;
}

function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById('searchResults');

    // Clear previous search results
    searchResultsContainer.innerHTML = '';

    // Display each search result
    results.forEach(function(result) {
        var resultElement = document.createElement('div');
        resultElement.classList.add('searchResult');
        resultElement.innerHTML = '<h2>' + result.title + '</h2>' +
                                  '<p>' + result.content + '</p>';
        searchResultsContainer.appendChild(resultElement);
    });
}
