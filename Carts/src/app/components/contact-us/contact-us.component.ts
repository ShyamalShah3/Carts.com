import { Component, Input, OnInit } from '@angular/core';
import { ContactUsInfo } from 'src/app/models/contact-us-info';
import { ContactUsInfoService } from 'src/app/services/contact-us-info.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @Input('ngModel') mContactUsInfo:ContactUsInfo;
  
  public constructor(private contactUsInfoService:ContactUsInfoService) { 
    this.mContactUsInfo = contactUsInfoService.contactUsInfo;
  }

  ngOnInit(): void {

  }

}
