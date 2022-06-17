import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisComponent } from './this.component';

describe('ThisComponent', () => {
  let component: ThisComponent;
  let fixture: ComponentFixture<ThisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
