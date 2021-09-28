export class ShippingInfo {
    private mId:number;
    private mStreetAddress:string;
    private mCity:string;
    private mZipCode:string;
    private mState:string;
    private mCountry:string;
    private mEmailAddress;
    private mShippingMethod;

    constructor(id:number = -1, streetAddress:string = "", city:string = "", zipCode:string = "", state:string = "", country:string = "", emailAddress:string = "", shippingMethod:string = "") {
        this.mId = id;
        this.mStreetAddress = streetAddress;
        this.mCity = city;
        this.mZipCode = zipCode;
        this.mState = state;
        this.mCountry = country;
        this.mEmailAddress = emailAddress;
        this.mShippingMethod = shippingMethod;
    }

    
    public get id() {
         return this.mId;
    }

    public get streetAddress()  {
        return this.mStreetAddress;
    }
    
     public get city()  {
        return this.mCity;
    }
   
    public get zipCode()  {
        return this.mZipCode;
    }
   
    public get state()  {
        return this.mState;
    }
   
    public get country()  {
        return this.mCountry;
    }

    public get emailAddress()  {
        return this.mEmailAddress;
    }

    public get shippingMethod()  {
        return this.mShippingMethod;
    }

    public set id(id:number) {
        this.mId;
    }

    public set streetAddress(streetAddress:string) {
         this.mStreetAddress = streetAddress;
    }
    
     public set city(city:string) {
         this.mCity = city;
    }
   
    public set zipCode(zipCode:string) {
         this.mZipCode = zipCode;
    }
   
    public set state(state:string) {
         this.mState = state;
    }
   
    public set country(country:string) {
         this.mCountry = country;
    }

    public set emailAddress(emailAddress:string) {
         this.mEmailAddress = emailAddress;
    }

    public set shippingMethod(shippingMethod:string) {
         this.mShippingMethod = shippingMethod;
    }

    public clear() {
        this.mId = -1;
        this.mStreetAddress = "";
        this.mCity = "";
        this.mZipCode = "";
        this.mState = "";
        this.mCountry = "";
        this.mEmailAddress = "";
        this.mShippingMethod = "";
    }
}
