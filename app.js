let express = require('express');
let app = express();

let port='3000'


app.set('view engine', 'ejs')




app.get('/', (req, res) => {
    res.render('pages/index',{nmbr:0})
})
app.post('/change/:v',(req,res)=>{
    let nmbr=req.params.v;
    res.render('partials/elements',{nmbr:nmbr}) 
})




app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
 