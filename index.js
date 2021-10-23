const express = require('express');
const app = express();
const port =8000;

//use express route
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('view','./views');

app.listen(port,function(err){
  if(err)
  {
    console.log('Error:',err);
  }
  else{
    console.log(`Server is running on port: ${port}`);
  }
});