$(document).ready(function(){

// ==========================================================
// Declaration of an array of objects
// ==========================================================
var music = [
      {
        id : 101 ,
        title : 'Issa Album',
        artist : '21 Savage',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-1.jpg'
      },
      {
        id : 102 ,
        title : 'East Atlanta Love Letter',
        artist : '6lack',
        genre : 'hiphop',
        year : 2018,
        photo : 'hiphop-2.jpg'
      },
      {
        id : 103 ,
        title : 'Songs In A Minor',
        artist : 'Alicia Keys',
        genre : 'hiphop',
        year : 2016,
        photo : 'hiphop-4.jpg'
      },
      {
        id : 104 ,
        title : 'We Got It From Here... TY4YS',
        artist : 'A Tribe Called Quest',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-3.jpg'
      },
      {
        id : 105 ,
        title : 'Loud',
        artist : 'Rihanna',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-5.jpg'
      },
      {
        id : 106 ,
        title : 'Ordinary Man',
        artist : 'Lorange',
        genre : 'Rap',
        year : 2017,
        photo : 'rap-1.jpg'
      },
      {
        id : 107 ,
        title : 'Born Again',
        artist : 'Notorious B.i.g',
        genre : 'Rap',
        year : 2000,
        photo : 'rap-2.jpg'
      },
      {
        id : 108 ,
        title : 'Straight Outta Compton',
        artist : 'NWA',
        genre : 'Rap',
        year : 2013,
        photo : 'rap-3.jpg'
      },
      {
        id : 109 ,
        title : 'Blue Slide Park',
        artist : 'Mac Miller',
        genre : 'Rap',
        year : 2019,
        photo : 'rap-4.jpg'
      },
      {
        id : 110 ,
        title : 'Tkay',
        artist : 'Tkay Maidza',
        genre : 'Rap',
        year : 2017,
        photo : 'rap-5.jpg'
      },
      {
        id : 111 ,
        title : 'A Sea Of Split Peas',
        artist : 'Courtney Barnett',
        genre : 'Indie',
        year : 2013,
        photo : 'indie-1.jpg'
      },
      {
        id : 112 ,
        title : 'Little Dark Age',
        artist : 'MGMT',
        genre : 'Indie',
        year : 2018 ,
        photo : 'indie-2.jpg'
      },
      {
        id : 113 ,
        title : 'Humbug',
        artist : 'Arctic Monkeys',
        genre : 'Indie',
        year : 2009,
        photo : 'indie-3.jpg'
      },
      {
        id : 114 ,
        title : 'Currents',
        artist : 'Tame Impala',
        genre : 'Indie',
        year : 2015,
        photo : 'indie-4.jpg'
      },
      {
        id : 115 ,
        title : 'Remote',
        artist : 'Wallowse',
        genre : 'Indie',
        year : 2020,
        photo : 'indie-5.jpg'
      },
      {
        id : 116 ,
        title : 'Let Them Eat - Live',
        artist : 'Cypress Hill',
        genre : 'rock',
        year : 2015,
        photo : 'rock-1.jpg'
      },
      {
        id : 117 ,
        title : 'Audioslave Best Tracks',
        artist : 'Audioslave',
        genre : 'rock',
        year : 2020,
        photo : 'rock-2.jpg'
      },
      {
        id : 118 ,
        title : 'Hypnotize',
        artist : 'System Of A Down',
        genre : 'rock',
        year : 2005,
        photo : 'rock-3.jpg'
      },
      {
        id : 119 ,
        title : 'Greatest Hits',
        artist : 'Sublime',
        genre : 'rock',
        year : 2020,
        photo : 'rock-4.jpg'
      },
      {
        id : 120 ,
        title : 'Minutes To Midnight',
        artist : 'Linkin Park',
        genre : 'rock',
        year : 2018,
        photo : 'rock-5.jpg'
      }




];




// ==========================================================
// Function call to display all items
// ==========================================================

allMusic(); //displays all items on home page

$('#refresh').click(function(){
  allMusic();
});



// ==========================================================
// Display items as per user's input - breed filter call
// ==========================================================
//
// $('#showChoice').click(function(){
//   var inputArray = [];

  // read input of users and store
  // var rock = $('#rock:checked').val();
  // var rap = $('#rap:checked').val();
  // var pop = $('#pop:checked').val();

  //push user's choice into an array
  // if (rock === 'checked') {
  //       inputArray.push('Rock');
  //       console.log(inputArray);
  // }
  //
  // if (rap === 'checked') {
  //       inputArray.push('Rap');
  //       console.log(inputArray);
  // }
  //
  // if (hiphop === 'checked') {
  //       inputArray.push('Hip hop');
  //       console.log(inputArray);
  // }

  //call the function to filter user's choice
//   filteredMusic(inputArray);
//
// });//showChoice click function



// ==========================================================
// Behaviour filter call
// ==========================================================

// $('#showSelection').click(function(){
//   var behaviour = $('#behaviour').val();
//   console.log(behaviour);
//   filteredBehaviour(behaviour);
// });


// ==========================================================
// Function to display all items
// ==========================================================

function allMusic(){
  var i = 0;
  for (i = 0 ; i < music.length; i++){

    // own style
    // $('#result').append('<div class="row clearfix border border-danger m-2 p-2">' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<h1>' + music[i].title +   '</h1>' +
    //                       '<h2>' + cats[i].breed + '</h2>' +
    //                        '<h3>' + cats[i].color + '</h3>' +
    //                        '<h5>' + cats[i].behaviour + '</h5>' +
    //
    //                     '</div>' +
    //
    //                     '<div class="col-md-6">' +
    //                       '<img src="images/' + cats[i].photo + '" alt=" ' + cats[i].breed + '" class="img-thumbnail" > ' +
    //                     '</div>' +
    //
    //                     '</div>'
    // ); //append ends here
    //

    //bootstrap cards to $display
    displayCards(i);
    // cardModal();
  } //end of for loop
} //end of allMusic function



// ==========================================================
// Modal
// ==========================================================

  // function cardModal(){
  //
  //   $('.moreDetails').click(function(){
  //     $('#imageCover').text(' '); //clearing the content
      // console.log(this.id);
      // var breed = '';
      // var i=0;
      // for (i = 0; i < cats.length; i++) {
      //   console.log(parseInt(this.id), cats[i].id);
      //   if (parseInt(this.id) === cats[i].id) {
      //     breed = cats[i].breed;
      //     console.log(breed);
      //     console.log(cats[i].id, cats[i].name, cats[i].breed);
      //       $('#exampleModalLabel').text(cats[i].breed);
            //append will keep  adding to existing content, so clear if you want
            //or else use html to replace existing content
        //     $('#imageCover').append('<img class="img-fluid" src="images/' + music[i].photo + '" alt="' + music[i].title + '"/>');
        //
        //
        // } //end of if statement


      // }//end of for statement
      // console.log(breed);
      // catCarousel(breed);





    // }); // end of moreDetails click event

  // } //cardModal



// ==========================================================
// Carousel
// ==========================================================

  // function musicCarousel(coverBack){
  //   var breedArray = [];
  //   $('#imageCover').text('');
  //   for (i = 0; i < music.length; i++) {
  //
  //     if (music[i].breed === coverBack) {
  //       breedArray.push(music[i].photo);
        // console.log(cats[i].description);
      //   $('#imageCover').append('<p class="text-danger lead">' + music[i].title + music[i].genre + music[i].year + music[i].description + '<p>' );
      // } //end of if
    // } //end of for

    // console.log(breedArray);
    // $('#imageCat').append(
    //   '  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
    //   '  <ol class="carousel-indicators">' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
    //   '    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
    //   '  </ol>' +
    //   '  <div class="carousel-inner">' +
    //   '    <div class="carousel-item active">' +
    //   '      <img class="d-block w-100" src="images/' + musicArray[0] + '" alt="First slide">' +
    //   '    </div>' +
    //   '    <div class="carousel-item">' +
    //   '      <img class="d-block w-100" src="images/' + musicArray[1] + '"alt="Second slide">' +
    //   '    </div>' +
    //   '  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
    //   '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    //   '    <span class="sr-only">Previous</span>' +
    //   '  </a>' +
    //   '  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
    //   '    <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    //   '    <span class="sr-only">Next</span>' +
    //   '  </a>' +
    //   '</div>'); //end of imageCover html

  // } //end of musicCarousel



// ==========================================================
// Filter by music type
// ==========================================================

// function filteredCats(catBreed){
//   console.log(catBreed);
//   var i,j;
//   $('#result').text(' ');
//   for(i = 0 ; i < cats.length; i++) {
//     for (j = 0 ; j < catBreed.length; j++){
//       if (catBreed[j] === cats[i].breed) {
//         displayCards(i);
//         cardModal();
//       }//if
//     }//for j
//   }//for i
// }//filteredCats


// ==========================================================
// Filter by cat behaviour
// ==========================================================

// function filteredBehaviour(catBehaviour){
//   console.log(catBehaviour);
//   var i,j;
//   $('#result').text(' ');
//   for(i = 0 ; i < cats.length; i++) {
//     for (j = 0 ; j < catBehaviour.length; j++){
//       console.log(catBehaviour[j], cats[i].behaviour)
//       if (catBehaviour[j] === cats[i].behaviour) {
//         displayCards(i);
//         cardModal();
//
//       }//if
//
//     }//for j
//   }//for i
// }//filteredBehaviour



// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#result').append( '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 mx-auto ">' +
                          '<div class="card hover-rise mr-2 mx-auto text-primary bg-dark " style="width: 18rem;">' +
                             '<img src="images/' + music[j].photo + '" class="card-img-top" alt="' + music[j].genre + '">' +
                             '<div class="card-body bg-dark m-3>' +
                              '<h3 class="card-title ">'+ music[j].title + '</h1>' +
                              '<p class="card-text text-primary ">Genre : ' + ' ' + '<span class="text-primary mt-2">' + music[j].genre+ '</span> <br></p>' +
                              '<p class="card-text text-primary>Artist : ' + ' ' + '<span class="text-primary">' + music[j].artist + '</span> <br></p>' +
                              '<p class="card-text text-primary>Year : ' + ' ' + '<span class="text-primary">' + music[j].year + '</span> <br></p>' +

                              '<button id="' + music[j].id + '" type="button" class="btn text-secondary  moreDetails" data-toggle="modal" data-target="#exampleModal">More'+ " " + music[j].genre + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here


  }; //displayCards



}); //document.ready()
