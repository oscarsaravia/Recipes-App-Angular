import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  // Outputs must be EventEmitters, so parent component can get the info
  constructor() {}

  ngOnInit(): void {}
}
