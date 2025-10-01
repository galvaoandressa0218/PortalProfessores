import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMethodologyComponent } from './edit-methodology.component';

describe('EditMethodologyComponent', () => {
  let component: EditMethodologyComponent;
  let fixture: ComponentFixture<EditMethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMethodologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
