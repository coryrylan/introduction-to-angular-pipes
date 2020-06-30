import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNumber = 123456;
  myDate = new Date();
  longText = 'Bacon ipsum dolor amet bacon t-bone salami, flank capicola. Leberkas ribeye pork pork loin. Biltong porchetta picanha capicola tri-tip boudin. Tenderloin leberkas chicken, ham pig pork loin flank salami ham hock chuck meatball kevin. Meatloaf capicola landjaeger ground round ham hock ball tip boudin shank pork chop ribeye rump frankfurter turkey. Spare ribs short loin pork chop, biltong capicola shoulder pig drumstick pork porchetta brisket venison turducken sausage. Pig alcatra short loin jowl, prosciutto leberkas ham chuck.';

}
