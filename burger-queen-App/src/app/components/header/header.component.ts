import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    titleHeader: string;
  constructor() { 
    this.titleHeader = 'Burger Queen'
  }

  ngOnInit(): void {
  }

}
