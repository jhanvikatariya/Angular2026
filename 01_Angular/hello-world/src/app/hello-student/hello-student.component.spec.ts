import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStudentComponent } from './hello-student.component';

describe('HelloStudentComponent', () => {
  let component: HelloStudentComponent;
  let fixture: ComponentFixture<HelloStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
