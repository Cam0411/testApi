
var costApi = "  http://localhost:3000/cost"  
var flimApi = " http://localhost:3000/flims"
fetch(costApi).then(response => {return response.json()}).then(cost => { console.log(cost);})
fetch(flimApi).then(response => {return response.json()}).then(flim => {console.log(flim);})