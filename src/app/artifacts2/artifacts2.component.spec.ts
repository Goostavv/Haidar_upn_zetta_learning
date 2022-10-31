import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artifacts2Component } from './artifacts2.component';

describe('Artifacts2Component', () => {
  let component: Artifacts2Component;
  let fixture: ComponentFixture<Artifacts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artifacts2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artifacts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
