function addpage(){
	alert("The Product has been added to cart");
}
function newpage(){
	const fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.includes("Mango"); // is true
}
const searchInput=document.getElementById('searchInput');
const searchButton=document.getElementById('searchButton');

searchButton.addEventListener('click',function(){
    const searchTerm =searchInput.value;
	console.log('Searching for "${searchTerm}"...');

})
searchInput.addEventListener('keyup',function(event){
	if(event.keyCode==13){
		searchButton.click();
	}
})