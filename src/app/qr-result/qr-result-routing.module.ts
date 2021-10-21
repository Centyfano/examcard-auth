import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrResultComponent } from './qr-result.component';

const routes: Routes = [
  {
    path: '',
    component: QrResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrResultRoutingModule {}
