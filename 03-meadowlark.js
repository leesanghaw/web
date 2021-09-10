const express = require('express')
const expresshandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const fortunes = [
    "안녕하세요 통계학과 이상화 입니다" ,
    "저는 현재 부산진구 동평로201번길30 거주 중 입니다",
    "제가 좋아하는 명언은",
    "황금보기를 돌 같이하라 와",
    "팀보다 위대한 개인은 없다 입니다."

]

// 핸들바 뷰 엔진 설정
app.engine('handlebars', expresshandlebars({
    defaultlayouts: 'main',
}))
app.set('view engine','handlebars')

app.use(express.static(__dirname + '/public'))

app.get ('/', (req, res) => res.render('home'))

app.get('/about', (req, res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})


// custom 404 page
app.use ((req,res) => {
    res.status(404)
    res.render ('404')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port}; `+
    `press Ctrl-C to terminate...`))

