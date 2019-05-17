/*$(document).on('keydown', (e) => {
    if(e.ctrlKey && e.which === 83){
        console.log('Ctrl+S!');
        e.preventDefault();
        $('#my_div').css('color', 'red')
    }
});*/


let my_div = document.querySelector('#my_div')



document.addEventListener('keydown', (e) => {
	if(e.ctrlKey && e.keyCode === 83){
        console.log('Ctrl+S!');
        e.preventDefault();
        my_div.style.color = 'red';
    }
})
