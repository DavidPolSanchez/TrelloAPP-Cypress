export class User{
    email: string=null
    password: string= null;
    
    constructor(){
        
    }
    getemail(): string {
        return this.email;
    }
    getpassWord(): string {
        return this.password;
    }
    setemail(value:string){
        this.email = value
    }
    setpassword(value:string){
        this.email = value
    }
}
