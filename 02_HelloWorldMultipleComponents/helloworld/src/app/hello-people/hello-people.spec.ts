import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPeople } from './hello-people';

describe('HelloPeople', () => {
  let component: HelloPeople;
  let fixture: ComponentFixture<HelloPeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloPeople]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloPeople);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
