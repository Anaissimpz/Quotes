import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes= [ 
    new Quote(1, 'Love is Blind.','B.William',new Date(2019,1,1)),
  new Quote(2, 'We need much less than we think we need.', 'Maya Angelou',new Date(2019,1,1)),
  new Quote(3, 'Creativity is contagious, pass it on', 'Albert Einstein',new Date(2019,1,1)),
  new Quote(4, 'Happy girls are the prettiest girls', 'H.Audrey',new Date(2019,1,1)),
  new Quote(5, 'Live as though life was created for you', 'Maya Angelou',new Date(2019,1,1)),
    
]
constructor() { }
}
