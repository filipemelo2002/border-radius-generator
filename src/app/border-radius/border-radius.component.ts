import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'border-radius-root',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class AppComponent {
  title = 'border-radius-generator';

  @Output() onChangeTopLeft = new EventEmitter<number>();

}
