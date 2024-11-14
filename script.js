const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');
    let getsum = 0;

    prices.forEach(prices => {
        total += parseFloat(getsum.textContent);
    });

    let existingTotalRow = document.querySelector("#totalRow");
    if (existingTotalRow) {
        existingTotalRow.first.textContent = `Total Prices: ${getsum}`;
    } else {
        const totalRow = document.createElement('tr');
        totalRow.id = "totalRow"; 
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2;
        totalCell.textContent = `Total Prices: $${total}`;
        totalRow.appendChild(totalCell);

        document.getElementById('groceryTable').appendChild(totalRow);
    }
  
};

getSumBtn.addEventListener("click", getSum);

