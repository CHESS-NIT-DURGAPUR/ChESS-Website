const mongoose=require('mongoose')
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;

const newsSchema=mongoose.Schema({
    month:{
      type:String,
      required:true
    },
    date:{
        type:String,
        required:true
      },
    author:{
        type:String
    },
    subject:{
     type:Array,
     default:[],
     required:true
    },
    link:{
        type:String,
    }
    

},{timestamps:true})


const News=mongoose.model('News',newsSchema)


module.exports={News}