const Post = require('../models/post');

module.exports.home = function(req, res){
    
   // Post.find({}, function(err, posts){

    //    return res.render('home', {
   //         title: "Codeial | Home",
   //         posts: posts
  //      });
  //  });
    
    //finding use of each post
    Post.find({}).populate('user').exec(function(err, posts){

        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    })
}

// module.exports.actionName = function(req, res){}