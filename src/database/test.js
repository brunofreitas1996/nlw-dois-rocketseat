const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    //inserir dados
    proffyValue = {
        name: "Bruno Freitas",
        avatar: "https://avatars0.githubusercontent.com/u/51858121?s=460&u=d5385169eeb035c578baf69f437d0e45e933ce4f&v=4",
        whatsapp: "89989989989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        //o proffy_id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //conssultar as classes de um determinado professor e trazer junto os dados ///dele
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h as 18h
    // o horario do time_from é 8h precisa ser menor ou ingual ao horario solicitado
    // o time_to precisa sem acima
    const selectClassesShedulo = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300";
    `)
    
    console.log(selectClassesShedulo)

})