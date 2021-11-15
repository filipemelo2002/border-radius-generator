import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {

  @Input() topLeft = 50;
  @Input() topRight = 50;
  @Input() bottomLeft = 50;
  @Input() bottomRight = 50;
  @Input() unit = "px";
  constructor() { }

  ngOnInit(): void {
  }

}
