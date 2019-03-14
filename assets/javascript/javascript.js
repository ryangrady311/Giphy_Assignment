

    var userInputValue = "";
    var buttonText = "";
    var apiKey = "CzlzW5nF8zAC51ZwLMJ0UU2C3nUXBAJF";
    var searchTerm = "";

    // When the submit button is clicked

    $("#submit-button").click(function () {

      userInputValue = $("#userInputBox").val();
      console.log(userInputValue);

      $("#buttonsDiv").append("<button type='button' class='btn btn-info btn-gif'>" + userInputValue + "</button>");



    });

    //When the enter button is pressed

    $(document).ready(function () {
      $(window).keydown(function (event) {
        if (event.keyCode == 13) {
          event.preventDefault();

          userInputValue = $("#userInputBox").val();
          console.log(userInputValue);

          $("#buttonsDiv").append("<button type='button' class='btn btn-info btn-gif'>" + userInputValue + "</button>");


          return false;
        }
      });
    });

//On click for all divs including newly created divs

    $(document.body).on("click",".btn-gif", function(event) {

      buttonText = $(this).text();

      console.log(buttonText);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q="+buttonText+"&api_key=CzlzW5nF8zAC51ZwLMJ0UU2C3nUXBAJF";

        console.log(queryURL);

        $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After the data comes back from the API
        .then(function(response) {
          // Storing an array of results in the results variable
          
          for (var i=0;i<12;i++){
          
          var results = response.data[i].images.fixed_width.url;

          
          var gifRating = response.data[i].rating;
         
         var upperGifRating = gifRating.toUpperCase();

          console.log(upperGifRating);
          



          $("#giphyDiv").prepend("<figure> <img src="+results+" alt='Random Gif' style='width:170px;height:170px;' class='ryansGifs'></img> <figcaption>Gif Rating: "+upperGifRating+"</figcaption> </figure>");

        }
        
        });  
      
      


    });