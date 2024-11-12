const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    let existingTotalRow = document.querySelector("#totalRow");
    if (existingTotalRow) {
        existingTotalRow.textContent = `Total Price: $${total}`;
    } else {
        const totalRow = document.createElement('tr');
        totalRow.id = "totalRow"; // Set an id to identify the total row
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2;
        totalCell.textContent = `Total Price: $${total}`;
        totalRow.appendChild(totalCell);

        document.getElementById('groceryTable').appendChild(totalRow);
    }
  
};

getSumBtn.addEventListener("click", getSum);

