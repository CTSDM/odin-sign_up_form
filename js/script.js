const pwd = document.querySelector("#password");
const pwdConf = document.querySelector("#password-confirmation");
const btnCreateAcc = document.querySelector("button");
const divError = document.querySelector("#error-message")

let validity = false;

pwd.addEventListener("keyup", () => {
    if (pwd.checkValidity())
    {
        validity = true;
        btnCreateAcc.disabled = true;
        if (pwdConf.value === "")
            divError.textContent = "Plase confirm your password";
    }
    else
    {
        validity = false;
        btnCreateAcc.disabled = false;
    }
})

pwdConf.addEventListener("keyup", () => {
    if (validity)
    {
        if (pwd.value !== pwdConf.value)
        {
            divError.textContent = "Passwords do not match";
            btnCreateAcc.disabled = true;
        }
        else
        {
            divError.textContent = "";
            btnCreateAcc.disabled = false;
        }
    }
});
