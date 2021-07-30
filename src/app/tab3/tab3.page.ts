import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { take, tap } from 'rxjs/operators';
import { QrResultService } from '../qr-result/qr-result.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  availableCameras: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  torchEnabled = false;
  torchCompatible = false;
  enableCamera = true;

  private currentCameraIndex = 0;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private qrResult: QrResultService // private qrScanner: QRScanner
  ) {}

  onHasPermission(hasPermission: boolean): void {
    if (!hasPermission) {
      this.alertController
        .create({
          header: 'No permission',
          message:
            'In order to scan QR codes, you need to grant permisison for camera access',
          buttons: ['OK'],
        })
        .then((alert) => alert.present());
    }
  }

  onIsTorchCompatible(compatible: boolean): void {
    this.torchCompatible = compatible;
  }

  onCamerasFound(cameras: MediaDeviceInfo[]): void {
    this.availableCameras = cameras;
    this.currentDevice = this.availableCameras[0];
  }

  onCodeResult(result: string): void {
    this.qrResult
      .fetchResult(result)
      .pipe(
        take(1),
        tap((index) => console.log('saved', index))
      )
      .subscribe((i) => this.router.navigateByUrl('/home'));
  }

  switchCamera(): void {
    this.currentCameraIndex++;

    if (this.currentCameraIndex === this.availableCameras.length) {
      this.currentCameraIndex = 0;
    }

    this.currentDevice = this.availableCameras[this.currentCameraIndex];
  }

  /*scan() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.alertController
            .create({
              header: 'No permission',
              message:
                'In order to scan QR codes, you need to grant permisison for camera access',
              buttons: ['OK'],
            })
            .then((alert) => alert.present());
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  } */
  ngOnInit() {
    // this.scan();
  }
}
