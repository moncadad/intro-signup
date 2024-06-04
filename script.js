/*
    Brief: 
    Form that asks for input values if value appear empty it alerts user based on field that needs to be filled. 

    if email doesnt meet email standards it alrets it

    This operation takes place soon ass the BUTTON is clicked


    UI, updated
    -- the empty field(s) or incorrect email will:
    --- display error icon
    --- display error msg 

*/

// refrence, form fields, form icons, form msgs, button
const inputBox = document.querySelectorAll("input"); //selects all input value fields
const inputArea = document.querySelectorAll(".input__area");
const errorMsg = document.querySelectorAll(".error__msg");
const errorIcon = document.querySelectorAll(".error__icon");
const trialButton = document.getElementById("trialButton");
// const successBox = document.getElementById("successBox");
trialButton.addEventListener("click", handleForm);

function handleForm(e) {
  console.log("Processing form..");
  checkForEmpty();
}

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// helper function
function checkForEmpty() {
  let count = 0;
  clearError();
  inputBox.forEach((box, i) => {
    let val = box.value;
    if (i === 2 && !val.match(mailformat)) {
      errorAlert(i);
    } else if (val.replace(/\s/g, "") === "") {
      errorAlert(i);
    } else {
      count += 1;
      console.log(val);
      if (count === 4) {
        console.log("Form Submitted Succesfully!");
        alert("Congrats, you're all signed up!");
        // successBox.style.fontSize = "3rem";
        // successBox.style.zIndex = "1";
      }
    }
  });
}

function clearError() {
  errorIcon.forEach((x) => {
    x.style.visibility = "hidden";
  });
  errorMsg.forEach((y) => {
    y.style.visibility = "hidden";
  });
  inputArea.forEach((z) => {
    z.style.borderColor = "";
  });

  inputBox.forEach((w) => {
    w.style.color = "";
  });
}

function errorAlert(a) {
  if (a === 2) {
    errorIcon[a].style.visibility = "visible";
    errorMsg[a].textContent = `Looks like this is not an ${inputBox[a].name}`;
    inputArea[a].style.borderColor = "red";
    inputBox[a].style.color = "red";
  } else errorMsg[a].textContent = ` ${inputBox[a].name} cannot be empty. `;
  errorIcon[a].style.visibility = "visible";
  errorMsg[a].style.visibility = "visible";
  inputArea[a].style.borderColor = "red";
}
