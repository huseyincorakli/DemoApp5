import { Component, Inject, OnInit } from '@angular/core';
import { GetProductService } from 'src/app/classes/getProductService';
import { ProductService } from 'src/app/classes/product-service';
import { productServiceInjectionToken } from 'src/app/provider-tokens/providerTokens';

@Component({
  selector: 'app-di-i',
  template:`
  <h2>Dependency Injection - I</h2>
  <p>Dependency injection yapmak için gerekli servisin providerslara verilmesi ya da injectable decorator ile işaretlenmesi gerekmektedir.</p>
  <p>Eğer ki component bazında provide edilirse sadece ilgili component inject edilen nesneye erişebilecekken modullerde yapılan injectlerde <br> 
  ilgili module declare edilmiş componentler erişebilecektir.
  </p>
  <p>{{products}}</p>
  <hr>
  <h2>Dependency Injection - II</h2>
  <p>Angular da dependencylerin ihtiyaç duyulan component/directive serviyesinden inject edilebilmesi için ;</p>
  <p><strong>1-Module providera ekleme:</strong> İlgili modulün declare edildiği tüm component/directivelerde kullanılabilir.</p>
  <p><strong>2-Component/Directive providera ekleme:</strong>Yalnızca ilgili component/directiveden erişim sağlanabilecektir.</p>
  <h3><strong>3-Injectable decorator ile işaretleme:</strong></h3>
  <p>Eğer bir service başka bir servise bağımlı ise yani içerisinde başka bir servisi kullanıyorsa bu servisi Injectable olarak işaretleriz. <br>
    ardından Inject edilen sınıfın bağımlı olduğu sınıfı ilgili providera ekleriz.
  </p>
  <p><strong>3-a-ProvidedIn root:</strong>Uygulamanın ana modülüne singleton olarak eklenir. Uygulamanın her yerinden erişelebilir.</p>
  <p><strong>Inject Decorator: <br>  </strong> 
  <code>
  {{injectText}} 
  </code></p>
  <hr>
  <h2>Dependency Injection - III</h2>
  <h3>Bir Servisi Provide Etmenin Detayları</h3>
  <p>Bir servisi provide ederken "<code>providers:[XService]</code>" yada "<code>providers:[{{'{provide:XService,useClass:XService}'}}]</code> " şeklinde yapabiliriz.</p> 
  <p>Provide: erişilecek olan servisi temsil eden tokendır(<code>type token,string token,injection token</code>)</p>
  <p>Provider(<code>useClass,useValue,useFactory,useExisting</code>): Provide edilecek olan nesneyi tanımladığımız alandır. Dependency instanceın nasıl oluştuırulacağı kararının verildiği 
    yerdir.
  </p>
  <h3>(Provide)Token Türleri</h3>
  <p><strong>Type Token</strong>: Türü Type olarak verdiğimiz yapılanmadır: <br>
   Kullanımı: <br> <code>providers:[{{'{provide:XService,useClass:XService}'}}]</code> <br>
              <code>constructor(private xService:XService)</code>
  </p>
  <p><strong>String Token</strong>: Herhangi metinsel bir değeri token olarak kullanan yapılanmadır. <br>
    Kullanımı : <br> <code>providers:[{{'{provide:"xServiceStringValue",useClass:XService}'}}]</code> <br>
              <code>constructor( {{'@Inject("xServiceStringValue")'}}private xService:XService)</code>
  </p>
  <p><strong>InjectionToken</strong>: Benzersiz tokenlar oluşturulmasını sağlayan yapılanmadır. Inject tokendan bir instance oluşturulur ve  instancelar ayrı bir klasörde tutulur.</p>
  Kullanımı: <br> <code>{{"export const xServiceToken= new InjectionToken('') "}}</code> <br>
              <code> providers:[{{'{provide:xServiceToken,useClass:XService}'}}]</code> <br>
              <code>constructor( {{'@Inject(xServiceToken)'}}private xService:XService)</code>
  <h3>Provider Türleri</h3>
  <p style="text-decoration: underline;">Kullanımları için : "app.module & di-i.component.ts" bak</p>
  <p><strong>Class [<code>useClass</code>]</strong>:
  bir tür/sınıf provide edilecekse kullanılacak providerdır
  </p> <br>
  <p><strong>Value [<code>useValue</code>]</strong>: 
  metinsel değerleri provide etmek istediğimizde kullanılan providerdır (fonksiyonda provide edilebilir.)
  </p> <br>
  <p><strong>Factory [<code>useFactory</code>]</strong>:
    provide edilecek olan servis yapılandırılırken herhangi bir dış kaynaktan konfigurasyonel değerler alınacak ise veya bu gibi işlemleri api bağlantıları vs ile <br>
    alınacak ise bu yapılanma kullanılır
  </p> <br>
  <h3>DI Decorators</h3>
  Bir modülde bir service provide edildiğinde ilgili servisi inject etmiş tüm component/directive'ler aynı instance'ı kullanacaktır. <br>
  <strong>{{'@Self()'}} decorator:</strong> Eğer component/directive içerisinde provide edilmiş ise oradaki instance kullanılacaktır aksi halde hata fırlatacaktır.
  <strong>{{'@SkipSelf()'}} decorator:</strong> Child-Parent özelliği taşıyan componentlerde her  component providerından instance üretilerek alınıyor ise bu decorator <br>
  kullanılarak bir üstteki instance kullanılması talimatı verilir. <br>
  <strong>{{'@Optional()'}} decorator:</strong> Instance bulunmadığı halde hata fırlatmayacaktır.
<br>
<br>
<br>
<br>
Kaynak: <a href="https://www.youtube.com/playlist?list=PLQVXoXFVVtp1DcC4z0euk71_ICphrOEFV">Gençay Yıldız</a> <br>
  `
})
export class DiIComponent {

products:any;
//   constructor( private productService:ProductService){
//    this.products= productService.getProduct()
// }



//Injection Token Kullanımı:
// constructor(@Inject(productServiceInjectionToken) private productService:ProductService){
//   this.products= productService.getProduct()
// }

//String Token Kullanımı: 
// constructor(@Inject("productServiceToken") private productService:ProductService){
//   this.products= productService.getProduct()
// }


//useValue Kullanımı :
// constructor(@Inject("URL") value:string){
// console.log(value);

// }
//useValue Kullanımı 2:
// constructor(@Inject("URL") getUrl:any){
// console.log(getUrl());

// }

//useFactory Kullanımı:
constructor(@Inject("deneme") private deneme:any){
  
  console.log(deneme._getProduct());
  
}

injectText:string="constructor(@Inject(ProductService) private productService:ProductService){this.products= productService.getProduct() }"
// constructor(@Inject(ProductService) private productService:ProductService){
//   this.products= productService.getProduct()
// }
  





}
