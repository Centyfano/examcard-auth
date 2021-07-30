import { Component, Input, OnInit } from '@angular/core';
import { ExamcardService } from '../examcard/examcard.service';
import { Student } from '../models/student';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @Input() student: Student;

  constructor(private examService: ExamcardService) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isOkay: any;

  genPdf(id) {
    const options = {
      x: 10,
      y: 10,
      // fileName: this.student.name
    };
    console.log(this.isOkay);

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      // format: [4, 2],
    });
    const call = (dc: { save: () => void }) => {
      dc.save();
    };

    // doc.html(document.body, { callback: call });
    // doc.save();
  }

  getStudent(): void {
    this.examService.getStudent('D3-23-444').subscribe(
      (s) => {
        this.student = s;
      },
      (error) => {
        console.log('the err is ', error);
        this.isOkay = error;
      }
    );
  }

  ngOnInit() {
    this.getStudent();
  }
}
