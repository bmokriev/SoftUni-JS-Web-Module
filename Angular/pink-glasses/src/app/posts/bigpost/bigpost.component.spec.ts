import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigpostComponent } from './bigpost.component';

describe('BigpostComponent', () => {
  let component: BigpostComponent;
  let fixture: ComponentFixture<BigpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
