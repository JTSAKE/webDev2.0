API_ENDPOINT = 'https://6495fed9b08e17c91792ed85.mockapi.io/bill'

fetch(API_ENDPOINT)
.then(response => response.json())
.then(data => {
    // Step 2: Access the DOM element where you want to draw the information
    const container = document.getElementById('contentLocation');

    // Step 3: Use the map method to generate the HTML elements
    const htmlElements = data.map(item => {
        return(`
            <div id='${item.id}'>${item.name} - ${item.amount} - ${item.dueDate}</div>
        `);
    });

    // Step 4: Append the generated HTML elements to the DOM
    container.innerHTML = htmlElements.join('');
})
.catch(error => console.error('Error fetching data:', error));