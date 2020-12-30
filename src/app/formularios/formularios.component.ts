import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  submitted = false
  model: Hero
  teste: string

  ngOnInit() {   
    this.model = new Hero() 
  }

  onSubmit() { this.submitted = true; }
}
