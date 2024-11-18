const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices=document.getElementsByClassName('price');
const pricesArr=Array.from(prices);
let sum=0;
pricesArr.forEach((elm)=>{
    // console.log(typeof Number(elm.innerText)) 
    sum+=Number(elm.innerText);
})

  const table=document.getElementsByTagName('table')[0];

  const tr=document.createElement('tr');
  const td=document.createElement('td');

  td.innerText=`Total Price = ${sum}`;
  td.colSpan='2';
	td.id='ans';
//   td.style.textAlign='justify';
  tr.append(td);
  table.append(tr);

};

getSumBtn.addEventListener("click", getSum);