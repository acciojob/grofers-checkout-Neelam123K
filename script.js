const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//write your code
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach(priceCell => {
    const price = parseFloat(priceCell.textContent);
    if (!isNaN(price)) {
      total += price;
    }
  });

  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "right";

  totalRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
