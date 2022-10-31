import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artifacts4Component } from './artifacts4.component';

describe('Artifacts4Component', () => {
  let component: Artifacts4Component;
  let fixture: ComponentFixture<Artifacts4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artifacts4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artifacts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
