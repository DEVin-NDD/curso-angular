import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  contador = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
