const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');
    let total = 0;

    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0; 
    });

       if (existingTotalRow) {
        existingTotalRow.querySelector('td').textContent = `Total Prices: $${total.toFixed(2)}`;
    } else {
        const totalRow = document.createElement('tr');
        totalRow.classList.add("total-row");

        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; 
        totalCell.textContent = `Total Prices: $${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        const groceryTable = document.getElementById('groceryTable');
        if (groceryTable) {
            groceryTable.appendChild(totalRow);
        } else {
            console.error("Table with ID 'groceryTable' not found!");
        }
  
};

getSumBtn.addEventListener("click", getSum);

