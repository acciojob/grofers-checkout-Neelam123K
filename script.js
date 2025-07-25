const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove previous total row if any
  const oldRow = document.getElementById("total-row");
  if (oldRow) oldRow.remove();

  // Get all prices
  const priceElements = document.querySelectorAll(".price");
  let total = 0;
  priceElements.forEach((el) => {
    total += parseFloat(el.textContent);
  });

  // Create new row
  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const td = document.createElement("td");
  td.colSpan = 2;

  // ✅ Set the required #ans element
  const span = document.createElement("span");
  span.id = "ans";
  span.textContent = `Total Price: ₹${total}`;
  td.appendChild(span);

  newRow.appendChild(td);

  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
