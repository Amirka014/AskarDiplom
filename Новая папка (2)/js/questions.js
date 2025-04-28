const questions = [
    { question: "Мәліметтер қорын құру дегеніміз не?", options: ["A) Мәліметтерді өңдеу", "B) Мәліметтерді сақтау және ұйымдастыру", "C) Мәліметтерді тексеру", "D) Мәліметтерді өңдеуге арналған бағдарлама жасау"], answer: "B" },
    { question: "SQL дегеніміз не?", options: ["A) Мәліметтер қорын сақтау", "B) Мәліметтерді сұрау және өңдеу үшін қолданылатын тіл", "C) Мәліметтер қорының қауіпсіздігін қамтамасыз ету", "D) Мәліметтер қорын қорғау"], answer: "B" },
    { question: "Мәліметтер қорын басқару жүйесі (DBMS) дегеніміз не?", options: ["A) Мәліметтерді сақтау және қорғау жүйесі", "B) Мәліметтер қорын жасауға арналған құрал", "C) Мәліметтерді өңдеуге арналған бағдарламалар жиынтығы", "D) Мәліметтер қорының қауіпсіздігін қамтамасыз ететін жүйе"], answer: "C" },
    { question: "Реляциялық мәліметтер қорының негізі болып табылатын құрылым қандай?", options: ["A) Кестелер", "B) Графтар", "C) Файлдар", "D) Массивтер"], answer: "A" },
    { question: "PRIMARY KEY дегеніміз не?", options: ["A) Кестедегі қайталанбайтын жазбалар үшін таңдалған өріс", "B) Кестедегі негізгі сұраныс", "C) Кестедегі ең көп қолданылатын өріс", "D) Кестедегі алғашқы жазбаның идентификаторы"], answer: "A" },
    { question: "SQL-де `SELECT` операторы қандай қызмет атқарады?", options: ["A) Мәліметтер қорын құру", "B) Мәліметтерді қосу", "C) Мәліметтерді сұрау", "D) Мәліметтерді жою"], answer: "C" },
    { question: "Мәліметтер қорында қай элемент нақты жазбаны сипаттайды?", options: ["A) Кесте", "B) Жол", "C) Баған", "D) Кілт"], answer: "B" },
    { question: "Қандай SQL команда мәліметтерді жою үшін қолданылады?", options: ["A) DELETE", "B) DROP", "C) ALTER", "D) UPDATE"], answer: "A" },
    { question: "Егер мәліметтер қорының мәліметтеріне өзгерістер енгізу қажет болса, қандай SQL командасы қолданылады?", options: ["A) SELECT", "B) INSERT", "C) UPDATE", "D) DELETE"], answer: "C" },
    { question: "Мәліметтер қорында шектеулерді тексеру үшін қандай құрал қолданылады?", options: ["A) Trigger", "B) View", "C) Index", "D) Foreign Key"], answer: "A" },
    { question: "Мәліметтер қорын жаңарту кезінде қайсысы қажет?", options: ["A) Тек INSERT командасын қолдану", "B) Тек DELETE командасын қолдану", "C) Тек SELECT командасын қолдану", "D) Тек UPDATE командасын қолдану"], answer: "D" },
    { question: "Егер екі кесте арасында байланыс болса, оны қалай белгілейміз?", options: ["A) PRIMARY KEY", "B) FOREIGN KEY", "C) UNIQUE", "D) INDEX"], answer: "B" },
    { question: "Қайсысы мәліметтер қорында индекстерді құруға арналған SQL командасы?", options: ["A) CREATE INDEX", "B) CREATE TABLE", "C) ALTER INDEX", "D) SELECT INDEX"], answer: "A" },
    { question: "SQL-де қайсысы деректерді сұрыптауды жүзеге асырады?", options: ["A) ORDER BY", "B) WHERE", "C) GROUP BY", "D) HAVING"], answer: "A" },
    { question: "INNER JOIN қай кезде қолданылады?", options: ["A) Кестелерден тек сәйкес келетін жолдарды алу", "B) Кестелерден барлық жолдарды алу", "C) Кестеден тек ерекше мәндерді алу", "D) Кестелерді біріктіру үшін"], answer: "A" },
    { question: "Мәліметтер қорының деректерінің тұрақтылығын сақтауды қамтамасыз ететін қағида қалай аталады?", options: ["A) ACID", "B) OLAP", "C) OLTP", "D) DDL"], answer: "A" },
    { question: "Қай SQL командасы мәліметтер қорының құрылымын өзгертуге мүмкіндік береді?", options: ["A) ALTER TABLE", "B) CREATE DATABASE", "C) INSERT INTO", "D) DELETE FROM"], answer: "A" },
    { question: "Мәліметтер қорында қандай операциялар кезінде ACID принциптері сақталады?", options: ["A) Мәліметтерді енгізу", "B) Мәліметтерді жаңарту", "C) Мәліметтерді жою", "D) Барлық көрсетілген операциялар"], answer: "D" },
    { question: "UNIQUE шектеуі не үшін қолданылады?", options: ["A) Кестеде қайталанатын жазбалар болмауы үшін", "B) Кестеде мәндер тек қана бір рет болуы үшін", "C) Кестеде NULL мәндер болмауы үшін", "D) Кестеде мәндер дұрыс реттелу үшін"], answer: "A" },
    { question: "Мәліметтер қорын резервтік көшіру үшін қандай әдіс қолданылады?", options: ["A) Backup", "B) Replication", "C) Synchronization", "D) Archiving"], answer: "A" },
    { question: "SQL-де қай команда барлық деректерді алып тастау үшін қолданылады?", options: ["A) DELETE", "B) DROP", "C) TRUNCATE", "D) REMOVE"], answer: "C" },
    { question: "Қайсысы мәліметтер қорындағы бағандардың аттарын өзгерту үшін SQL командасы?", options: ["A) ALTER COLUMN", "B) RENAME COLUMN", "C) MODIFY COLUMN", "D) CHANGE COLUMN"], answer: "B" },
    { question: "Кестелердің деректерінің дұрыстығын тексеру үшін қолданылатын құрал?", options: ["A) Constraints", "B) Trigger", "C) Index", "D) Views"], answer: "A" },
    { question: "Мәліметтер қорының сақталуы мен қауіпсіздігі үшін қайсысы маңызды?", options: ["A) Құпиясөздер", "B) Жүйелік администраторлар", "C) Қолданушылардың рұқсаттары", "D) Барлығы"], answer: "D" },
    { question: "Қайсысы SQL-де деректердің жинағын топтастыру үшін қолданылатын команда?", options: ["A) GROUP BY", "B) ORDER BY", "C) WHERE", "D) SELECT"], answer: "A" },
    { question: "SQL-де қай оператор мәліметтерді қосу үшін қолданылады?", options: ["A) INSERT INTO", "B) UPDATE", "C) ADD", "D) ADD INTO"], answer: "A" },
    { question: "Мәліметтер қорында өрістердің типтерін өзгертетін SQL командасы?", options: ["A) ALTER TABLE", "B) CREATE TABLE", "C) DROP COLUMN", "D) MODIFY COLUMN"], answer: "A" },
    { question: "Мәліметтер қорының қауіпсіздігін қамтамасыз ететін қағидалар жиынтығы қалай аталады?", options: ["A) DBMS", "B) SQL", "C) ACID", "D) Data Security"], answer: "C" },
    { question: "SQL-де деректерді сұраудың нәтижелерін сақтау үшін қандай элемент пайдаланылады?", options: ["A) View", "B) Table", "C) Index", "D) Trigger"], answer: "A" },
    { question: "Қандай SQL командасы мәліметтер қорындағы кестені жоюға арналған?", options: ["A) DROP TABLE", "B) DELETE TABLE", "C) REMOVE TABLE", "D) TRUNCATE TABLE"], answer: "A" },
    { question: "Бірнеше кестелерден деректерді біріктіру үшін SQL-де қандай команда пайдаланылады?", options: ["A) JOIN", "B) UNION", "C) MERGE", "D) COMBINE"], answer: "A" },
    { question: "SQL-де `WHERE` командасы не үшін қолданылады?", options: ["A) Мәліметтерді сұрыптау", "B) Мәліметтерді сүзу", "C) Мәліметтерді топтастыру", "D) Мәліметтерді қосу"], answer: "B" },
    { question: "Сұраныстарды оңтайландыру үшін қандай техника қолданылады?", options: ["A) Индекстер", "B) Views", "C) Stored Procedures", "D) Trigger"], answer: "A" },
    // Добавьте оставшиеся вопросы, исключая 6-й и 8-й
];

function displayQuestion(index) {
    const question = questions[index];
    if (question) {
        console.log(question.question);
        question.options.forEach(option => {
            console.log(option);
        });
    }
}

function startQuiz() {
    for (let i = 0; i < questions.length; i++) {
        if (i === 5 || i === 7) continue;  // Пропускаем 6-й и 8-й вопросы
        displayQuestion(i);
    }
}

startQuiz();
