import { Component, OnInit } from '@angular/core';
import { ContactUsInfo } from 'src/app/models/contact-us-info';
import { ContactUsInfoService } from 'src/app/services/contact-us-info.service';

@Component({
  selector: 'app-contact-us-confirmation',
  templateUrl: './contact-us-confirmation.component.html',
  styleUrls: ['./contact-us-confirmation.component.css']
})
export class ContactUsConfirmationComponent implements OnInit {
  private mContactUsInfo:ContactUsInfo;
  constructor(private contactUsInfoService:ContactUsInfoService) { 
    this.mContactUsInfo = contactUsInfoService.contactUsInfo;
  }

  ngOnInit(): void {
  }

  public get contactUsInfo() {
    return this.mContactUsInfo;
  }

}
