import { Injectable } from '@angular/core';
import { ContactUsInfo } from '../models/contact-us-info';

@Injectable({
  providedIn: 'root'
})
export class ContactUsInfoService {
  
  private mContactUsInfo:ContactUsInfo = new ContactUsInfo();

  public constructor() { }

  public get contactUsInfo() {
    return this.mContactUsInfo;
  }

  public set contactUsInfo(contactUsInfo) {
    this.mContactUsInfo = contactUsInfo;
  }
}
