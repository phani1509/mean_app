var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); 
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose      = require('mongoose');
   var config = require('./config');
	
mongoose.connect(config.mongoUri);


var ProductSchema = new mongoose.Schema({
     pName : String,
  tName : String,
  date1 : Date,
  date2 : Date,
  phase : String
});
var ProductModel = mongoose.model('Product', ProductSchema);

var UserSchema = new mongoose.Schema({
    /*username: String,*/
    fName: String,
    tName: String,
    number: Number,
    username: String,
    password: String,
    roles: [String]
});

var UserModel = mongoose.model('UserModel', UserSchema);

 
 /*var product1={pName:'Crizalk',tName:'Onco',date1:'12/12/2012',date2:'12/12/2012',phase:'ideation'}
 
 ProductModel.create(product1,function(err,doc){
 console.log(doc);
 
 }); */
 /* ProductModel.find(function(err,doc){
 
 for(var d in doc)
 console.log(doc[d].pName);
 
 });*/
 
 /*ProductModel.findOne({_id:"554df375b1128f2c197351d9"},function(err,doc){
 
 console.log(doc.pName);
 
 });*/
 /*ProductModel.remove({_id:"554df375b1128f2c197351d9"},function(err,count){
 
 console.log(count);
 
 });*/
 /*ProductModel.update({_id:"554df5b52788e0b41efb20ab"},{ $set:{pName:"Vfend"}},function(err,doc){ 
 console.log(doc);
 
 });*/

app.use(bodyParser());
app.use(multer());
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());



app.use('/js', express.static(__dirname + '/client/js'));
app.use('/images', express.static(__dirname + '/client/images'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use(express.static(__dirname + '/client/views'));
//USER CRUD


//var users =
//[
//    {username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonderland', roles: ['admin', 'student', 'instructor']},
//    {username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', roles: ['student']},
//    {username: 'charlie', password: 'charlie', firstName: 'Charlie', lastName: 'Brown', roles: ['instructor']}
//];

passport.use(new LocalStrategy(
function(username, password, done)
{
//    for(var u in users)
//    {
//        if(username == users[u].username && password == users[u].password)
//        {
//            return done(null, users[u]);
//        }
//    }
    UserModel.findOne({username: username, password: password}, function(err, user)
    {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    })
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.post("/login", passport.authenticate('local'), function(req, res){
    var user = req.user;
    console.log(user);
    res.json(user);
});

app.get('/loggedin', function(req, res)
{
    res.send(req.isAuthenticated() ? req.user : '0');
});
    
app.post('/logout', function(req, res)
{
    req.logOut();
    res.send(200);
});     

app.post('/register', function(req, res)
{
    var newUser = req.body;
    newUser.roles = ['manager'];
    UserModel.findOne({username: newUser.username}, function(err, user)
    {
        if(err) { return next(err); }
        if(user)
        {
            res.json(null);
            return;
        }
        var newUser = new UserModel(req.body);
        newUser.save(function(err, user)
        {
            req.login(user, function(err)
            {
                if(err) { return next(err); }
                res.json(user);
            });
        });
    });
});

var auth = function(req, res, next)
{
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};

app.get("/rest/user", auth, function(req, res)
{
    UserModel.find(function(err, users)
    {
        res.json(users);
    });
});

app.delete("/rest/user/:id", auth, function(req, res){
    UserModel.findById(req.params.id, function(err, user){
        user.remove(function(err, count){
            UserModel.find(function(err, users){
                res.json(users);
            });
        });
    });
});

app.put("/rest/user/:id", auth, function(req, res){
    UserModel.findById(req.params.id, function(err, user){
        user.update(req.body, function(err, count){
            UserModel.find(function(err, users){
                res.json(users);
            });
        });
    });
});

app.post("/rest/user", auth, function(req, res){
    UserModel.findOne({username: req.body.username}, function(err, user) {
        if(user == null)
        {
            user = new UserModel(req.body);
            user.save(function(err, user){
                UserModel.find(function(err, users){
                    res.json(users);
                });
            });
        }
        else
        {
            UserModel.find(function(err, users){
                res.json(users);
            });
        }
    });
});


//*PRODUCT CRUD

app.get('/products/:tName', function (req, res) {
var tName=req.params.tName;
   console.log('called server  get');
  ProductModel.find({tName:tName},function(err, result) {
    res.json(result);
	 console.log(result);
  });
});
/*app.get('/products/:param', function (req, res) {
var param=req.params.param;
ProductModel.find({tName:param},function(err,doc){
 res.json(doc);
 console.log(doc.pName);
 
 });
});*/

app.post('/products', function (req, res) {
var product1=req.body;
  ProductModel.create(product1,function(err,doc){
 console.log(doc);
 res.json(doc);
 });
});

app.put('/products/:id', function (req, res) {
var id=req.params.id;
var product1=req.body;
delete req.body._id;
 ProductModel.update({_id:id},{$set:product1},function(err,doc){ 
 console.log(doc);
 res.json(doc);
 });
});
/*app.get('/products/:id', function (req, res) {
var id=req.params.id;

console.log(id);
  ProductModel.findOne({_id:id},function(err,doc){
 console.log(err);
 console.log(doc);
 res.json(doc);
 
 });
});*/
app.delete('/products/:id', function (req, res) {
var id=req.params.id;

console.log(id);
  ProductModel.remove({_id:id},function(err,count){
 
 console.log(count);

 });
 });


require('./app/routes')(app); // pass our application into our routes*/
app.listen(3000, function() {
  console.log('I\'m Listening...');
})