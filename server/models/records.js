const mongoose=require('mongoose')
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;

const recordSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    workplace:{
          type:String,
          required:true        
    },
    currentdegree:{
        type:String,
        required:true,
        trim:true
    },
    additional:{
     type:String
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log('Invalid Email')
            }
          }

    },
    academicrecords:{
        type:String,
    },
    images:{
     type:Array,
     default:[]
    },
    awards:{
        type:String
    },
    year:{
        type:String,
        required:true
    }
    

})


const Record=mongoose.model('Record',recordSchema)


module.exports={Record}