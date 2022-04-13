import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [

    new Quote('Genesis', 'Shinobi Bros', 'In the begining there was terminal', 'Kaguya', new Date()),
    new Quote('Learning', 'Shinobi Bros','It is super easy to forget stuff if you do not write them down', 'Jiraiya', new Date()),
    new Quote('Life', 'Shinobi Bros', 'Just Do It', 'Kawaki', new Date())
    
  ];

//add client quote
addNewQuote(qoute: any){
  let quoteLength = this.quotes.length;
  
  this.quotes.push(qoute)
}

//toggle logic

toggleQuoteDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
} 

deleteQuote(deletedQuote, index){
  if(deletedQuote){
    let deleteMessage = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)

    if(deleteMessage){
      this.quotes.splice(index, 1);
    }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
