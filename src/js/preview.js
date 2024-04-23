let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const container = document.getElementById("preview");

fetch("./pdf.html")
  .then((response) => {
    if (response.ok) {
      return response.text();
    }
  })
  .then((htmlPreview) => {
    container.innerHTML = htmlPreview;
  });

function changePdfFields(event, target) {
  const companyName = document.getElementById("company_name");
  const companyAddress = document.getElementById("company_address");
  const companyPhone = document.getElementById("company_phone");

  const documentTitle = document.getElementById("document_title");
  const documentNumber = document.getElementById("document_number");
  const documentDate = document.getElementById("document_date");
  const documentRecipient = document.getElementById("document_recipient");
  const documentPayment = document.getElementById("document_payment");

  switch (target) {
    case "name":
      companyName.innerHTML = event.target.value;
      break;
    case "address":
      companyAddress.innerHTML = event.target.value;
      break;
    case "phone":
      companyPhone.innerHTML = event.target.value;
      break;
    case "title":
      documentTitle.innerHTML = event.target.value;
      break;
    case "number":
      documentNumber.innerHTML = event.target.value;
      break;
    case "date":
      documentDate.innerHTML = event.target.value;
      break;
    case "recipient":
      documentRecipient.innerHTML = event.target.value.replaceAll("\n", "<br />");
      break;
    case "payment":
      documentPayment.innerHTML = event.target.value.replaceAll("\n", "<br />");
      break;
  }
}

function changeForm(type) {
  const first = document.getElementById("first");
  const second = document.getElementById("second");

  switch (type) {
    case "next":
      first.style.left = "-50rem";
      second.style.left = "12rem";
      break;
    case "prev":
      second.style.left = "-50rem";
      first.style.left = "12rem";
      break;
  }
}

let rowCount = 2;
function addRow() {
  // TODO: Add row based on rowCount and copy the prev one
}
function removeRow() {
  // TODO: Remove row based on rowCount
}

function changeItem(id, type, event) {
  switch (type) {
    case "name":
      document.querySelector(`#r${id}>#${type}`).innerHTML = event.target.value;
      break;
    case "quant":
      document.querySelector(`#r${id}>#${type}`).innerHTML = event.target.value;
      document.querySelector(`#r${id}>#total`).innerHTML = USDollar.format(
        event.target.value * document.querySelector(`#r${id}>#price`).innerHTML.slice(1)
      );
      break;
    case "price":
      document.querySelector(`#r${id}>#${type}`).innerHTML = USDollar.format(
        event.target.value
      );
      document.querySelector(`#r${id}>#total`).innerHTML = USDollar.format(
        event.target.value * document.querySelector(`#r${id}>#quant`).innerHTML
      );
      break;
  }
}

function calculateGrandTotal() {}
