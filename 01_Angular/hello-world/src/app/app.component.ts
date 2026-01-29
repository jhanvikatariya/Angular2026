import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloStudentComponent } from './hello-student/hello-student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  studentName = 'John Doe';
  age = 20;
}
