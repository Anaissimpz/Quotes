import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes= [ 
    new Quote(1, 'Love is Blind.','Created by', "B.William",''),
    new Quote(2, 'We need much less than we think we need.', 'Created by', "Maya Angelou",''),
    new Quote(3, 'Creativity is contagious, pass it on', 'Created by',"Albert Einstein",''),
    new Quote(4, 'Happy girls are the prettiest girls', 'Created by',"H.Audrey",''),
    new Quote(5, 'Live as though life was created for you', 'Created by',"Maya Angelou",''),

]
constructor() { }
}
