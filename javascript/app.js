
document.querySelector("#app").addEventListener("click", function () {
alert(" مش شغالة")   
alert("javascript")
});





document.querySelector("#h3").addEventListener("click", function () {

    alert("لا يمكن التعديل ");
    console.log("تم الضغت ");
});



//السأل
let isNewUser = confirm("هل أنت مستخدم جديد؟");

        if (isNewUser === true) {
            alert("أهلاً بك معنا لأول مرة!");
        } else if (isNewUser ===false) {
            alert("أهلاً بعودتك مرة أخرى!");
        }
        
    