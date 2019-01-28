import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes= [
    new Quote(1,'Create a quote'),
    new Quote(2,'Upvote a quote'),
    new Quote(3, 'Downvote the quote'),
    new Quote(4, 'Delete the quote'),
    new Quote(5, 'See the number of upvotes and downvotes'),
    
]
constructor() { }
}
