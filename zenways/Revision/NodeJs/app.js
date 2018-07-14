
// requiring custom module i.e. made by us only
var count = require('./count')


// setTimeout(function(){
// console.log("3 seconds have passed ");
// },3000)


// var time  = 0 ;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time , 'seconds have passed')
//     if (time>5) {
//         clearInterval(timer)
//     }
// },2000)



/*...................Function expression -------------------------------*/

//Normal Function Statement
// function sayHi(){
//     console.log("hi");
// }

// sayHi();


//Function ex[pression

// var sayBye = function(){               //this is an anonymus function assigned to variable sayBye
//     console.log("bye")
// }  

// sayBye();                     // calling anonymus function by variable sayBye




/*...................calling funtion counter which bis available in module count.js ..... we put require fuunction above from which the ocunter is imported....*/

// console.log(count.counter(['sakshi' , ' gaurav' , 'kajal' , 'arushi']));

//  console.log(count.pi)

//  console.log(count.adder(5,6))





 /*------------------------------------requiring core modules or in built modules----------------------------*/
// 1. EventEmitter
//  var events = require('events')

//  //EventEmitter is a  constructor and we are making custom event 'myEmitter' which will have properties of EventEmitter
//  var myEmitter = new events.EventEmitter();

//  // now we are saying that we the event 'someEvent' occurs we want this function to be performed
//  myEmitter.on('someEvent' , function(mssg){
//      console.log(mssg);
//  });

// //now we are emitting 'someEvent'
// myEmitter.emit('someEvent' , 'The event was emitted.');



// //2. util ==> allows inheriting certain things from objects built in node js
// var util =  require('util');

// var Person = function(name){
//     this.name =  name ;
// };

// //now using util function rather module...... inherits EventEmitter
// util.inherits(Person , events.EventEmitter)

// var James = new Person ('James');
// var mary = new Person ('mary');
// var ryu = new Person ('ryu');

// var People  =[James , mary , ryu];

// People.forEach(function(Person){
//     Person.on('speak' , function(mssg){
//         console.log(Person.name + ' said : ' + mssg )
//     })
// });

// James.emit('speak' , 'hey');
// ryu.emit('speak' , 'hey g');
// mary.emit('speak' , 'hey');



//------------------------------------------------------------------------------------------------------------------
/*..................Reading and Writing Files.........................*/
// reading and files using node core module fs

/*  // synchronous method
// 1. Reading file from readme
var fs = require('fs');

var readme = fs.readFileSync('readme.txt' , 'utf8')   //this is a method is going to be used by fs module  for reading . this is a synchronous method meaning if we had any code below this method , this is foing to read full file before going going through the code below. this is basically blocking the flow of the code

console.log(readme)


//2. writing to file 
fs.writeFileSync('writeMe.txt' , readme)
// fs.writeFileSync('writeMe.txt' , 'hello')


*/



/* Asynchronos Method
//1 . reading
var fs = require('fs');
 fs.readFile('readme.txt' , 'utf8' ,  function(err , data){
    console.log(data)
 })  ;   // as this is a asynchronous method we need a callback function to fire when the process is complete and that is the third parameter in this method --> first is err if we get any problem  and second is the data which we are going to read from file

//as this is asynchrounous it will not block the code and is going to print the test as consoled below first while it is busy in reading the file readme.txt
//console.log('test');


//2 . Writing

fs.readFile('readme.txt' , 'utf8' ,  function(err , data){
    fs.writeFile('write.txt' , data);
 })  ; 

*/


// to delete  the above file which is in the same directory we can use the same fs 
// fs.unlink('writeMe.txt);

//------------------------------------------------------------------

/*................Creating Directories.........................*/
//1. Synchronous Method

var fs =  require('fs');
//making Directory
//fs.mkdirSync('stuff');       

// removing Directory
//fs.rmdirSync('stuff');

//2. Asynchronous Method

// fs.mkdir('stuff' , function(){
//     fs.readFile('readMe.txt' , 'utf8' , (err , data) => {
//         fs.writeFile('./stuff/writeMe.txt' , data);
//     });
// });


// fs.unlink('./stuff/writeMe.txt' , function(){
//     fs.rmdir('stuff');
// }) 


//--------------------Client server------------------------------

//1. Creating a server ...........using core module http

/*..............
var http = require('http');

var server  = http.createServer((req , res)=> {       // here we created a server called server
   console.log('request was made: ' + req.url);
    res.writeHead(200 , {'Content-type' : 'Text/plain'});
    res.end('hey Sakshi');    // sending data back to the client
});

//POrt no
server.listen(3000, '127.0.0.1');

console.log('yeah!! you are listening to port 3000');

.....................*/

//................Streams............................................
/*........................
//readable streams
var fs = require('fs');  // to read a file

// to read a readable stream we need to crteate a method called createReadStream
var  myReadStream = fs.createReadStream( __dirname + '/readme.txt','utf8') ; // as we added utf8 we are going to get text
//'data; is an event in this function
myReadStream.on('data' , (chunk)=>{
    console.log('new chunk received');  //larger the file , larger the chunks will be recieved
    console.log(chunk);
})


//writable streams
var fs =  require('fs');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt','utf8');

myReadStream.on('data' , (chunk)=>{
    console.log('new chunk received');  //larger the file , larger the chunks will be recieved
   // the read data will be write on new file
    myWriteStream.write(chunk)
})
..............................*/


//............Pipes...........
/*...........
//readable stream ---> Pipes--->witable stream...(less manual work like for dates)
var fs = require('fs');
var  myReadStream = fs.createReadStream( __dirname + '/readme.txt','utf8') ;
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt','utf8');

myReadStream.pipe(myWriteStream);

// response on server using pipes
var http = require('http');
var fs =  require('fs');

var server = http.createServer((req , res) => {
    console.log('request was made :' + req.url);
    res.writeHead(200 , {'Content-Type' : 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000 , '127.0.0.1');
console.log('yeah ! you are listening to port no 3000');

.............*/


//.....Serving HTML pages

/*.....................
var http = require('http');
var fs =  require('fs');

var server = http.createServer((req , res) => {
    console.log('request was made :' + req.url);
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html' , 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000 , '127.0.0.1');
console.log('yeah ! you are listening to port no 3000');
....................*/


// Serving json to the client(no streams)
/*.......................
var http = require('http');
var fs =  require('fs');

var server = http.createServer((req , res) => {
    console.log('request was made :' + req.url);
    res.writeHead(200 , {'Content-Type' : 'application/json'});
    var myObj ={
        name : 'Sakshi',
        job : 'Developer',
        age : 20
    }
    res.end(JSON.stringify(myObj)) ;// end expect a parameter as a string or a buffer so we will use json format to strigify it
});

server.listen(3000 , '127.0.0.1');
console.log('yeah ! you are listening to port no 3000');
......................*/



//.............Basic Routing.........................
var http = require('http');
var fs = require('fs');

var server = http.createServer((req , res) =>{
    console.log('request was made' + req.url);
    if (req.url === '/home' || req.url === '/') {     // only work on localhost:3000  or localhost:3000/  or  localhost:3000/home  and will keep on loading for something else
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }

});

server.listen(3000 , '127.0.0.1');
console.log('yeah server 3000!');