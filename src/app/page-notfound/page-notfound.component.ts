import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-notfound',
  template: `
    <h1>Página não encontrada! </h1>   
  `,
  styles: ['h1 { color: red; }']
})
export class PageNotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
