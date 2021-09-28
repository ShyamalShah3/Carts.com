export class ShippingInfo {
    private mId:number;
    private mStreetAddress:string;
    private mCity:string;
    private mZipCode:string;
    private mState:string;
    private mCountry:string;
    private emailAddr: string;

    constructor(id:number = -1, streetAddress:string = "Unknown", city:string = "Unknown", zipCode:string = "Unknown", state:string = "Unknown", country:string = "Unknown", private mEmailAddress:string = "Unknown", private mShippingMethod:string = "Unknown") {
        this.mId = id;
        this.mStreetAddress = streetAddress;
        this.mCity = city;
        this.mZipCode = zipCode;
        this.mState = state;
        this.mCountry = country;
        this.emailAddr = mEmailAddress;
    }

    
    public get id() : number {
        return this.mId;
    }

    public get streetAddress() : string {
        return this.mStreetAddress;
    }
    
     public get city() : string {
        return this.mCity;
    }
   
    public get zipCode() : string {
        return this.mZipCode;
    }
   
    public get state() : string {
        return this.mState;
    }
   
    public get country() : string {
        return this.mCountry;
    }

    public get emailAddress() : string {
        return this.mEmailAddress;
    }

    public get shippingMethod() : string {
        return this.mShippingMethod;
    }
    public clear() {
        this.mId = -1;
        this.mStreetAddress = "Unknown";
        this.mCity = "Unknown";
        this.mZipCode = "Unknown";
        this.mState = "Unknown";
        this.mCountry = "Unknown";
        this.mEmailAddress = "Unknown";
        this.mShippingMethod = "Unknown";
    }
}
