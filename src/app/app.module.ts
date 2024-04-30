import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiIComponent } from './tutorials/di-i/di-i.component';
import { LoggerService, ProductService } from './classes/product-service';
import { productServiceInjectionToken } from './provider-tokens/providerTokens';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { GetProductService } from './classes/getProductService';
@NgModule({
  declarations: [
    AppComponent,
    DiIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [ProductService,LoggerService],
  // Type Token Kullanımı:
  //  providers:[{provide:ProductService,useClass:ProductService},{provide:LoggerService,useClass:LoggerService}],
  //************************************/
  //String Token Kullanımı:
  // providers:[{provide:"productServiceToken",useClass:ProductService},LoggerService],
  //******************************/
  //Injection Token Kullanımı:
  // providers:[{provide:productServiceInjectionToken,useClass:ProductService},LoggerService],

  //useValue Kullanımı:
  // providers:[{provide:"URL",useValue:"www.google.com"}],
  
  //useValue-2 Kullanımı:
  //  providers:[{provide:"URL",useValue:()=>{
  //   return "www.google.com"
  // }}],

  //useFactory Kullanımı
  providers:[
     {provide:"deneme",useFactory:(htt:HttpClient)=>{
       htt.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
         console.log(data);
        
      })
       return new GetProductService();
    },deps:[HttpClient]}
   ],

 
  bootstrap: [AppComponent]
})
export class AppModule { }
