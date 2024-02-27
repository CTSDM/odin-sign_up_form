const pwd = document.querySelector("#password");
const pwdConf = document.querySelector("#password-confirmation");
const btnCreateAcc = document.querySelector("button");
const divError = document.querySelector("#error-message")

btnCreateAcc.addEventListener("click", () => {
    divError.textContent = pwd.value !== pwdConf.value ? "Passwords do not match" : "";
    console.log("hallo");
});
