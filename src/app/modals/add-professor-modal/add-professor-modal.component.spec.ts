import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessorModalComponent } from './add-professor-modal.component';

describe('AddProfessorModalComponent', () => {
  let component: AddProfessorModalComponent;
  let fixture: ComponentFixture<AddProfessorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProfessorModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProfessorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
