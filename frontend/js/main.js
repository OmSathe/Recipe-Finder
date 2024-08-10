// Function to handle search by recipe name
document.getElementById('search-by-name-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('recipe-name').value;
    displaySearchResult(recipeName, 'results');
});

// Function to handle search by ingredients
document.getElementById('search-by-ingredients-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredients = document.getElementById('ingredients').value;
    displaySearchResult(ingredients, 'recipe-results');
});

// Function to display the search result
function displaySearchResult(inputValue, resultElementId) {
    const resultDiv = document.getElementById(resultElementId);
    resultDiv.innerHTML = `<p>You searched for: ${inputValue}</p>`;
}