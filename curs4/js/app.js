function creatediv(n){
  for (let h = 0; h < n; h++) {
      var div = document.createElement('div');    
      div.innerHTML = h+1; //1, 2, 3... in fiecare box
      div.className = 'box';
      document.getElementById("wrapper").appendChild(div);
      
  }
  
}
creatediv(72); //ascund o coloana pt tabla de sah