
function dropDown(){
	let color = document.getElementById("colorSelect")

	let options = color.querySelector("option:checked")

	
		if(options){
			options.remove()
		}
}