


    // mycookbook.io


    // let siteURL = "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/";
    // const settings = {
	// "async": true,
	// "crossDomain": true,
	// "url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
	// "method": "POST",
	// "headers": {
	// 	"content-type": "application/xml",
	// 	"x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
	// 	"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	// },
	// "data": siteURL
    // };


    // $.ajax(settings).done(function (response) {
    //   console.log(response);

    //   localStorage.setItem("stack",JSON.stringify(response));

  //    var stack = JSON.parse(localStorage.getItem("stack"));
  //     for (var i = 0; i < stack.length; i++) {
  //       var stack = $(
  //         "<tr><td class='stack' data-stack='" +
  //         stack[i] +
  //           "'>" +
  //           stack[i] +
  //           "</td></tr>"
  //       );
  //       $("#stack").append(stack);
  //     }
  // //     $(document).on("click", ".stack", function () {
  // //       var stack = $(this).data("stack");
  // //       var APIKey = "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe";
  // //       var queryURL =
  // //         "https://recipe-puppy.p.rapidapi.com/?" +
  // //         stack +
  // //         "&appid=" +
  // //         APIKey;
  // //       $.ajax({
  // //         url: queryURL,
  // //         method: "GET",
  // //       });
  // //     });
  // // });

function searchForRecipe(searchString){
let searchTerm = searchString;
let searchIngredient = "chicken";
let puppyURL = "https://recipe-puppy.p.rapidapi.com/?";
let searchName = $("#searchName");
let ingredientInput = $("#searchIngredient");
if (searchName.val().trim() !== "" && ingredientInput.val() !== ""){
     searchTerm = searchName.val().trim();
    puppyURL = puppyURL + "q=" + searchTerm;
    // searchIngredient = ingredientInput.val();
    // puppyURL = puppyURL + "&i=" + searchIngredient;
    }
    else if (searchName.val().trim() !== ""){ 
        searchName = $("#searchName");
        searchTerm = searchName.val().trim();
    puppyURL = puppyURL +  "q=" + searchTerm;
}
// else if (ingredientInput.val().trim() !== ""){
//     searchIngredient = ingredientInput.val();
//     puppyURL = puppyURL + "i=" + searchIngredient;}
else{
    puppyURL = puppyURL +  "q=" + searchTerm;
}

const puppySettings = {
    "async": true,
    "crossDomain": true,
    "url": puppyURL,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
    }
};

$.ajax(puppySettings).done(function (response) {
    console.log(JSON.parse(response));
    localStorage.setItem("searchResults", response);

});
}

// function displayResults(){
//     let savedResults = JSON.parse(localStorage.getItem("searchResults"));

//     results = savedResults.results;
//     for(var i =0; i < results.length; i++){
//     $(".card-divider").append(`<img src = ${results[i].thumbnail}>`);
//     $(".card-divider").html(results[i].title);
//     $("#thumb").attr("src",results[i].thumbnail);
//         $(".card-divider").html(results[i].title);
//     $("#link").attr("href", results[i].href);
//     $("#ing").text("Ingredients: "+ results[i].ingredients)
//     }



// $(document).ready(displayResults());


  
