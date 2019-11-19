import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewDialogComponent } from './addnew-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('AddnewDialogComponent', () => {
  let component: AddnewDialogComponent;
  let fixture: ComponentFixture<AddnewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AddnewDialogComponent],
        providers: [
            {
                provide: MatDialogRef,
                useValue: {}
            }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
