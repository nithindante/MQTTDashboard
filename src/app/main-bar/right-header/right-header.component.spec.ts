import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightHeaderComponent } from './right-header.component';

describe('RightHeaderComponent', () => {
  let component: RightHeaderComponent;
  let fixture: ComponentFixture<RightHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
