function main(){
    selection = getSelection();
    console.log(selection);
    let numberOfQuestion = document.getElementById("numQuestions").value;
    console.log(numberOfQuestion)
}

function genQuestions(selection){
    questions = []
}
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
        selection.push(selectedOptions[0].value);
    }
    return selection;
}

let vb = [
    ['What is the Bit Stream for section a?','100',fig_venn3,'abc'],
    ['What is the Bit Stream for section b?','010',fig_venn3,'abc'],
    ['What is the Bit Stream for section c?','001',fig_venn3,'abc'],
    ['What is the Bit Stream for section d?','110',fig_venn3,'abc'],
    ['What is the Bit Stream for section e?','101',fig_venn3,'abc'],
    ['What is the Bit Stream for section f?','011',fig_venn3,'abc'],
    ['What is the Bit Stream for section g?','111',fig_venn3,'abc'],
    ['What is the Bit Stream for section h?','000',fig_venn3,'abc']
]

let vd = [
    ['What is the Disjunctive Normal Form of section a?','An_Bn_C',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section b?','_AnBn_C',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section c?','_An_BnC',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section d?','AnBn_C',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section e?','An_BnC',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section f?','_AnBnC',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section g?','AnBnC',fig_venn3,'abc'],
    ['What is the Disjunctive Normal Form of section h?','_An_Bn_C',fig_venn3,'abc']
]

let bd = [
    ['What is the Disjunctive Normal Form of 100?','An_Bn_C',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 010?','_AnBn_C',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 001?','_An_BnC',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 110?','AnBn_C',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 101?','An_BnC',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 011?','_AnBnC',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 111?','AnBnC',fig_venn3,'bit'],
    ['What is the Disjunctive Normal Form of 000?','_An_Bn_C',fig_venn3,'dnf']
]


