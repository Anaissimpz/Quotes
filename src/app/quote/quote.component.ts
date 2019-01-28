import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
    new Quote(1,'Create a quote', 'you will have to create a new quote'),
    new Quote(2,'Upvote a quote', 'users should be able to vote a quote positively'),
    new Quote(3, 'Downvote the quote', 'users should be able to vote a quote negatively if they like the quote'),
    new Quote(4, 'Delete the quote', 'one should be able to delete a quote created'),
    new Quote(5, 'See the number of upvotes and downvotes', 'also one should be able to se the votes of the quote'),
    
]
toogleDetails(index){
  this.quotes[index].showDescription= !this.quotes[index].showDescription;
}
completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
  // constructor() { }
    }
  ngOnInit() {
  }

}

