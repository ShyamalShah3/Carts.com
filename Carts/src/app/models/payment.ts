export class Payment {
    nameOnCard: string;
    cardNumber: string;
    expDate: string;
    CVV: string;
    constructor(nameOnCard: string,cardNumber: string ,expDate: string,CVV: string){
        this.nameOnCard=nameOnCard;
        this.cardNumber=cardNumber;
        this.expDate = expDate;
        this.CVV=CVV;
    }
}
