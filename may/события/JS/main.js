let my_section = document.querySelector('section');
let my_div = document.createElement('div');
let my_textarea = document.createElement('textarea');


window.onload = () => {
	my_div.innerText = 'hello';
	my_section.appendChild(my_div)
	
	$(document).on('keydown', (e) => {
    if(e.ctrlKey && e.which === 69){
        console.log('Ctrl+E!');
        e.preventDefault();
        my_section.replaceChild(my_textarea, my_div);
    }
});




	$(document).on('keydown', function(e){
    if(e.ctrlKey && e.which === 83){
        console.log('Ctrl+S!');
        e.preventDefault();
        my_div.innerText = my_textarea.value;
    	console.log(my_div.innerText);
    }
});


	$(document).keyup(function(e) {
     if (e.key === "Escape") { 
        my_section.replaceChild(my_div, my_textarea);
        my_div.innerText = 'hello';
    }
});
}

