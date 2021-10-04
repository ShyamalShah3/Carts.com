import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsConfirmationComponent } from './contact-us-confirmation.component';

describe('ContactUsConfirmationComponent', () => {
  let component: ContactUsConfirmationComponent;
  let fixture: ComponentFixture<ContactUsConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
