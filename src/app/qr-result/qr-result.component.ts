import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QrResultService } from './qr-result.service';

@Component({
  selector: 'app-qr-result',
  templateUrl: './qr-result.component.html',
  styleUrls: ['./qr-result.component.scss'],
})
export class QrResultComponent implements OnInit {
  qrCode = this.route.snapshot.params.code;
  userErr;
  userDetails;

  constructor(
    private qrResult: QrResultService,
    private route: ActivatedRoute
  ) {}

  getRes() {
    this.qrResult.fetchResult(this.qrCode).subscribe(
      (res: any) => {
        this.userDetails = res;
        this.userDetails.fullName = this.fullName(
          res.student.firstName,
          res.student.middleName,
          res.student.lastName
        );
      },
      (err: any) => {
        console.error(err);
        if (err.status === 404) {
          this.userErr = 'Exam card not recognized';
        }
      }
    );
  }

  fullName(f: string, m: any, l: string) {
    if (m === null) {
      m = '';
    }
    return `${f} ${m} ${l}`; //15
  }

  ngOnInit() {
    this.getRes();
  }
}
