export enum ContactUsKind {
    ProductOrServiceHelp,
    ShippingIssue,
    PaymentProblem,
    GeneralFeedback,
  }

export class ContactUsInfo {
    
    public static dropDown:[dropDownText:string, kind:ContactUsKind][] = [["Help with a product or service", ContactUsKind.ProductOrServiceHelp], ["Help with a shipping related issue", ContactUsKind.ShippingIssue],
                                                                        ["Help with a payment related issue", ContactUsKind.PaymentProblem], ["Other Problems or General Feedback", ContactUsKind.GeneralFeedback]];

    public constructor(private mKind:ContactUsKind = ContactUsKind.GeneralFeedback, private mInputText:String = "") {

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

}
