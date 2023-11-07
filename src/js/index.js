/**
 *this will contain js logic
 */
 function addProduct() {
    const productList = document.getElementById('productList');
    const row = productList.insertRow();
    row.innerHTML = `
      <td><input type="text" placeholder="Product Name"></td>
      <td><input type="number" placeholder="Price"></td>
    `;
  }
  
  function calculateTax() {
    const rows = document.getElementById('productList').getElementsByTagName('tr');
    let totalTax = 0;
  
    for (let i = 0; i < rows.length; i++) {
      const price = parseFloat(rows[i].querySelector('input[type="number"]').value);
      const tax = (price * 0.15).toFixed(2); // Assuming a tax rate of 15%
  
      totalTax += isNaN(tax) ? 0 : parseFloat(tax);
    }
  
    document.getElementById('totalTax').innerText = `₹${totalTax}`;
  }