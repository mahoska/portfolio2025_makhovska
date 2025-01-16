import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
  selected={} // for storing answers
  isSubmitted = false; // use to show the result
  correctAnswers = 0; //to show the number of correct answers

  myQuestions = [
    {
      id:"Question1",
      question:"Which feature of the Einstain Trust Layer utilizes system policies in Prompt Builder to defind against jailbreaking and prompt injection attacks?",
       answers:{
        a:"Promt Defense",
        b:"Data Masking",
        c:"Dynamic Grounding"
       },
       correctAnswer:"a"
    },
    {
      id:"Question2",
      question:"Cosmic Elecctronics wants to ensure that AI-generated responses do not contain any harmful or inappropriate content. Which feature of the Einstain Trust Layer can help the company achieve this objective?",
       answers:{
        a:"Toxicity Detection",
        b:"Data Demasking",
        c:"Zero Data Retention"
       },
       correctAnswer:"a"
    },
    {
      id:"Question3",
      question:"Cosmic Software Solutions is setting up the Einstain Trust Layer to align with its policies and requirements. Which feature of the Einstain Trust Layer can help the company prevent sensitive data from being exposed to large language models(LLMs)?",
       answers:{
        a:"Prompt Defense",
        b:"Audit Trail",
        c:"Data Masking"
       },
       correctAnswer:"c"
    }
  ];

  //used for disabling the sumbmit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

  //changeHandler get's called on every click on the options
  changeHandler(event){
    let {name, value} = event.target;
    this.selected ={...this.selected, [name]:value};
  }

  //form submit handler
  submitHandler(event){
    event.preventDefault();
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
  }

  //form reset handler
  resetHandler(){
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}