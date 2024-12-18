let tlink = document.getElementsByClassName("tlink");
let tcontents = document.getElementsByClassName("tcontents");

function tabex(tn) {
  //actlink tactive
  for (t of tlink) {
    t.classList.remove("actlink");
  }
  for (tt of tcontents) {
    tt.classList.remove("tactive");
  }
  event.currentTarget.classList.add("actlink");
  document.getElementById(tn).classList.add("tactive");
}
