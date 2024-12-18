console.log("js is linked!");
const movies = [
    { 
        title: "joker Folie a deaux",
        runtime:"108",
        poster:"assets/images/joker.jpeg",
        showtimes:["12:00 PM", "3:00 PM", "6:00 PM"]

    },
    {
        title: "Avengers: Endgame",
        Runtime:"2hr 59min",
        poster:"assets/images/avengers end game.jpeg",
        showtimes:["1.00 pm","4.00 pm","8:00pm"]
    }
];
const container = document.getElementById('movie-container');
movies.forEach(movie => {
    const moviecard = document.createElement('div');
    moviecard.className ='movie';

    const img = document.createElement('img');
    img.src =movie.poster;
    img.alt =movie.title;

    const details=document.createElement('div');
    details.classname = 'movie-details';

    const title = document.createElement('div');
    title.classname = 'movie-title';
    title.textContent = movie.title;


    const runtime=document.createElement('div');
    runtime.classname = 'runtime';
    runtime.textcontent =`runtime: ${movie.runtime}`;

    const showtimes =document.createElement('div');
    showtimes.classname = 'showtimes';
    showtimes.textcontent =`showtimes: ${movie.showtimes}`;

    movie.showtimes.forEach(time =>{
        const btn = document.createElement('button');
        btn.className= 'showtime';
        btn.textcontent=time;

        btn.addEventListener('click',()=> {
            alert(`you selected ${movie.title} at ${time}`);
        });
        showtimes.appendChild(btn);
    });
    details.appendChild(title);
    details.appendChild(runtime);
    details.appendChild(showtimes);


    moviecard.appendChild(img);
    moviecard.appendChild(details);

    container.appendChild(moviecard);
});

        
    
