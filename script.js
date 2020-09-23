
const container = document.querySelector('#container');
let size = 16
grid(size);

//create the grid
function grid(size){
for (i = 1; i <=size; i++) {
  for (j = 1; j <=size; j++) {
      const div = document.createElement("div");
      div.setAttribute("id", "square");
      div.style.gridRowStart = `${i}`;
      div.style.gridColumnStart = `${j}`;
      div.style.backgroundColor = "white"; 
      container.appendChild(div);
  }
}
//Hover effect
const pxl = document.querySelectorAll("#square");
pxl.forEach((div)=>{
  div.addEventListener("mouseenter", function(e){
    e.target.style.background='grey';
    })  
})
}
//remove grid
function removeOldGrid() {
  while (container.lastChild) {
      container.removeChild(container.lastChild);
  }    
}
//button
const button = document.querySelector("#btn");
button.addEventListener("click", function() {
    size = prompt("Enter the number of squares for each side of the new grid:");
    removeOldGrid();
    grid(size);
});