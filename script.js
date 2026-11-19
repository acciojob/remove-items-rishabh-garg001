
function dropDown(){
	let color = document.getElementById("colorSelect")

	let selectedIndex = color.selectedIndex

	
		if(selectedIndex !== -1){
			color.remove(selectedIndex)
		}
}