var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  let results = {}

  for (i = 0; i < salesData.length; i ++) {
    var salesTotal = 0
    for (var x in salesData[i].sales) {
      salesTotal = salesTotal + salesData[i].sales[x]
    }

    var taxTotal = salesTotal * taxRates[salesData[i].province]

    if (results[salesData[i].name]) {
      var oldTotalSales = results[salesData[i].name].totalSales
      var oldTotalTaxes = results[salesData[i].name].totalTaxes
      results[salesData[i].name] = {
        totalSales: oldTotalSales + salesTotal,
        totalTaxes: oldTotalTaxes + taxTotal
      }
    } else {
      results[salesData[i].name] = {
        totalSales: salesTotal,
        totalTaxes: taxTotal
      }
    }
  }
return results
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/