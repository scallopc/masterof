import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuMobile: boolean =  false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenuMobile() {
    this.menuMobile = true;
  }

 closeMenuMobile() {
    this.menuMobile = false;
  }
}
