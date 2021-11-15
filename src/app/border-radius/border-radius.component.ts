import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'border-radius-root',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class AppComponent {

  topLeft = 50;
  topRight = 50;
  bottomLeft = 50;
  bottomRight = 50;

  unit = "px";

  onChangeTopLeft(value: number) {
    this.topLeft = value;
  }

  onChangeTopRight(value: number) {
    this.topRight = value;
  }

  onChangeBottomLeft(value: number) {
    this.bottomLeft = value;
  }

  onChangeBottomRight(value: number) {
    this.bottomRight = value;
  }

  onChangeUnit(value: string) {
    this.unit = value;
  }
}
