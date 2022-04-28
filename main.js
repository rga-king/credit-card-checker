// Codecademy project 
// credit-card-checker
// See Project_Requirements.md for brief of requirements

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/* Checks if a credit card number is valid (or not)
*/
const validateCred = cardNum => {
  let accumulator = 0; let num;
  cardNum.slice().reverse().forEach((v, i) => {
    if (i % 2 !== 0) {
      // sum the value of the digits
      if (v * 2 >= 10) {
        num = v * 2 - 9;
      } else {
        num = v * 2;
      }
    // not a second digit so just add to accumulator
    } else {
      num = v;
    }
    // add the current number to the accumulated total
    accumulator += num; 
  });
  // check if card valid
  return accumulator % 10 === 0 ? true : false;
}

/* Returns array of invalid card numbers
*/
const findInvalidCards = cardNums => {
  let invalidCardList = [];
  cardNums.forEach(a => {if (!validateCred(a)) {invalidCardList.push(a)}});
  return invalidCardList;
}

/* Adds a company to the list
*/
const addCompany = (companyList, company) => {
  // Check company is not already on the list
  if (!companyList.includes(company)) {
    companyList.push(company);
  }
  return companyList;
}

/* Creates a list of companies who have issued invalid cards
*/
const idInvalidCardCompanies = arr => {
  let companyList = []; let company = '';
  arr.forEach(a => {
    switch (a[0]) {
      case 3: company = 'Amex (American Express)'; break;
      case 4: company = 'Visa'; break;
      case 5: company = 'Mastercard'; break;
      case 6: company = 'Discover'; break;
      default: company = 'not found'; console.log('Company not found');
    }
    if (company !== 'not found') {companyList = addCompany(companyList, company)};
  });
  return companyList;
}


// REPORT
// total credit cards checked
console.log(`Total credit cards checked: ${batch.length}`);
// total valid cards
console.log(`Total valid credit cards: ${findInvalidCards(batch).length}`);
// total invalid cards
console.log(`Total invalid credit cards: ${batch.length - findInvalidCards(batch).length}`);
// Card companies with invalid cards
console.log(`Companies with invalid cards: ${idInvalidCardCompanies(findInvalidCards(batch)).join(', ')}`);



