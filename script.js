let bank = new Map();
let correctAns = new Map();

function seedBankMap() {
    bank.set(
        "vb",{
            questions : [['What is the Bit Stream for section a?','100','./assets/a.png','abc'],
                ['What is the Bit Stream for section b?','010','./assets/b.png','abc'],
                ['What is the Bit Stream for section c?','001','./assets/c.png','abc'],
                ['What is the Bit Stream for section d?','110','./assets/d.png','abc'],
                ['What is the Bit Stream for section e?','101','./assets/e.png','abc'],
                ['What is the Bit Stream for section f?','011','./assets/f.png','abc'],
                ['What is the Bit Stream for section g?','111','./assets/g.png','abc'],
                ['What is the Bit Stream for section h?','000','./assets/h.png','abc']],
            type: "string"})
    console.log(bank.get("vb"));
}
seedBankMap();
let questions = [];
function main(){

    let selection = getSelection();
    let numberOfQuestions = document.getElementById("numQuestions").value;
    questions = genQuestions(selection,numberOfQuestions);
    let questionHtml = formHtml(questions);
    appendQuestions(questionHtml);


}

function genQuestions(selection,numberOfQuestions){
    console.log(selection)
    let questions = []
    selection.forEach((para)=>{
        for(let i =0; i<(Number(numberOfQuestions)/selection.length);i++) {

            let currentBank = bank.get(para).questions;
            let randomInd = Math.floor(Math.random()*currentBank.length)
            questions.push([bank.get(para).questions[randomInd],para])
            currentBank.splice(randomInd,1);

        }
        }
    )
    console.log(questions);
    return questions;
}

function formHtml(questionData){
    // takes question data and returns html string
    let counter = 1;
    let questionHtml = "";
    questionData.forEach((question)=>{
        if(question[1] == "vb"){
             questionHtml += `
    <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed accordion-color" type="button" data-bs-toggle="collapse" data-bs-target="#question${counter}" aria-expanded="false" aria-controls="question${counter}">
                    Question: ${counter} (${question[1]})
                </button>
            </h2>
            <div id="question${counter}" class="accordion-collapse collapse" >
                <div class="accordion-body">
                <p>${question[0][0]}</p>
                    <img src ="${question[0][2]}" class="vennImg">
                    
                           <div class="input-group mb-3">
                      <input id="answer${counter}" type="text" class="form-control" placeholder="Answer:" aria-label="Answer" aria-describedby="answer${counter}" >
                      <button class="btn btn-outline-secondary" type="button" id="answer${counter}Button" onclick="validateQuestion('answer${counter}',${counter-1})">Submit</button>
                       </div>
       
                   
                </div>
            </div>
        </div>`
        }
        counter++;
    })
    return questionHtml;
}
// takes html and appends to the screen
function appendQuestions(questionHtml){
    let html = `<div class="accordion" id="questionBodyAcc"> ${questionHtml}</div>`
    let target = document.getElementById("questionBody");
    target.innerHTML = html;
}



// returns selected in the modal form as ["as","a","b"]. Ignores all selections made if As was selected first.
function getSelection(){
    let selectedOptions = document.getElementsByClassName("testOptions");
    let selection = [];
    if(!selectedOptions[0].checked){
        for(let i = 1; i<selectedOptions.length;i++) {
            if (selectedOptions[i].checked) {
                selection.push(selectedOptions[i].value);
            }
        }
    }
    else{
        selection = ['vb', 'vd', 'bd', 'db', 'so', 'rn', 'ca', 'ps', 'dm', 'sb', 'ss', 'v2', 'v3']
    }
    return selection;
}

function validateQuestion(inputID,index){
// we should be able to find the value of the answer based on what num of question(index)
    let answer = document.getElementById(inputID).value;
    let corAnswer = questions[index][0][1];
    console.log(answer)
    console.log(corAnswer)
    if(answer == corAnswer){
        let questionID = `#question${index+1}`;
        console.log(questionID);
        document.getElementById(questionID).classList;
    }
}



// let vd = [
//     ['What is the Disjunctive Normal Form of section a?','An_Bn_C',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section b?','_AnBn_C',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section c?','_An_BnC',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section d?','AnBn_C',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section e?','An_BnC',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section f?','_AnBnC',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section g?','AnBnC',fig_venn3,'abc'],
//     ['What is the Disjunctive Normal Form of section h?','_An_Bn_C',fig_venn3,'abc']
// ]
//
// let bd = [
//     ['What is the Disjunctive Normal Form of 100?','An_Bn_C',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 010?','_AnBn_C',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 001?','_An_BnC',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 110?','AnBn_C',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 101?','An_BnC',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 011?','_AnBnC',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 111?','AnBnC',fig_venn3,'bit'],
//     ['What is the Disjunctive Normal Form of 000?','_An_Bn_C',fig_venn3,'dnf']
// ]


