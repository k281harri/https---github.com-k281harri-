



//event listener

thisForm.addEventListener('submit', Name)

const  

// append 
listo.appendChild(thisForm)

}
function validateEmail() {
    if (email.value === "") {
      window.alert("Please provide an email address.");
      email.focus();
      return false;
    }
    return email.value;

}
const aboutTitle = document.createElement('h2');
const browser = document.createElement("p");
  browser.innerHTML = ` 
    ${window.navigator.appCodeName} | 
    ${window.navigator.appName} | 
    ${version}`;