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
  }
}

function changeForm(type) {
  const first = document.getElementById("0");
  const second = document.getElementById("1");

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
