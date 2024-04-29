



//Difference between innerText and textContent: 

// innerText will only show what is visible on the page. 

// textContent will show all the texts even if it's hidden due to any CSS property being applied to the text.









//queryselector gives the entire content along with tag whereas queryselectorall gives a nodelist and we can't directly apply properties to nodelist like arrays. to change color or any other style -> myH[0].style.color = ""
//nodelist is not basic array. You can apply forEach in nodelist but cannot apply maps since it's not in their prototype. If you want to apply map you have to change it to array and then you can apply
//getElementByClassName gives HTML collection and html collection doesn't have forEach loop so we have to convert it first -> Array.from(listItem)