const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const formidable = require('express-formidable')
const { auth } = require('./server/middleware/auth')
const cloudinary = require('cloudinary')
const { Alumni } = require("./server/models/alumni")
const { Record } = require("./server/models/records")
const { News } = require("./server/models/news")
var nodemailer = require('nodemailer');
var arr = require('./paidmembers.js').arr;
var stu = require('./students.js').stu;
var prof = require('./professors.js').prof;
var compression = require('compression');

const app = express()
require('dotenv').config();
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser());

app.use(express.static('myapp/build'))


cloudinary.config({
    cloud_name: 'da7qseuhl',
    api_key: '289797951671668',
    api_secret: 'ny7vcwk-Rc3OKwhmAYMWjfSNnkE'
})


const defaultemail = { from: 'chessnitd2020@gmail.com' }

const sendmail = (emaildata) => {
    const compemail = Object.assign(defaultemail, emaildata)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chessnitd2020@gmail.com',
            pass: 'ChemESS@1947'
        }
    });

    return transporter.sendMail(compemail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.post('/api/members/register', (req, res) => {
    console.log(arr)
    console.log(req.body.email)
    if (arr.includes(req.body.email)) {
        const member = new Alumni(req.body);
        console.log(member)
        member.save((err, doc) => {
            if (err) {
                console.log(err)
                return res.json({ success: false, err });
            }
            console.log(doc.name)

            const emaildata = {
                to: req.body.email,
                subject: 'REGISTRATION',
                text: "YOU ARE REGISTERED FOR CHESS",
                html: `<p>WELCOME,${doc.name} TO CHESS</p>`
            }

            sendmail(emaildata)

            res.status(200).json({
                success: true, doc
            })
        })
    } else {
        res.json({
            message: "PLEASE PAY THE MEMBERSHIP PAYMENT FIRST",
            success: false
        })
    }
});



app.post('/api/members/sentnotifications', (req, res) => {
    console.log(prof)
    if (req.body.argum == 1) {
        prof.forEach(email => {

            const emaildata = {
                to: email,
                subject: req.body.subject,
                text: req.body.subject,

                html: `<p style="text-align:left !important" >
                 Respected Sir/Ma'am,
                <br/>
                <br/>
                 Hope you are safe and doing well during this tough time of the year. We, the Chemical Engineering Students Society (ChESS) would like to invite you to attend the Online Farewell event named "Ascension" for our Final Year BTech, MTech and PhD Seniors.
                 <br/>
                 <br/>
                 They have been your diligent students, our respected
                 seniors and a vibrant, ambitious batch, the pride of the department. Our B.Tech fourth year seniors, M.Tech final years and a number of PhD scholars are towards the end of their college life, ready to face greater challenges and have newer endeavours.  As this signifies a new beginning in their lives, we have named the farewell program “Ascension". It is unfortunate that the ongoing pandemic has forced us to conduct in a virtual or online mode, but our enthusiasm about giving a befitting tribute to our seniors has not even withered a bit. 
                 <br/>
                 <br/>
                 Yes, you have been their guide over the years and it’s your encouragement and motivation that they need as they bid us adieu. We, the members of the  Chemical Engineering Students' society, would like you to be present in the occasion and witness our seniors' walk down the memory lane, of which even you have been a part. Please be there on Sunday, the 5th of July, at 6PM on MS Teams to make this event a grand success. 
                 <br/>
                 <br/>
                 The Invitation Card is attached herewith the mail. Please find the attachment.
                 <br/>
                 <br/>
                 The link is : 
                 https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjRjMGVkZGMtMGRmNC00OThmLTlhMDAtMDMxNWEyMmNmNjgy%40thread.v2/0?context=%7b%22Tid%22%3a%22a58978f7-efcb-4b53-bd81-8361fa13fa5c%22%2c%22Oid%22%3a%228f18636e-311d-4091-97fd-2126709cc7a6%22%7d
                 <br/>
                 <br/>
                 Thanking You in anticipation,
                 <br/>
                 <br/>
                 Yours sincerely,<br/>
                 Team ChESS.<br/>
                 </p></br><img src='cid:logo' style="width:800px; height:800px" alt='pic'/><br/>`,
                attachments: [
                    {
                        filename: 'chess',
                        path: req.body.imageurl[0].url,
                        cid: 'logo'
                    }
                ],
            }

            sendmail(emaildata)

        })
    } else {
        stu.forEach(email => {

            const emaildata = {
                to: email,
                subject: req.body.subject,
                text: req.body.subject,

                html: `<p style="text-align:left !important" >
             Respected Sir/Ma'am,
            <br/>
            <br/>
             Hope you are safe and doing well during this tough time of the year. We, the Chemical Engineering Students Society (ChESS) would like to invite you to attend the Online Farewell event named "Ascension" for our Final Year BTech, MTech and PhD Seniors.
             <br/>
             <br/>
             They have been your diligent students, our respected
             seniors and a vibrant, ambitious batch, the pride of the department. Our B.Tech fourth year seniors, M.Tech final years and a number of PhD scholars are towards the end of their college life, ready to face greater challenges and have newer endeavours.  As this signifies a new beginning in their lives, we have named the farewell program “Ascension". It is unfortunate that the ongoing pandemic has forced us to conduct in a virtual or online mode, but our enthusiasm about giving a befitting tribute to our seniors has not even withered a bit. 
             <br/>
             <br/>
             Yes, you have been their guide over the years and it’s your encouragement and motivation that they need as they bid us adieu. We, the members of the  Chemical Engineering Students' society, would like you to be present in the occasion and witness our seniors' walk down the memory lane, of which even you have been a part. Please be there on Sunday, the 5th of July, at 6PM on MS Teams to make this event a grand success. 
             <br/>
             <br/>
             The Invitation Card is attached herewith the mail. Please find the attachment.
             <br/>
             <br/>
             The link is : 
             https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjRjMGVkZGMtMGRmNC00OThmLTlhMDAtMDMxNWEyMmNmNjgy%40thread.v2/0?context=%7b%22Tid%22%3a%22a58978f7-efcb-4b53-bd81-8361fa13fa5c%22%2c%22Oid%22%3a%228f18636e-311d-4091-97fd-2126709cc7a6%22%7d
             <br/>
             <br/>
             Thanking You in anticipation,
             <br/>
             <br/>
             Yours sincerely,<br/>
             Team ChESS.<br/>
             </p></br><img src='cid:logo' style="width:800px; height:800px" alt='vb'/><br/>`,
                attachments: [
                    {
                        filename: 'chess',
                        path: req.body.imageurl[0].url,
                        cid: 'logo'
                    }
                ],
            }

            sendmail(emaildata)

        })
    }
    res.status(200).json({
        success: true
    })

});


app.post('/api/members/alumnienter', (req, res) => {

    const emaildata = {
        to: "chessnitd2020@gmail.com",
        subject: 'ALUMNIENTER',
        text: "ALUMNI WANTS TO ENTER",
        html: `<p>${req.body.name} WANTS ACCESS TO  CHESS WEBSITE. HIS EMAIL IS ${req.body.email}</p>`
    }

    sendmail(emaildata)

    res.status(200).json({
        success: true
    })
})


app.post('/api/members/forgetpassword', (req, res) => {
    Alumni.findOne({ 'email': req.body.email }, (err, member) => {
        if (!member) {
            res.status(400).json({
                loginSuccess: false,
                message: 'Unable to Login'
            })
        }
        console.log(member.password)
        var token = "foslkkkkkkkkkkrgsllllllllllllsdejhgehaot" + member.password;
        console.log(token)
        const emaildata = {
            to: req.body.email,
            subject: 'Password reset',
            text: "Please follow the informations to reset your password:http://chessnitdgp.herokuapp.com/resetpass?token=${token}",
            html: `<p>Please click the following link</p><p>http://chessnitdgp.herokuapp.com/resetpass?token=${token}</p>`
        }
        Alumni.update({ email: req.body.email }, { $set: { resetpasslink: token } }, function (err, member) {
            if (err) return res.send(err)
            else
                sendmail(emaildata)
            res.status(200).json({ message: "email has been sent" })
        })
    })
});


app.post('/api/members/forgetpass', (req, res) => {

    console.log(req.body.data.password)
    Alumni.findOne({ 'resetpasslink': req.body.reset.token }, (err, member) => {
        if (!member) {
            res.status(400).json({
                loginSuccess: false,
                message: 'Unable to Login'
            })
        }
        console.log(member)
        member.password = req.body.data.password
        console.log(member)
        const emaildata = {
            to: member.email,
            subject: 'Password reset',
            text: "Reset Successful",
            html: `<p>Reset Successful</p>`
        }

        member.save((err, doc) => {
            if (err) {
                console.log(err)
                return res.json({ success: false, err });
            }
            console.log(doc)

            sendmail(emaildata)
            res.status(200).json({ success: true, message: "Reset done" })
        })




    })

})

app.get('/api/members/logout', auth, (req, res) => {
    console.log(req.user._id)
    Alumni.findOneAndUpdate(
        { _id: req.user._id },
        { token: '' },
        (err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            })
        }
    )
})





app.post('/api/members/login', (req, res) => {
    Alumni.findOne({ 'email': req.body.email }, (err, member) => {
        if (!member) {
            return res.json({
                loginSuccess: false,
                message: 'Unable to Login'
            })
        }
        member.comparepassword(req.body.password, (err, match) => {
            if (!match) {
                return res.json({
                    loginSuccess: false,
                    message: 'Unable to Login'
                })
            }

            member.generateToken((err, member) => {
                if (err) return res.send(err);
                res.cookie('w_auth', member.token).status(200).json({
                    loginSuccess: true,
                    member: member
                })
            })
        })


    })
})


app.get('/api/records/allalum', auth, (req, res) => {
    console.log('hhhh')
    Record
        .find()
        .exec((err, allalum) => {
            if (err) {
                console.log(err)
                res.status(400).send(err)

            }
            return res.status(200).send(allalum)
        })
})

app.get('/api/records/allnews', (req, res) => {
    console.log('hhhh')
    News
        .find()
        .exec((err, allnews) => {
            if (err) {
                console.log(err)
                res.status(400).send(err)

            }
            return res.status(200).send(allnews)
        })
})


app.post('/api/records/searchyr', auth, (req, res) => {
    console.log(req.body)
    Record.find({
        $or: [
            { "year": req.body.year }, { "name": req.body.year }, { "workplace": req.body.year }
        ]
    }, (err, result) => {

        console.log(result)
        console.log(err)
        if (err) {
            console.log(err)
            return res.status(400).send(err)
        }
        res.status(200).json({
            resyr: result
        })
    })
})

app.post('/api/records/adddetail', auth, (req, res) => {

    const record = new Record(req.body);
    record.save((err, doc) => {
        console.log(err)
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true, doc
        })
        console.log(doc.name)
    })
})


app.post('/api/records/addnews', auth, (req, res) => {

    const news = new News(req.body);
    news.save((err, doc) => {
        console.log(err)
        if (err) return res.json({ success: false, err });
        res.status(200).json({
            success: true, doc
        })
        console.log(doc.name)
    })
})

app.post('/api/records/records', auth, (req, res) => {
    Alumni.findOne({
        '_id': req.user._id
    }).then(response => {
        console.log(response.email)
        Record.findOne({ 'email': response.email }, (err, record) => {
            if (!record) {
                res.status(400).json({
                    loginSuccess: false,
                    message: 'Unable to Add Your Record'
                })
            } else {
                console.log("hfffffh")
                console.log(req.body)
                record.awards.push(req.body)
                record.save((err, doc) => {
                    if (err) return res.json({ success: false, err });

                    res.send(doc.name)

                })
            }
        })

    })
})


app.post('/api/records/education', auth, (req, res) => {
    Alumni.findOne({
        '_id': req.user._id
    }).then(response => {
        console.log(response.email)
        Record.findOne({ 'email': response.email }, (err, record) => {
            if (!record) {
                res.status(400).json({
                    loginSuccess: false,
                    message: 'Unable to Add Your Record'
                })
            } else {
                console.log("hfffffh")
                console.log(req.body)
                console.log(req.body)
                record.academicrecords.push(req.body)
                record.save((err, doc) => {
                    if (err) return res.json({ success: false, err });

                    res.send(doc.name)

                })
            }
        })

    })
})

app.post('/api/records/removerecord', auth, (req, res) => {
    Record.findByIdAndRemove({ 'email': req.body.email }, (err, member) => {
        if (!member) {
            res.status(400).json({
                loginSuccess: false,
                message: 'Unable to Add Your Details'
            })
        }
    })
})

app.get('/api/records/getrecords', auth, (req, res) => {
    Alumni.findOne({
        '_id': req.user._id
    }).then(response => {
        console.log(response.email)
        Record
            .findOne({ 'email': response.email }).
            then((record) => {
                console.log(record)
                res.send(record)
            }).catch(err => {
                res.send(err)
            })
    }).catch(err => {
        console.log(err)
    })
})


app.get('/api/members/removeimage', auth, (req, res) => {
    let image_id = req.query.public_id
    cloudinary.uploader.destroy(image_id, (error, result) => {
        if (error) return res.json({ success: false, error })
        res.status(200).send('ok')
    })
})
app.get('/api/members/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
    })
})

app.post('/api/members/uploadimage', auth, formidable(), (req, res) => {
    cloudinary.uploader.upload(req.files.file.path, (result) => {
        res.status(200).send({
            public_id: result.public_id,
            url: result.url
        })
    }, {
        public_id: `${Date.now()}`,
        resource_type: 'auto'
    })
})

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendfile(path.resolve(__dirname, './myapp', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})

