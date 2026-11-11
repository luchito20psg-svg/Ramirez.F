import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { cabecera } from './componentes/cabecera/cabecera';
import { piepagina } from './componentes/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, cabecera, piepagina],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}