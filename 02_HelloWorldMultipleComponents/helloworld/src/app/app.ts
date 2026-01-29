import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { HelloPeople } from './hello-people/hello-people';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, HelloPeople],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('helloworld');
}
