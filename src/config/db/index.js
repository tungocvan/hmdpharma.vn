// https://viblo.asia/p/dua-du-lieu-len-may-voi-mongodb-atlas-aWj53L1YK6m
const mongoose = require('mongoose');
async function connect() {
    try {        
        let url = 'mongodb://localhost:27017/f8_education_dev';
        //let url = 'mongodb+srv://tungocvan1:9603597@cluster0.wym7u.gcp.mongodb.net/test';
        //let url = 'mongodb://127.0.0.1:27017/test';
        await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true
         }).then(
             () => console.log("Database connected successfully")
         );

    } catch (error) {
        console.log('connect fail !!!');
    }
}
 


module.exports = { 
            connect ,
            "facebook_key"      :     "214306215716895", //Điền App ID của bạn vào đây
            "facebook_secret"   :     "adfdf0eb6de1a2f1fabab7ef32ee1670", //Điền App Secret ở đây
            "callback_url"      :     "https://localhost:3000/auth/fb/cb",
            "googleClientID"    :      "817415232327-n7q19knm6084gs3k86ndfkf3o8fnegmf.apps.googleusercontent.com",
            "googleClientSecret" :      "OAnBl3sUL1DNNZuVBPVesvhi"
}