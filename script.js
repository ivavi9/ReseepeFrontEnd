
    // Get the form and the search bar
    var form = document.querySelector("form");
    var searchBar = document.querySelector("#search-bar");

    // Get the surprise me button
    var surpriseMeButton = document.querySelector("button");
    var searchButton = document.querySelector("#ssubmit");

    // Get the div where the recipes will be displayed
    var recipeDiv = document.querySelector("#recipes");

    // Add event listener to the form
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Get the search query
        var searchQuery = searchBar.value;

        // Make a GET request to the query endpoint
        fetch("http://localhost:8080/api/query?query=" + searchQuery)
            .then(function(response) {
                return response.json();
            })
            .then(function(recipes) {
                // Clear the recipe div
                recipeDiv.innerHTML = ""
                // Display the recipes in the recipe div
                for (var i = 0; i < recipes.length; i++) {
                    recipeDiv.innerHTML += "<div class='recipe-box'><h2 class='recipe-name'>" + recipes[i].recipeName + "</h2>" +
                    "<p class='recipe-ingredients'><b>Ingredients:</b> " + recipes[i].ingredients + "</p>" +
                    "<p class='recipe-steps'><b>Steps:</b> " + recipes[i].recipeSteps + "</p></div>";
                break;  }
                  
            })
                .catch(function(error) {
                console.log(error);
                });
                });
                searchBar.addEventListener("keyup", function(event) {
                    event.preventDefault();
            
                    // Get the search query
                    var searchQuery = searchBar.value;
                    if(searchQuery.length > 0 ){
            
                    // Make a GET request to the query endpoint
                    fetch("http://localhost:8080/api/query?query=" + searchQuery)
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(recipes) {
                            // Clear the recipe div
                            recipeDiv.innerHTML = ""
                            // Display the recipes in the recipe div
                            for (var i = 0; i < recipes.length; i++) {
                                recipeDiv.innerHTML += "<div class='recipe-box'><h2 class='recipe-name'>" + recipes[i].recipeName + "</h2>" +
                                "<p class='recipe-ingredients'><b>Ingredients:</b> " + recipes[i].ingredients + "</p>" +
                                "<p class='recipe-steps'><b>Steps:</b> " + recipes[i].recipeSteps + "</p></div>";
                            break;  }
                              
                        })
                            .catch(function(error) {
                            console.log(error);
                            });
                        }else{
                            recipeDiv.innerHTML = "";
                        }
                            });
                        
    
                

            

    // Add event listener to the surprise me button
surpriseMeButton.addEventListener("click", function() {
    // Make a GET request to the random endpoint

    fetch("http://localhost:8080/api/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(recipe) {
            // Clear the recipe div
            recipeDiv.innerHTML = "";

            // Display the recipe in the recipe div
            recipeDiv.innerHTML += "<div class='recipe-box'><h2 class='recipe-name'>" + recipe.recipeName + "</h2>" +
            "<p class='recipe-ingredients'><b>Ingredients:</b> " + recipe.ingredients + "</p>" +
            "<p class='recipe-steps'><b>Steps:</b> " + recipe.recipeSteps + "</p></div>";
        })
        .catch(function(error) {
            console.log(error);
        });
});

