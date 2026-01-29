import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //Interpolation Example
  name = "NameOne"
  age = 25;

  //Property Binding Example
  imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";
  isDisabled = true;

  //Event Binding Example
  message = 'Button not clicked yet';
  showMessage() {
    this.message = 'Button clicked!';
  }

  //Two-Way Binding Example
  username = ''

}
