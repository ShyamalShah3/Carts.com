import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsInfo, ContactUsKind } from 'src/app/models/contact-us-info';
import { ContactUsInfoService } from 'src/app/services/contact-us-info.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private mContactUsInfo:ContactUsInfo;
  @Input('ngModel') contactUsForm:FormGroup;  
  @Input('ngModel') dropDownOptions:[dropDownText:string, kind:ContactUsKind][] = [["Help with a product or service", ContactUsKind.ProductOrServiceHelp], ["Help with a shipping related issue", ContactUsKind.ShippingIssue],
  ["Help with a payment related issue", ContactUsKind.PaymentProblem], ["General feedback", ContactUsKind.GeneralFeedback]];
  public KindEnum = ContactUsKind;
  public submittedForm:boolean = false;
  
  public constructor(private contactUsInfoService:ContactUsInfoService) { 
    this.mContactUsInfo = contactUsInfoService.contactUsInfo;
    let emailRegex:string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    this.contactUsForm = new FormGroup({ contactUsKind: new FormControl("undefined", [Validators.required]),
                                          contactUsText: new FormControl(this.mContactUsInfo.inputText, [Validators.required]),
                                          contactUsEmail: new FormControl(this.mContactUsInfo.email, [Validators.required, Validators.pattern(emailRegex)]) })
  }

  ngOnInit(): void {
    
  }

  private packageContactUsInfo() {
    this.mContactUsInfo.kind = this.kindForm?.value;
    this.mContactUsInfo.inputText = this.textForm?.value;
    this.mContactUsInfo.email = this.emailForm?.value;
  }

  public onCancelClick() {
    this.packageContactUsInfo();
  }

  public onSubmitClick() {
    this.packageContactUsInfo();
    this.submittedForm = true;
  }

  get kindForm() {
    return this.contactUsForm.get('contactUsKind');
  }

  get textForm() {
    return this.contactUsForm.get('contactUsText');
  }

  get emailForm() {
    return this.contactUsForm.get('contactUsEmail');
  }

}
