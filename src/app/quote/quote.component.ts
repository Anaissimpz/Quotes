import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes= [
      new Quote(1, 'Love is Blind.','Created by', "B.William",''),
      new Quote(2, 'We need much less than we think we need.', 'Created by', "Maya Angelou",''),
      new Quote(3, 'Creativity is contagious, pass it on', 'Created by',"Albert Einstein",''),
      new Quote(4, 'Happy girls are the prettiest girls', 'Created by',"H.Audrey",''),
      new Quote(5, 'Live as though life was created for you', 'Created by',"Maya Angelou",''),
  ];
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
        
        if(toDelete){
            this.quotes.splice(index,1)
        }}}
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.unshift(quote)
  
  }



DeleteQuote(isComplete, index){
  if (isComplete){
      this.quotes.splice(index, 1);
      }
    }
  ngOnInit() {
  }

}

