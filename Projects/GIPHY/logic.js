//declare variables
var giphySearchButton = document.getElementById("search");
var animalImages = document.getElementsByTagName("img");
var animalArray = ["zebra", "dogs", "pigs", "sloth", "guinea-pig", "platypus", "kangaroo", "elephant", "chipmunk"];
var animalContainer = document.getElementById("animal-images");

var resultData = {}
//add event listener to the search button.
giphySearchButton.addEventListener("click", function () {
    $("#animal-images").empty();
    let searchReq = document.getElementById("user-input").value;
    console.log('search?', searchReq);
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=10";
    var imagesArr = [];
    //making AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        console.log("success got data", result);

        //looping through the array of results and accessing the different urls for still and moving gifs
        for (let i = 0; i < result.data.length; i++) {
            var movingImage = result.data[i].images.fixed_height.url;
            var stillImage = result.data[i].images.fixed_height_still.url;
            var imageObj = { movingImage: movingImage, stillImage: stillImage };

            var img = `<img class="giphyImages" data-searchterm="${searchReq}" id="${i}" src="${stillImage}" state="still"></img>`;
            //  console.log('img?', img)
            $("#animal-images").append(img)
            console.log("im here")
            imagesArr.push(imageObj);
            console.log(imagesArr);
        };
    });

    $('body').on('click', '.giphyImages', function (event) {
        let i = parseInt($(this).attr('id'));
        let pictureSource = $(this).attr('src');
        let pictureState = $(this).attr('state');
        let movingLink = imagesArr[i].movingImage;
        let stillLink = imagesArr[i].stillImage;
        if (pictureState == 'still') {
            event.target.setAttribute('src', imagesArr[i].movingImage);
            event.target.setAttribute('state', 'moving');
        } else if (pictureState == 'moving') {
            event.target.setAttribute('src', imagesArr[i].stillImage);
            event.target.setAttribute('state', 'still');
        }
    });

    //push the search term to the array, unless it already exists
    if (animalArray.indexOf(searchReq) === (-1)) {
        animalArray.push(searchReq);
        var btn = $('<button>');
        btn.addClass('btn-large');
        btn.attr('data-animal', searchReq);
        btn.text(searchReq);
        $("#button-holder").append(btn);
    } else {
        console.log("This button already exists.")
    };
});


// this function renders the buttons that already exists when the page loads
function renderButtons() {

    for (let i = 0; i < animalArray.length; i++) {
        var btn = $("<button>");
        btn.addClass("btn-large");
        btn.attr("data-animal", animalArray[i]);
        btn.text(animalArray[i]);
        $("#button-holder").append(btn);
    };
};
renderButtons();

$(".btn-large").click(function (event) {
    $("#animal-images").empty();
    let buttonReq = event.target.textContent;
    imagesArr2 = [];
    let searchURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=5";
    //making AJAX call
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (result) {

        for (let i = 0; i < result.data.length; i++) {
            var movingImage = result.data[i].images.fixed_height.url;
            var stillImage = result.data[i].images.fixed_height_still.url;
            var imageObj = { movingImage: movingImage, stillImage: stillImage };
            imagesArr2.push(imageObj)
            var img = `<img class="giphyImagesSet2" data-searchterm="${buttonReq}" id="${i}" src="${stillImage}" state="still"></img>`;
            $("#animal-images").append(img);
        };
        

        $('body').on('click', '.giphyImagesSet2', function (event) {
            let i = parseInt($(this).attr('id'));
            let pictureSource = $(this).attr('src');
            let pictureState = $(this).attr('state');
            let movingLink = imagesArr2[i].movingImage;
            let stillLink = imagesArr2[i].stillImage;
            console.log("CLICKING")
            if (pictureState == 'still') {
                event.target.setAttribute('src', imagesArr2[i].movingImage);
                event.target.setAttribute('state', 'moving');
            } else if (pictureState == 'moving') {
                event.target.setAttribute('src', imagesArr2[i].stillImage);
                event.target.setAttribute('state', 'still');
            }
        });
    });
});





