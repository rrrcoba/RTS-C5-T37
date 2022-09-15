import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharAddComponent } from './char-add.component';

describe('CharAddComponent', () => {
  let component: CharAddComponent;
  let fixture: ComponentFixture<CharAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
