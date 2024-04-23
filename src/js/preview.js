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

function displayLogo(event) {
  const preview = document.getElementById("preview_logo");
  preview.src = URL.createObjectURL(event.target.files[0]);
  preview.onload = function () {
    URL.revokeObjectURL(preview.src);
  };
}

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
  fetch("./templates/inputRow.html")
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
    })
    .then((row) => {
      row = row.replaceAll("TEMPLATE", `${rowCount + 1}`);
      const element = document.createElement("div");
      element.classList.add("px-5", "pb-2");
      element.setAttribute("id", `row${rowCount + 1}`);
      element.innerHTML = row;
      document
        .getElementById(`row${rowCount}`)
        .insertAdjacentElement("afterend", element);
    });

  fetch("./templates/tableRow.html")
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
    })
    .then((row) => {
      row = row.replaceAll("TEMPLATE", `${rowCount + 1}`);
      const element = document.createElement("tr");
      element.setAttribute("id", `r${rowCount + 1}`);
      element.innerHTML = row;
      document.getElementById(`r${rowCount}`).insertAdjacentElement("afterend", element);
      rowCount += 1;
    });
}

function removeRow() {
  if (rowCount > 1) {
    document.getElementById(`row${rowCount}`).remove();
    document.getElementById(`r${rowCount}`).remove();
    rowCount -= 1;
    calculateGrandTotal();
  }
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
      calculateGrandTotal();
      break;
    case "price":
      document.querySelector(`#r${id}>#${type}`).innerHTML = USDollar.format(
        event.target.value
      );
      document.querySelector(`#r${id}>#total`).innerHTML = USDollar.format(
        event.target.value * document.querySelector(`#r${id}>#quant`).innerHTML
      );
      calculateGrandTotal();
      break;
  }
}

function calculateGrandTotal() {
  let total = 0;
  for (let i = 1; i <= rowCount; i++) {
    total += +document
      .querySelector(`#r${i}>#total`)
      .innerHTML.slice(1)
      .replaceAll(",", "");
    document.getElementById("grand_total").innerHTML = USDollar.format(total);
  }
}
