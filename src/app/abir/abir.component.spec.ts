import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbirComponent } from './abir.component';

describe('AbirComponent', () => {
  let component: AbirComponent;
  let fixture: ComponentFixture<AbirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
