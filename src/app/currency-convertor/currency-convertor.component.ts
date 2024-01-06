import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../model/Currency';
import { CurrencyService } from '../services/currency.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemResult } from '../model/ItemResult';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {
  public currenciesList: Array<ICurrency> | undefined;
  public response: any;
  public historyList: Array<ItemResult> = [];
  public model: ItemResult = {}

  public convertForm = new FormGroup( {
      amount: new FormControl( null, Validators.required ),
      from: new FormControl( null, Validators.required ),
      to: new FormControl( null, Validators.required ),
  });

  constructor(public currencyService: CurrencyService) { }

  async ngOnInit() {

    try {

      this.currenciesList = await this.currencyService.getCurrenciesTypes();

    } catch (error) {
      console.log(error);
    }

  }

  async onConvertCurrency() {

    try {

      if (this.convertForm.valid) {
        var values : any = this.convertForm.value;

        this.response = await this.currencyService.convert(values.from, values.to, values.amount);

        var item = Object.assign({ result: this.response.result }, this.model);

        this.currencyService.setHistory(item);
      }


    } catch (error) {
      console.log(error);

    }

  }

  public onShowHistory(): void {
    this.historyList = this.currencyService.getHistory();
  }


}
