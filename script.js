function generate(){
  const player = document.getElementById("selector").value;
  const id = document.getElementById("itemid").value;
  const amount = document.getElementById("ryou").value;
  const display = document.getElementById("dis");
  display.innerHTML = `/give ${player} ${id} ${amount}`

}
