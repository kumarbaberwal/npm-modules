const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Auth').then(()=> console.log('Connected Successfully')).catch(()=> console.log('Error Occured'));


const user = new Schema()
// const user = new Schema({
//     username : {type: String},
//     email : {type: String},
//     password : {type: String},
// })


const modelUser = mongoose.model('users', user);

(async() => {
    try{
        var returnedData = await modelUser.find();
        console.log(returnedData);
    } catch(e){
        console.log(e);
    }
})();