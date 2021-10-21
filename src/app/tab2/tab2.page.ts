import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ExamcardService } from '../examcard/examcard.service';
import { Student } from '../models/student';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild('examCard') examCard: ElementRef;
  stud: Student;
  isError: any;

  constructor(private examService: ExamcardService) {}

  getStudent() {
    this.examService.getStudent('D3-23-44').subscribe(
      (res: Student) => {
        this.stud = res;
      },
      (error) => {
        this.isError = error;
        return;
      }
    );
  }

  genPdf() {
    const doc = new jsPDF();

    const examCard = this.examCard.nativeElement;

    const html = htmlToPdfmake(examCard.innerHTML);

    const documentDefinition = { content: html, info: { title: 'anc.pdf',filename:'pdfml' } };
    pdfMake.createPdf(documentDefinition).open();
  }

  ngOnInit() {
    this.getStudent();
  }
}
