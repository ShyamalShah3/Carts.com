


export class paymentInfo {
    nameOnCard: string;
    cardNumber: string;
    expDate: string;
    CVV: string;
    lastFour: string = "";
    constructor(nameOnCard: string="",cardNumber: string="" ,expDate: string="",CVV: string=""){
        this.nameOnCard=nameOnCard;
        this.cardNumber=cardNumber;
        this.expDate = expDate;
        this.CVV=CVV;
        this.lastFour = this.getLastFour();
    }
    public get getCardName(): string{
        return this.nameOnCard;
    }
    public get getCardNum(): string{
        return this.cardNumber;
    }
    public get getExpD(): string{
        return this.expDate;
    }
    public get getCVV(): string{
        return this.CVV;
    }
    public clear() {
        this.nameOnCard = "";
        this.cardNumber = "";
        this.expDate = "";
        this.CVV = "";
    }

    getLastFour(): string {
        let length = this.cardNumber.length;
        let result = '*'.repeat((length - 4));
        result += this.cardNumber.substring((length-4));
        return result;
    }

}
