
// Få åtkomst till element:
let tryckhar = document.getElementById("tryck-har");
let textbox = document.getElementById("text-box");

// Skapa funktion for att omvandla text till versaler:
tryckhar.addEventListener('click', function() {
    var text2 = textbox.value;
    var res = text2.toUpperCase();
    textbox.value = res;
});
