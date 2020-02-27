// console.log("Hello, World")

// function getTweets(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // renderTweets(this.responseText)

//         }
//     }

//     xhttp.open("GET", "http://138.123.190.149:8080/twitter/tweets")
//     xhttp.send()
// }

function renderTweets(snakeJson){
    console.log(snakeJson)
 
    let score = snakeJson.snake.body.length - 1;
    let food = snakeJson['food'];
    let body = snakeJson.snake.body;
    
    // var foodYCoor = Object.keys(snakeJson.snake.food.yCoor);
    
    console.log(score);
    console.log(food);
    console.log(body);

    const gridSquareWidth = 15;
    const gridSquareHeight = 15;
    let foodXcoor = food.xCoor * gridSquareWidth;
    let foodYcoor = food.yCoor * gridSquareHeight

    console.log(foodXcoor + ' ' + foodYcoor);
    // var feed = "<div id = 'feed'>"
    var feed = "<div class='row'>"
    feed += "<div class='column1'>" + "<label for='score' style='font-size:20px'>Score :</label>" + " " + [score] +  "</div>"
    feed += "<div class='column2'>" 
    feed += "<svg width='1000' height='1000'>" 
    feed += "<rect width='600' height='600' style='fill:white;stroke-width:4;stroke:rgb(0,0,0)' />" + "<defs>"
    feed += "<pattern id='smallGrid' width='15' height='15' patternUnits='userSpaceOnUse'>"
    feed += "<rect width='15' height='15' style='fill:white;stroke-width:1;stroke:grey'/> "
    feed += "</pattern>"
    feed += "<pattern id='food' width='15' height='15' patternUnits='userSpaceOnUse'>"
    feed += "<rect width='15' height='15' style='fill:red;stroke-width:1;stroke:grey'/>"
    feed += "</pattern>"
    feed += "<pattern id='snakeBody' width='15' height='15' patternUnits='userSpaceOnUse'>"
    feed += "<rect width='15' height='15' style='fill:black;stroke-width:1;stroke:grey'/>"
    feed += "</pattern>" + "</defs>" 
    feed += "<rect width='600' height='600' fill='url(#smallGrid)' stroke-width:4;stroke:grey/>" 
    feed += "<rect x= '" + [foodXcoor] +  "' y= '" +  [foodYcoor] +  "' width='15' height='15' fill='url(#food)' />" 

    for(let i = 0; i < body.length; i++){
        console.log(body[i].xCoor + " " + body[i].yCoor);
        feed += "<rect x= '" + [body[i].xCoor * gridSquareWidth] + "' y= '" + [body[i].yCoor * gridSquareHeight] +"' width='15' height='15' fill='url(#snakeBody)' />"
    }
    feed +=  "</svg>" + "</div>" 
    feed += "</div>" + "<br>"   

    document.getElementById('feed').innerHTML = feed


}


// getTweets()

var snakeJson = {'snake': {'direction': 'DOWN','body': [{'xCoor': 11,'yCoor': 11},{'xCoor': 11,'yCoor': 10},{'xCoor': 11,'yCoor': 9},{'xCoor': 12,'yCoor': 9},{'xCoor': 13,'yCoor': 9},{'xCoor': 13,'yCoor': 10},{"xCoor": 13,"yCoor": 11}]},'food': {'xCoor': 10,'yCoor': 17},'gamestate': 'IN_PROGRESS','boundary': {'height': 30,'width': 50}}
renderTweets(snakeJson)