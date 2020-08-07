const proffys = [
    { 
        name: "Bruno Freitas",
        avatar: "https://avatars0.githubusercontent.com/u/51858121?s=460&u=d5385169eeb035c578baf69f437d0e45e933ce4f&v=4",
        whatsapp: "89989989989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "João Silva",
        avatar: "https://avatars0.githubusercontent.com/u/51858121?s=460&u=d5385169eeb035c578baf69f437d0e45e933ce4f&v=4",
        whatsapp: "89989989989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "89989989989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
    
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPositon = +subjectNumber - 1
    return subjects[arrayPositon]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")

    }
    //adicionar a lista der proffys
    return res.render("give-classes.html", { subjects, weekdays})
}

const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configurar arquivos statics (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
