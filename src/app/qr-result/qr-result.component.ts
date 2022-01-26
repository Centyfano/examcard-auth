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
        res.regNumber = res.eligibleStudentIdStudentStudentRegNumber;
        this.userDetails = res;
        this.userDetails.fullName = this.fullName(
          res.eligible_student_id.student.firstName,
          res.eligible_student_id.student.middleName,
          res.eligible_student_id.student.lastName
        );
      },
      (err: any) => {
        console.error(err);
        if (err) {
          this.userErr = err.error.message;
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
