import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExamcardService } from '../examcard/examcard.service';
import { Student } from '../models/student';
import { jsPDF } from 'jspdf';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild('examCard') examCard: ElementRef;
  stud: Student;
  isError: any;
  studId: string = this.route.snapshot.params.regId;

  constructor(
    private examService: ExamcardService,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.title.setTitle('Generate Card');
  }

  getStudent(studId: string) {
    this.isError = '';
    this.examService.getStudent(studId).subscribe(
      // P3-63-04   eligible
      // Z3-13-84   ineligible
      (res: Student) => {
        this.stud = res;
      },
      (error) => {
        this.isError = error;
        return;
      }
    );
  }

  shortName(nm: string) {
    // const name = nm.replace(' ', '-');
    let name: any = nm.split(' ');
    name = name.join('-');

    return name.toLowerCase();
  }

  public genPDF() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.examCard.nativeElement, {
      callback: (doc) => {
        // doc.addFont()
        doc.setFontSize(1);
        doc.save(`${this.shortName(this.stud.name)}.pdf`);
      },
    });
  }

  ngOnInit() {
    if (!this.studId || this.studId === undefined) {
      this.isError = 'login';
      return;
    }
    this.getStudent(this.studId);
  }
}
