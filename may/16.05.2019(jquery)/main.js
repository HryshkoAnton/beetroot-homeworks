import db from './posts.js'



//add elements to DOM, add Classes and text to elements

$('header').append('<a>MusicApp');
$('a').addClass('logo');
$('section:eq(0)').addClass('section1');
$('section:eq(1)').addClass('section2');
$('section:eq(2)').addClass('section3');
$('section:eq(3)').addClass('My_Playlist_section');
$('.My_Playlist_section').hide()

$('header').append('<ul>');
$('ul').append('<li>');
$('ul').append('<li>');
$('ul').append('<li>');

$('li').append('<a>')
$('a').attr('href', '#')

$('ul a:first').text('Home Page').addClass('HomePage');
$('ul a:eq(1)').text('Hotlist').addClass('HotList');
$('ul a:eq(2)').text('My Playlist').addClass('MyPlaylist');

$('ul').addClass('navigation_list');
$('header').addClass('clearfix border');

////////////////////////////////////////////////////////////

//add information from database

for (let i = 0; i < db.library.length; i++) {
    $('.section1').append('<div>');
    $('.section1 div').addClass('border music__card__section');
    $(`.section1 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
    $(`.section1 h3:eq(${i})`).text(db.library[i].title);
    $(`.section1 img:eq(${i})`).attr('src', db.library[i].imgUrl);
    $(`.section1 p:eq(${i})`).text(db.library[i].description);
    $(`.section1 span:eq(${i})`).text(db.library[i].author);
    $(`.section1 button:eq(${i})`).text('To Playlist');

}

for (let i = 0; i < db.hotlist.length; i++) {
    $('.section2').append('<div>');
    $('.section2 div').addClass('border music__card__section');
    $(`.section2 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
    $(`.section2 h3:eq(${i})`).text(db.hotlist[i].title);
    $(`.section2 img:eq(${i})`).attr('src', db.hotlist[i].imgUrl);
    $(`.section2 p:eq(${i})`).text(db.hotlist[i].description);
    $(`.section2 span:eq(${i})`).text(db.hotlist[i].author);
    $(`.section2 button:eq(${i})`).text('To Playlist');
}

for (let i = 0; i < db.playlist.length; i++) {
    $('.section3').append('<div>');
    $('.section3 div').addClass('border music__card__section');
    $(`.section3 div:eq(${i})`).append('<h3>','<img>', '<p>', '<span>', '<button>');
    $(`.section3 h3:eq(${i})`).text(db.playlist[i].title);
    $(`.section3 img:eq(${i})`).attr('src', db.playlist[i].imgUrl);
    $(`.section3 p:eq(${i})`).text(db.playlist[i].description);
    $(`.section3 span:eq(${i})`).text(db.playlist[i].author);
    $(`.section3 button:eq(${i})`).text('To Playlist');
}

///////////////////////////////////////////////////////////


// for (let i in db) {
//     //console.log(db[i])
//     for (let j in db[i]) {
//         console.log(db[i][j])
//     }
// }


// JQUERY EVENTS       
        

$('.music__card__section').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('add_shadow');
    
})

$('.music__card__section').on('mouseleave', () => {
    $('.music__card__section').removeClass('add_shadow');
})

$('button').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('button_mouseEnter');
})

$('button').on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('button_mouseEnter');
})



$('button').on('click', (event) => {
    $(event.currentTarget).parent().clone().appendTo('.My_Playlist_section');
    $(event.currentTarget).text('Added')
    $(event.currentTarget).css({
        'color': 'white',
        'background-color': 'black'
    }, 500)
})

$('.MyPlaylist').on('click', (event) => {
    $('.section1').hide();
    $('.section2').hide();
    $('.section3').hide();
    $('.My_Playlist_section').show()
})

$('.HomePage').on('click', () => {
    $('.section1').show();
    $('.section2').show();
    $('.section3').show();
    $('.My_Playlist_section').hide()
})

$('.HotList').on('click', () => {
    $('.section1').hide();
    $('.section2').show();
    $('.section3').hide();
    $('.My_Playlist_section').hide()
    
})





$('ul a').on('mouseenter', (event) => {
    $(event.currentTarget).animate({
        fontWeight: 'bold',
        fontSize: '17px'
    }, 300);
    
})

$('ul a').on('mouseleave', (event) => {
    $(event.currentTarget).animate({
        fontWeight: 'regular',
        fontSize: '15px'
    }, 300);
    
})

$('a.logo').on('mouseenter', (event) => {
    $(event.currentTarget).animate({
        'fontSize': '26px'
    }).addClass('currentColor');
})

$('a.logo').on('mouseleave', (event) => {
    $(event.currentTarget).animate({
        'color': 'red',
        'fontSize': '24px'
    }).removeClass('currentColor')
})






