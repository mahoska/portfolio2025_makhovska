import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';
export default class MemoryGameLwc extends LightningElement {

  isLibLoaded = false;
  openCards = [];
  moves = 0;
  matchedCard = [];
  totalTime = '00:00';
  timerRef;
  showCongratulation = false;
  cards=[
    {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
    {id:2, listClass:"card", type:'plane',icon:'fa fa-paper-plane-o'},
    {id:3, listClass:"card", type:'anchor',icon:'fa fa-anchor'},
    {id:4, listClass:"card", type:'bolt',icon:'fa fa-bolt'},
    {id:5, listClass:"card", type:'cube',icon:'fa fa-cube'},
    {id:6, listClass:"card", type:'anchor',icon:'fa fa-anchor'},
    {id:7, listClass:"card", type:'leaf',icon:'fa fa-leaf'},
    {id:8, listClass:"card", type:'bicycle',icon:'fa fa-bicycle'},
    {id:9, listClass:"card", type:'bomb',icon:'fa fa-bomb'},
    {id:10, listClass:"card", type:'bolt',icon:'fa fa-bolt'},
    {id:11, listClass:"card", type:'bicycle',icon:'fa fa-bicycle'},
    {id:12, listClass:"card", type:'plane',icon:'fa fa-paper-plane-o'},
    {id:13, listClass:"card", type:'cube',icon:'fa fa-cube'},
    {id:14, listClass:"card", type:'leaf',icon:'fa fa-leaf'},
    {id:15, listClass:"card", type:'diamond',icon:'fa fa-diamond'},
    {id:16, listClass:"card", type:'bomb',icon:'fa fa-bomb'},
  ]

  get gameRating(){
    let stars =  this.moves < 12 ? [1,2,3]: this.moves >= 13 ? [1,2] : [1];
    return this.matchedCard.length ===16 ? stars : [];
  }

  displayCard(event){
    let currentCard = event.target;
    currentCard.classList.add("open", "show", "disabled");
    this.openCards = this.openCards.concat(event.target);
    const len = this.openCards.length;
    if(len == 2){
      this.moves = this.moves + 1;
      if(this.moves ===1){
        this.timer();
      }
      if(this.openCards[0].type == this.openCards[1].type){
        this.matchedCard = this.matchedCard.concat(this.openCards[0], this.openCards[1]);
        this.matched();
      }else{
        this.unmatched();
      }
    }
  }

  matched(){
    this.openCards[0].classList.add("match", "disabled");
    this.openCards[1].classList.add("match", "disabled");
    this.openCards[0].classList.remove("show", "open");
    this.openCards[1].classList.remove("show", "open");
    this.openCards = [];

    if(this.matchedCard.length === 16){
      window.clearInterval(this.timerRef);
      this.showCongratulation = true;
    }
  }

  unmatched(){
    this.openCards[0].classList.add("unmatch");
    this.openCards[1].classList.add("unmatch");
    this.action('DISABLE');
    setTimeout(()=>{
      this.openCards[0].classList.remove("show", "open", "unmatch");
      this.openCards[1].classList.remove("show", "open", "unmatch");
      this.action('ENABLE');
      this.openCards = [];
    },1100);
  }

  action(action){
    let cards = this.template.querySelectorAll('.card');
    Array.from(cards).forEach(item=>{
      if(action == 'ENABLE'){
        let isMatch = item.classList.contains('match');
        if(!isMatch){
          item.classList.remove("disabled");
        }
      }
      if(action == 'DISABLE'){
        item.classList.add("disabled");
      }
    })
  }

   timer(){
      let startTime = new Date();
      this.timerRef = setInterval(()=>{
        let diff = new Date().getTime() - startTime.getTime();
        let d = Math.floor(diff/1000);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);
        let mDisplay = m>0 ? m+(m===1 ? m+"minute, " : "minutes, ") : "";
        let sDisplay = s>0 ? s+(s===1 ? m+"second" : "seconds") : "";
        this.totalTime = mDisplay + sDisplay;
      },1000)
    }

  shuffle(){
    this.showCongratulation = false;
    this.openCards = [];
    this.matchedCard = [];
    this.moves = 0;
    this.totalTime = '00:00';
    window.clearInterval(this.timerRef);
    let elem = this.template.querySelectorAll('.card');
    Array.from(elem).forEach(item=>{
      item.classList.remove("show", "open", "match", "disable");
    })

    //shaffling and swaping logic
    let arr = [...this.cards];
    let counter = arr.length;
    while(counter>0){
      let index = Math.floor(Math.random()*counter);
      counter--;
      let temp = arr[counter];
      arr[counter]=arr[index];
      arr[index]=temp;
    }
    this.cards = [...arr];

  }

  renderedCallback(){
    if(this.isLibLoaded){
      return;
    }else{
      loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css' ).then(()=>{
        console.log("load successfully");
        this.isLibLoaded = true;
      }).catch(error=>{
        console.log(error);
      })
    }
  }
}