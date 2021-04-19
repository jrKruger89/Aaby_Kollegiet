//login
function TheLogin() {
    var legalpassword = "aabykollegiet1234";
    if (this.document.login.pass.value == legalpassword) {
        top.location.href = "/pages/beboer_opslagstavle.html";
    } else {
        window.alert("Forkert adgangskode - prøv med aabykollegiet1234 :)");
    }
}
