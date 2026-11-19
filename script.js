
function dropDown(){
	let color = document.getElementById("colorSelect")

let colorSelect = color.value
	let options = color.querySelectorAll("option")

	options.forEach(option => {
		if(option.value === colorSelect){
			option.remove()
		}
	})
}