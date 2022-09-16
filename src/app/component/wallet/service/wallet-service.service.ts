import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {


  activateAPI: string;

  constructor(private http:HttpClient) { 
    this.activateAPI="http://localhost:1000/wallet/activate/";
  }

  public activateWallet(userId: number): Observable<number>{
    return this.http.put<number>(this.activateAPI+userId, {});
  }


}
