import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharModComponent } from './char-mod.component';

describe('CharModComponent', () => {
  let component: CharModComponent;
  let fixture: ComponentFixture<CharModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
