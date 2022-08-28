


export interface Register{
    name:string;
    age:number;
    email:string;
    password:string;
}

export class  RegisterUser implements Register
{
    name:string;
    age:number;
    email:string;
    password:string;

    constructor(){
        this.name='',
        this.age= 0,
        this.email='',
        this.password=''

    }
}