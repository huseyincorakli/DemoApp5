import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn:'root'
// })
//yukarıdaki gibi injectable decorator ile işaretleyebiliriz ya da kullanacağızın komponentin declare olduğu modulde provide olarak ekleyebiliriz ya da 
// ilgili komponentte provide olarak ekleyebiliriz
@Injectable()
export class ProductService {
  
    
    constructor(private loggerService:LoggerService) {
        console.log("Product Service is called")
    }
     getProduct() {
        this.loggerService.log();
        return "products..."
    }
}

export class LoggerService{
    constructor() {
        console.log("Logger Service  is called")
    }
    log(){
        console.log("logged successfully")
    }
}