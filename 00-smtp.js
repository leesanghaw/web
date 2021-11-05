const nodemailer = require('nodemailer')

const credentials = require('./credentials')

const mailTransport = nodemailer.createTransport({
  host: 'oasis.inje.ac.kr', 
  auth: {
    user: credentials.inje.user,
    pass: credentials.inje.password,
  },
})

async function go() {
  try {
    const result = await mailTransport.sendMail({
      from: '"my server" <tkdghk@oasis.inje.ac.kr>',
      to: 'tkdghk5595@naver.com',
      subject: '11장 이메일 전송',
      text: '20181938 ' +
        '이상화 ',
    })
    console.log('mail sent successfully: ', result)
  } catch(err) {
    console.log('could not send mail: ' + err.message)
  }
}

go()