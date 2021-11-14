import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'border-radius-root',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class AppComponent {

  topLeft = 50;

  onChangeTopLeft(value: number) {
    this.topLeft = value;
  }
}
