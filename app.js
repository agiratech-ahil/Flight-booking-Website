window.onload = function onLoadingFirst() {
  changeTab("firstoption");
};
function changeTab(selected) {
  var Eu = document.getElementById("firstoption");
  var Eubtn = document.getElementById("Europe");
  var As = document.getElementById("secondoption");
  var Asbtn = document.getElementById("Asia");
  var Af = document.getElementById("thirdoption");
  var Afbtn = document.getElementById("Africa");
  var Me = document.getElementById("fourthoption");
  var Mebtn = document.getElementById("Middle_East");
  var Oc = document.getElementById("fifthoption");
  var Ocbtn = document.getElementById("Oceania");
  var In = document.getElementById("sixthoption");
  var Inbtn = document.getElementById("India");

  if (selected == "firstoption") {
    Eu.style.display = "block";
    As.style.display = "none";
    Af.style.display = "none";
    Oc.style.display = "none";
    Me.style.display = "none";
    In.style.display = "none";
    Eubtn.style.borderBottomColor = "#fd5d5d";
    Inbtn.style.borderBottomColor = "gainsboro";
    Mebtn.style.borderBottomColor = "gainsboro";
    Asbtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "gainsboro";
  } else if (selected == "secondoption") {
    As.style.display = "block";
    Af.style.display = "none";
    Eu.style.display = "none";
    Me.style.display = "none";
    Oc.style.display = "none";
    In.style.display = "none";
    Asbtn.style.borderBottomColor = "#fd5d5d";
    Mebtn.style.borderBottomColor = "gainsboro";
    Inbtn.style.borderBottomColor = "gainsboro";
    Eubtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "gainsboro";
  } else if (selected == "thirdoption") {
    Af.style.display = "block";
    As.style.display = "none";
    Eu.style.display = "none";
    Me.style.display = "none";
    Oc.style.display = "none";
    In.style.display = "none";
    Asbtn.style.borderBottomColor = "gainsboro";
    Eubtn.style.borderBottomColor = "gainsboro";
    Mebtn.style.borderBottomColor = "gainsboro";
    Inbtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "#fd5d5d";
  } else if (selected == "fourthoption") {
    Me.style.display = "block";
    Oc.style.display = "none";
    Af.style.display = "none";
    As.style.display = "none";
    Eu.style.display = "none";
    In.style.display = "none";
    Asbtn.style.borderBottomColor = "gainsboro";
    Eubtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "gainsboro";
    Inbtn.style.borderBottomColor = "gainsboro";
    Mebtn.style.borderBottomColor = "#fd5d5d";
  } else if (selected == "fifthoption") {
    Oc.style.display = "block";
    Me.style.display = "none";
    Af.style.display = "none";
    As.style.display = "none";
    Eu.style.display = "none";
    In.style.display = "none";
    Asbtn.style.borderBottomColor = "gainsboro";
    Eubtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "gainsboro";
    Mebtn.style.borderBottomColor = "gainsboro";
    Inbtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "#fd5d5d";
  } else if (selected == "sixthoption") {
    Oc.style.display = "none";
    In.style.display = "block";
    Me.style.display = "none";
    Af.style.display = "none";
    As.style.display = "none";
    Eu.style.display = "none";
    Asbtn.style.borderBottomColor = "gainsboro";
    Eubtn.style.borderBottomColor = "gainsboro";
    Afbtn.style.borderBottomColor = "gainsboro";
    Mebtn.style.borderBottomColor = "gainsboro";
    Ocbtn.style.borderBottomColor = "gainsboro";
    Inbtn.style.borderBottomColor = "#fd5d5d";
  }
}
