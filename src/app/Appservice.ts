import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService{

  loggedIn = new BehaviorSubject<boolean>(false);
  userId = new BehaviorSubject<number>(0);

  //[] is initial value of cart_product.


}
