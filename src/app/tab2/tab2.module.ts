import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { QRCodeModule } from 'angularx-qrcode';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { QrcodeComponent } from './footer/qrcode/qrcode.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    QRCodeModule,
  ],
  declarations: [
    Tab2Page,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    QrcodeComponent,
  ],
})
export class Tab2PageModule {}
