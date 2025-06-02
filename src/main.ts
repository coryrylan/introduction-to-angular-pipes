import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EllipsisPipe } from './ellipsis.pipe';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EllipsisPipe, CommonModule],
  template: `
    <h1>Introduction to Angular Pipes</h1>

    <p>
      <a href="https://coryrylan.com/blog/introduction-to-angular-pipes">Tutorial at coryrylan.com</a>
    </p>

    <p>{{myDate}}</p>

    <p>{{myDate | date:'shortDate'}}</p>

    <p>{{myDate | date:'longDate'}}</p>

    <p>{{longText | ellipsis: 50 }}</p>
  `,
})
export class App {
  myNumber = 123456;
  myDate = new Date();
  longText = 'Bacon ipsum dolor amet bacon t-bone salami, flank capicola. Leberkas ribeye pork pork loin. Biltong porchetta picanha capicola tri-tip boudin. Tenderloin leberkas chicken, ham pig pork loin flank salami ham hock chuck meatball kevin. Meatloaf capicola landjaeger ground round ham hock ball tip boudin shank pork chop ribeye rump frankfurter turkey. Spare ribs short loin pork chop, biltong capicola shoulder pig drumstick pork porchetta brisket venison turducken sausage. Pig alcatra short loin jowl, prosciutto leberkas ham chuck.';
}

bootstrapApplication(App);
