import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artifacts3Component } from './artifacts3.component';

describe('Artifacts3Component', () => {
  let component: Artifacts3Component;
  let fixture: ComponentFixture<Artifacts3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artifacts3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artifacts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
