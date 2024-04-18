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
  }
}
