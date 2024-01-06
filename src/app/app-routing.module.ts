import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { HistoryConversionsComponent } from './history-conversions/history-conversions.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "convert",
    pathMatch: "full",
  },
  {
  path: "convert",
  component: CurrencyConvertorComponent,
  },
  {
  path: "history",
  component: HistoryConversionsComponent,
  },
  {
  path: "about",
  component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
