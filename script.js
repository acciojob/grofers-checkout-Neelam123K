const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');
    let getsum = 0;

    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0; 
    });

    let existingTotalRow = document.querySelector(".total-row");
    if (existingTotalRow) {
        existingTotalRow.firstElementChild.textContent = `Total Prices: $${total.toFixed(2)}`;
    } else {
        const totalRow = document.createElement('tr');
        totalRow.classList.add("total-row");

        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; 
        totalCell.textContent = `Total Prices: $${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        document.getElementById('groceryTable').appendChild(totalRow);
    }
  
};

getSumBtn.addEventListener("click", getSum);

