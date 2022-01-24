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

  switchCamera(): void {
    this.currentCameraIndex++;

    if (this.currentCameraIndex === this.availableCameras.length) {
      this.currentCameraIndex = 0;
    }

    this.currentDevice = this.availableCameras[this.currentCameraIndex];
  }

  onCodeResult(result: string): void {
    const res =
      'U2FsdGVkX18p0CvASSI63GV8nxf8yEUyiCB8ZaYTQUtaegwLuHMCMMB6wTn9w7FWODz3zwLQa+/XWrLc4kem1Q==';
    this.router.navigate(['/result', { code: result }]);
  }

  set res(result: any) {
    this.qrResult.result = result;
  }

  get res() {
    return this.qrResult.result;
  }

  ngOnInit() {}
}
