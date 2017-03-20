var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
'article-one' :{
    title :'Article One | Gaurav Arora',
    heading:'Article One',
    date: 'March 20, 2017',
    content:` <p>
                    This is my first article. Content of my first article are here
                    
                </p>
                <p>
                    This is my first article. Content of my first hello hello article are here
                    
                </p>
    `
},
'article-two':{title :'Article Two | Gaurav Arora',
    heading:'Article Two',
    date: 'March 21, 2017',
    content:`<p>
                    This is my second article. Content of my first article are here
                    
                </p>
                <p>
                    This is my 2nd article. Content of my first hello hello article are here
                    
                </p>
    `},
'article-three':{title :'Article Three | Gaurav Arora',
    heading:'Article Three',
    date: 'March 22, 2017',
    content:` <p>
                    
                 Oblivion's main story revolves around the player character's efforts to thwart a fanatical cult known as the "Mythic Dawn" that plans to open the gates to a realm called "Oblivion". The game continues the open world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time and to ignore or postpone the main storyline indefinitely. A perpetual objective for players is to improve their character's skills, which are numerical representations of certain abilities. Seven skills are selected early in the game as major skills, with the remainder termed minor. Developers opted for tighter pacing in gameplay and greater plot focus than in past titles.                
                </p>
    `}
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name ="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        
        
    </html>
    
    
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res)
// articleOne ==article-one
//articles[articleName] == {} content object for article one
    {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
