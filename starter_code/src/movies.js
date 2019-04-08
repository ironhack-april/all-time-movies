/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
    
    var minutesArray = movies.map((eachMovie)=>{ //looped through all movies
        let movie = eachMovie.duration.split(" ") //made the duration string into array 
        let totalMinutes = 0; 
        movie.forEach((m)=>{ //loop through array 
            if(m.includes('h')){  
                totalMinutes+=Number(m.replace('h',''))*60 //if has h do this math
            } 
            if(m.includes('min')){
                totalMinutes+=Number(m.replace('min','')) //if has min do this
            }
        })
        return {...eachMovie, duration: totalMinutes} //return all the old movie stuff with different duration

    })
    return minutesArray //return ENTIRE new ARRAY with durations 
    //console.log(minutesArray)
}


// Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
    if(movies.length === 0){ return undefined}
    let avgMovies = movies.reduce((acc, movie)=>{
        return acc + Number(movie.rate)
    },0)
    return Number((avgMovies/movies.length).toFixed(2));
}




// Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter((movie)=>{
        return movie.genre.includes('Drama')
    })
    return ratesAverage(dramaMovies)
}



function orderByDuration(movies) {

    movies.sort((a,b)=>{
        if(a.duration < b.duration){ return -1}
        if(a.duration > b.duration){ return  1}
        if(a.title < b.title)      { return -1}
        if(a.title > b.title)      { return  1}        
        return 0;
    })
    return movies
}

//console.log(  orderByDuration(  turnHoursToMinutes(movies)   )  )

function howManyMovies( movies ){
    if(movies.length === 0){ return undefined}
    let directedByMovies = movies.filter((movie)=>{
        return movie.director.includes('Spielberg') &&  movie.genre.includes('Drama')
    })
    return `Steven Spielberg directed ${directedByMovies.length} drama movies!`
}


// function bestYearAvg(moviesArr) {
//     var ratesYear = {};
//     var moviesYear = {};
//     var averageYear = {};
//     if (moviesArr.length === 0) {
//       return undefined;
//     }
//     moviesArr.forEach(function (e) {
//       if (ratesYear[e.year]) {
//         moviesYear[e.year] += 1;
//         ratesYear[e.year] += parseFloat(e.rate);
//         averageYear[e.year] = parseFloat((ratesYear[e.year] / moviesYear[e.year]).toFixed(2));
//       } else {
//         ratesYear[e.year] = parseFloat(e.rate);
//         moviesYear[e.year] = 1;
//         averageYear[e.year] = parseFloat(e.rate);
//       }
//     });
//     var year = Object.keys(averageYear).reduce(function (a, b) {
//       if (averageYear[a] === averageYear[b]) {
//         if (b < a) {
//           return b;
//         }
//         return a;
//       } else if (averageYear[a] > averageYear[b]) {
//         return a;
//       }
//       return b;
//     });
//     return 'The best year was ' + year + ' with an average rate of ' + averageYear[year];
//   }
  
function bestYearAvg ( movies ) {
    movies.sort((a,b)=>{
        if(a.year < b.year){ return -1}
        if(a.year > b.year){ return  1}     
        return 0;
    })

    let bestAvg = 0; 
    let bestYear = '' 
    let year = 0,
        sum = 0,
        count = 0

    for(let i=0; i<movies.length; i++){
        if(movies[i].year != year){
            if( bestAvg < sum / count) {
                bestAvg = (sum / count)
                bestYear = movies[i-1].year
            } 
            count = 0;
            sum = 0; 
            year = movies[i].year
            console.log(year)
        } 
        sum += Number(movies[i].rate)
        count += 1
        console.log(Number(movies[i].rate))
    }
    console.log('bestYear',bestYear)
    //return String(bestYear) 
    return 'The best year was ' + bestYear + ' with an average rate of ' + bestAvg;

}
console.log(bestYearAvg(movies))

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
