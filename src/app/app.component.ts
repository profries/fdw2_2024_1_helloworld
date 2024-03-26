import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentComponent, TesteComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'everybody';
  imagem = "https://angular.io/assets/images/logos/angular/shield-large.svg"

  colorBlue = 'color: blue';
  colorGreen = 'color: green';
  colorRed = 'color: red';

  colors = ['Azul', 'Verde', 'Vermelho'];
  
  contadorCor = 0;

  trocarCor() {
    this.contadorCor++;
    if(this.contadorCor > 2) this.contadorCor = 0;
  }
  
  setCor(cor: number){
    this.contadorCor = cor;
  }
}
