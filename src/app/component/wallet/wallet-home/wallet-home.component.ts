import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Appservice';
import { WalletServiceService } from '../service/wallet-service.service';

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.css']
})
export class WalletHomeComponent implements OnInit {

  constructor(private wService: WalletServiceService, private appService: AppService) { }

  ngOnInit(): void {
  }

  activateWalletByUserid(){
    this.wService.activateWallet(this.appService.userId.value).subscribe(data=>{
      console.log(data);
    });
  }

}
