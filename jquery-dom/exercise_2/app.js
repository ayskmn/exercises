let currentId = 0;
let moviesList = [];

$(function() {
    $("#new-movie-form").on("submit", function(evt) {
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
    
        let movieData = { title, rating, currentId };
        const HTMLtoAppend = createMovieDataHTML(movieData);
    
        currentId++
        moviesList.push(movieData);
    
        $("#movie-table-body").append(HTMLtoAppend);
        $("#new-movie-form").trigger("reset");
    });

    $("tbody").on("click", ".btn.btn-danger", function(evt) {
        // find the index where this movie is
        let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
        
        // remove it from the array of movies
        moviesList.splice(indexToRemoveAt, 1)
    
        // remove it from the DOM
        $(evt.target)
          .closest("tr")
          .remove();
        
      });
}