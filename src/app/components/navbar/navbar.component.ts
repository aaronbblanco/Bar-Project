import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
menu
btnMenu
  constructor() {
    this.menu = document.getElementById('btn-menu')

    this.btnMenu = this.menu
   }

  ngOnInit(): void {
    console.log(this.menu)
  }


}
