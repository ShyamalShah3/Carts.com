export class paymentInfo {
    nameOnCard: string;
    cardNumber: string;
    expDate: string;
    CVV: string;
    constructor(nameOnCard: string="",cardNumber: string="" ,expDate: string="",CVV: string=""){
        this.nameOnCard=nameOnCard;
        this.cardNumber=cardNumber;
        this.expDate = expDate;
        this.CVV=CVV;
    }
    public get cardName(): string{
        return this.nameOnCard;
    }
    public get cardNum(): string{
        return this.cardNumber;
    }
    public get expD(): string{
        return this.expDate;
    }
    public get cvv(): string{
        return this.CVV;
    }
}
