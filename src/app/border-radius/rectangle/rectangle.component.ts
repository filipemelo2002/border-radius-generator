import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {

  @Input() topLeft = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
