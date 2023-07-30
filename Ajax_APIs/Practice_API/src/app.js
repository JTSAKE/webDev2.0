API_ENDPOINT = 'https://6495fed9b08e17c91792ed85.mockapi.io/bill'
API_Data= [];
const contentLocation = document.getElementById('contentLocation');

async function getData() {
    try {
        const response = await fetch(API_ENDPOINT);
        API_Data = await response.json();
    }
    catch(e){
        console.log(`Error: ${e}`);
    }
}


async function drawData(data) {
    try{
        const htmlElements = data.map (item => {
            return(
                `<div class="item${item.id}">
                <h3>Name: ${item.name}</h3>
                <h3>Amount: ${item.amount}</h3>
                <h3>Due Date: ${item.dueDate}</h3>
                </div>`
                );
            });
            contentLocation.innerHTML = htmlElements.join('');
        }
        catch(e) {
            console.log(e)
        }
    }
    
getData()
drawData(API_Data);