const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('api worwks');
});

app.post('/test', (req,res) => {
    const { name, email} = req.body;
    if (!name && !email) {
        res.send({ success: false, message: 'Данные введены некоректно' });
        return;
    }
    console.log('hellllo');

    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "pankrakow", // generated ethereal user
            pass: "123456781" // generated ethereal password
        }
    });

    transporter.sendMail({
        from: 'pankrakow@yandex.ru', // sender address
        to: "pankrakow@yandex.by", // list of receivers
        subject: "Новый лид", // Subject line
        html: `
            <ul>
                <li><b>Name:</b> ${name}</li>
                <li><b>Email:</b> ${email}</li>
            </ul>
        `,
    }).then(() => {
        console.log("Email was sent");
    });

    res.send({ success: true });
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
