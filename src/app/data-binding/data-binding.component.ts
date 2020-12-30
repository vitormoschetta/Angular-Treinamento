import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  texto02 = 'Texto02'
  texto03 = 'Texto03' 
  texto04 = 'Texto04'
  texto05 = 'Texto05'
  texto06 = ''
  
  onBlur() {
    alert(this.texto04)
  }

  onClick(valor) {
    if (valor == '') valor = "Digite algo!"
    alert(valor)
  }

  onClick2(valor2) {
    valor2.innerHtml = "outro"
    console.log(valor2)      
    console.log(valor2.value)        
  }  

  onKey(event: any) {
    this.texto06 = event.target.value + ' | ';
  }

  
}
