var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();

fs = require('fs');

app.use('/',express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function(req,res){
    res.writeHead(302,{
        'Location' : 'homepage.html'
    });
    res.end();
})
app.get('/addCard', function(req, res){
    console.log('reading');
    var toAdd;
    var type = req.query['type'];
    switch(type){
        case 'countDown':
            toAdd='{"type":"countdown","cssId":"'+req.query['cssid']+'","title":"'+req.query['title']+'","repeatCycle":"'+req.query['repeat']+'","date":[';
            if(req.query['year']==undefined) {
                toAdd += '0';
            }else {
                toAdd += req.query['year'];
            }
            toAdd+=',';
            if(req.query['month']==undefined){
                toAdd +='0';
            }else{
                toAdd += req.query['month'];
            }
            toAdd+=',';
            if(req.query['day']==undefined){
                toAdd +='0';
            }else{
                toAdd += req.query['day'];
            }
            toAdd+=',';
            if(req.query['hour']==undefined){
                toAdd +='0';
            }else{
                toAdd += req.query['hour'];
            }
            toAdd+=',';
            if(req.query['minute']==undefined){
                toAdd +='0';
            }else{
                toAdd += req.query['minute'];
            }
            toAdd+=',';
            if(req.query['second']==undefined){
                toAdd +='0';
            }else{
                toAdd += req.query['second'];
            }
            toAdd+=']},';
            break;
        case 'currentTime':
            toAdd='{"type":"clock","cssId":"'+req.query['cssid']+'","style":"'+req.query['style']+'"},';
            break;
        case 'pictureFrame':
            toAdd='{"type":"picture","title":"'+req.query['title']+'","width":"'+req.query['width']+'","height":"'+req.query['height']+'","fileLocation":"'+req.query['file']+'","caption":"'+req.query['caption']+'"},';
            break;
        case 'videoFrame':
            toAdd='{"type":"video","title":"'+req.query['title']+'","width":"'+req.query['width']+'","height":"'+req.query['height']+'","videoUrl":"'+req.query['videourl']+'"},';
            break;
        case 'textCard':
            toAdd='{"type":"text","title":"'+req.query['title']+'","width":"'+req.query['width']+'","content":"'+req.query['text']+'"},';
            break;
        case 'weather':
            toAdd='{"type":"weather","cssId":"'+req.query['cssid']+'","title":"'+req.query['title']+'"location":"'+req.query['location']+'","units":"'+req.query['units']+'","full":{"all":';
            if(req.query['full']=='on'){
                toAdd+='true';
            } else {
                toAdd+='false';
            }
            toAdd+=',"current":';
            if(req.query['current']=='on'){
                toAdd+='true';
            } else {
                toAdd+='false';
            }
            toAdd+=',"today":';
            if(req.query['today']=='on'){
                toAdd+='true';
            } else {
                toAdd+='false';
            }
            toAdd+=',"forecast":';
            if(req.query['forecast']=='on'){
                toAdd+='true}},';
            } else {
                toAdd+='false}},';
            }
            break;
        case 'megaCard':
            toAdd='{"type":"mega","cssId":"'+req.query['cssid']+'","title":"'+req.query['title']+'","subCards":[';
            for(var i=1;i<=req.query['length'];i++){
                switch(req.query['cards'+i]){
                    case 'countDown':
                        toAdd+='{"type":"countdown","cssId":"'+req.query['cssid'+i]+'","title":"'+req.query['title'+i]+'","repeatCycle":"'+req.query['repeat'+i]+'","date":[';
                        if(req.query['year'+i]==undefined) {
                            toAdd += '0';
                        }else {
                            toAdd += req.query['year'+i];
                        }
                        toAdd+=',';
                        if(req.query['month'+i]==undefined){
                            toAdd +='0';
                        }else{
                            toAdd += req.query['month'+i];
                        }
                        toAdd+=',';
                        if(req.query['day'+i]==undefined){
                            toAdd +='0';
                        }else{
                            toAdd += req.query['day'+i];
                        }
                        toAdd+=',';
                        if(req.query['hour'+i]==undefined){
                            toAdd +='0';
                        }else{
                            toAdd += req.query['hour'+i];
                        }
                        toAdd+=',';
                        if(req.query['minute'+i]==undefined){
                            toAdd +='0';
                        }else{
                            toAdd += req.query['minute'+i];
                        }
                        toAdd+=',';
                        if(req.query['second'+i]==undefined){
                            toAdd +='0';
                        }else{
                            toAdd += req.query['second'+i];
                        }
                        toAdd+=']},';
                        break;
                    case 'currentTime':
                        toAdd+='{"type":"clock","cssId":"'+req.query['cssid'+i]+'","style":"'+req.query['style'+i]+'"},';
                        break;
                    case 'pictureFrame':
                        toAdd+='{"type":"picture","title":"'+req.query['title'+i]+'","width":"'+req.query['width'+i]+'","height":"'+req.query['height'+i]+'","fileLocation":"'+req.query['file'+i]+'","caption":"'+req.query['caption'+i]+'"},';
                        break;
                    case 'videoFrame':
                        toAdd+='{"type":"video","title":"'+req.query['title'+i]+'","width":"'+req.query['width'+i]+'","height":"'+req.query['height'+i]+'","videoUrl":"'+req.query['videourl'+i]+'"},';
                        break;
                    case 'textCard':
                        toAdd+='{"type":"text","title":"'+req.query['title'+i]+'","width":"'+req.query['width'+i]+'","content":"'+req.query['text'+i]+'"},';
                        break;
                    case 'weather':
                        toAdd+='{"type":"weather","cssId":"'+req.query['cssid'+i]+'","title":"'+req.query['title'+i]+'"location":"'+req.query['location'+i]+'","units":"'+req.query['units'+i]+'","full":{"all":';
                        if(req.query['full'+i]=='on'){
                            toAdd+='true';
                        } else {
                            toAdd+='false';
                        }
                        toAdd+=',"current":';
                        if(req.query['current'+i]=='on'){
                            toAdd+='true';
                        } else {
                            toAdd+='false';
                        }
                        toAdd+=',"today":';
                        if(req.query['today'+i]=='on'){
                            toAdd+='true';
                        } else {
                            toAdd+='false';
                        }
                        toAdd+=',"forecast":';
                        if(req.query['forecast'+i]=='on'){
                            toAdd+='true}},';
                        } else {
                            toAdd+='false}},';
                        }
                        break;
                }
            }
            toAdd+=']},';
            break;
    }
    console.log(toAdd);
    fs.readFile('setUp.js','utf8', function(err,data){
        if(err){
            return console.log(err);
        }
        var resultString='';
        for(var i=0;i<data.length-3;i++){
            resultString+=data.charAt(i);
        }
        resultString+=toAdd+']);';
        fs.writeFile('setUp.js',resultString,function(err){
            if(err){
                return console.log(err);
            }
            res.writeHead(302,{
                'Location' : 'homepage.html'
            });
            res.end();
        })
    })
});

http.createServer(app).listen(3000);