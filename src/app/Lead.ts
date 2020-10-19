export class Lead 
{
    public id:any;
    public name:string;
    public email:string;
    public phone:string;
    public city:string;

    constructor(name:string, email:string, phone:string, city:string){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}