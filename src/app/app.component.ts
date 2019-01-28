import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes= [
    new Quote(1,'Create a quote', 'you will have to create a new quote', new Date(2019,1,1)),
    new Quote(2,'Upvote a quote', 'users should be able to vote a quote positively' ,new Date(2019,1,1)),
    new Quote(3, 'Downvote the quote', 'users should be able to vote a quote negatively if they like the quote', new Date(2019,1,1)),
    new Quote(4, 'Delete the quote', 'one should be able to delete a quote created', new Date(2019,1,1)),
    new Quote(5, 'See the number of upvotes and downvotes', 'also one should be able to se the votes of the quote', new Date(2019,1,1)),
    
]
constructor() { }
}
