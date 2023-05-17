import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBookComponent } from './contact-book.component';

describe('ContactBookComponent', () => {
  let component: ContactBookComponent;
  let fixture: ComponentFixture<ContactBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBookComponent]
    });
    fixture = TestBed.createComponent(ContactBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
