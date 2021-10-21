import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrResultRoutingModule } from './qr-result-routing.module';
import { QrResultComponent } from './qr-result.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [QrResultComponent],
  imports: [
    CommonModule,
    QrResultRoutingModule,
    ZXingScannerModule,
    IonicModule,
  ],
})
export class QrResultModule {}
