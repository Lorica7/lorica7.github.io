
var animalImages = document.getElementsByTagName("img");
var animalArray = ["zebra", "dogs", "pigs", "sloth", "guinea-pig", "platypus", "kangaroo", "elephant", "chipmunk"];
var topButtons = document.getElementsByClassName("btn-large");
var animalContainer = $("#animal-images");


var resultData = [];
//add event listener to the search button.

$("#search").click(function () {
    $("#animal-images").empty()
    let searchReq = $("#user-input").val()
    console.log(searchReq)
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchReq + "&api_key=P1UxBlMCbh1oybrMn1pVZvc7jexNd7sE&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        console.log(queryURL)
        console.log("success got data", result);
        //if (result.data.length !== 0) {
        // state.images[searchReq] = [];

        // }
        //looping through the array of results and accessing the different urls for still and moving gifs

        for (let i = 0; i < result.data.length; i++) {
            resultData.push(result);
            var movingImage = result.data[i].images.fixed_height.url;
            var stillImage = result.data[i].images.fixed_height_still.url;
            var imageObj = { movingImage: movingImage, stillImage: stillImage };

            var img = `<img class="giphyImages" data-searchterm="${searchReq}" id="${i}" src="${stillImage}"></img>`;
            console.log('img', img)
            $("#animal-images").append(img)
            //console.log("im here")

            $("#0").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#0").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#0").attr("src", stillImage);
                }

            });

            $("#1").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#1").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#1").attr("src", stillImage);
                }

            });

            $("#2").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#2").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#2").attr("src", stillImage);
                }

            });

            $("#3").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#3").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#3").attr("src", stillImage);
                }

            });

            $("#4").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#4").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#4").attr("src", stillImage);
                }

            });

            $("#5").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#5").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#5").attr("src", stillImage);
                }

            });

            $("#6").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#6").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#6").attr("src", stillImage);
                }

            });

            $("#7").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#7").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#7").attr("src", stillImage);
                }

            });

            $("#8").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#8").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#8").attr("src", stillImage);
                }

            });

            $("#9").click(function () {
                console.log("CLICKED!!!!!")
                if (src = "${stillImage}") {
                    $("#9").attr("src", movingImage)
                } else if (src = "${movingImage}") {
                    $("#9").attr("src", stillImage);
                }

            });
        };

    });
});

