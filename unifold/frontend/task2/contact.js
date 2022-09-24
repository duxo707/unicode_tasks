function formValidation () {
    var name = document.forms.fcontact.fname.value;
    var email = document.forms.fcontact.femail.value;
    var num = document.forms.fcontact.fnum.value;
    var checkName = /\d+$/g;
    var checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var checkPhone=/^\d{10}$/;
    // if (document.querySelector('.nm').classList.length < 3) {
    //     document.querySelector('nm').classList.add('hidden');
    // }
    if (name === "" || checkName.test(name)) {
        alert("Invalid name");
        // document.querySelector('.nm').classList.remove('hidden');
        // name.focus();
        return false;
    } 
    if (email === "" || !checkEmail.test(email)) {
        alert("Invalid email");
        // document.querySelector('.em').classList.remove('hidden');
        // email.focus();
        return false;
    }
    if (num === "" || !checkPhone.test(num)) {
        alert("Invalid contact number");
        // document.querySelector('.num').classList.remove('hidden');
        // num.focus();
        return false;
    }
    return true;
}