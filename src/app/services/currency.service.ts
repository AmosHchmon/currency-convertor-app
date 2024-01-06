import { Injectable } from '@angular/core';
import { ICurrency } from '../model/Currency';
import { ItemResult } from '../model/ItemResult';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {

  }

  public getCurrenciesTypes(): Promise<any> {
    return fetch("https://raw.githubusercontent.com/leequixxx/currencies.json/master/currencies.json").then(response => response.json());
  }

  public convert(to:string,from:string,amount:number): Promise<any> {

    var myHeaders = new Headers();

    myHeaders.append("apikey", "14QZ1p7tlsW6zWgtBbuOCvqOtlWiXPAs");

    return fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, {
      "headers": myHeaders
    }).then(response => response.json());

  }

  public getHistory() : Array<ItemResult> {
    var cache: any = sessionStorage.getItem('history');
      if (cache) {
        var list: ItemResult[] = JSON.parse(cache);
        return list;
      }
      return [];
    }

  public setHistory(item: ItemResult) {
      var list: Array<ItemResult> = []
      var cache: any = sessionStorage.getItem('history');

      if (cache) {
        list = JSON.parse(cache);
      }

      list.push(item);
      sessionStorage.setItem("history", JSON.stringify(list));
    }

}
