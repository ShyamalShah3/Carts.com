export enum ContactUsKind {
    ProductOrServiceHelp,
    ShippingIssue,
    PaymentProblem,
    GeneralFeedback,
  }

export class ContactUsInfo {
    
    

    public constructor(private mKind:ContactUsKind = ContactUsKind.GeneralFeedback, private mInputText:String = "", private mEmail:string = "") {

    }

    public get kind() {
        return this.mKind;
    }

    public set kind(kind) {
        this.mKind = kind;
    }

    public get inputText() {
        return this.mInputText;
    }

    public set inputText(text) {
        this.mInputText = text;
    }

    public get email() {
        return this.mEmail;
    }

    public set email(email){
        this.mEmail = email;
    }

}
