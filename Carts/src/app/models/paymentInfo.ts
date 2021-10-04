


export class paymentInfo {
     mNameOnCard: string;
    mCardNumber: string;
     mExpDate: string;
     mCVV: string;
 
    constructor(nameOnCard: string="",cardNumber: string="" ,expDate: string="",CVV: string=""){
        this.mNameOnCard=nameOnCard;
        this.mCardNumber=cardNumber;
        this.mExpDate = expDate;
        this.mCVV=CVV;
       
    }
    public get CardName(){
        return this.mNameOnCard;
    }
    public get CardNum(){
        return this.mCardNumber;
    }
    public get ExpD(){
        return this.mExpDate;
    }
    public get cvv(){
        return this.mCVV;
    }
    public set CardName(CardName:string){
      this.mNameOnCard = CardName;
    }
    public set CardNum(CardNum:string){
        this.mCardNumber = CardNum;
    }
    public set ExpD(ExpD:string){
       this.mExpDate = ExpD
    }
    public set cvv(cvv:string){
       this.mCVV=cvv;
    }

    public clear() {
        this.mNameOnCard = "";
        this.mCardNumber = "";
        this.mExpDate = "";
        this.mCVV = "";
    }
/*
    getLastFour(): string {
        let length = this.mCardNumber.length;
        let result = '*'.repeat((length - 4));
        result += this.mCardNumber.substring((length-4));
        return "";
    }
    */

}
