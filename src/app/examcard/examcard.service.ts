import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class ExamcardService {
  private studentUrl = 'http://localhost:5000/eligible';

  // eslint-disable-next-line @typescript-eslint/member-ordering
  throwError: any;

  constructor(private http: HttpClient) {}

  /**
   * Formats the input name; if name is null, it returns nothing
   * i.e, empty string; else, it returns the name
   *
   * @param name string
   * @returns formattedName
   */
  formatName(name: string | null) {
    const formName = name ? name !== null : '';
    return formName;
  }

  /**
   * Returns a http observable of the fetched student
   *
   * @param studentId string
   * @returns Observable
   */
  getStudent(studentId: string): Observable<Student> {
    const url = `${this.studentUrl}/${studentId}`;
    return this.http.get<Student>(url).pipe(
      // eslint-disable-next-line arrow-body-style
      map((data: any) => {
        // console.log(data);
        return {
          name: `${data.student.firstName} ${this.formatName(
            data.student.middleName
          )} ${data.student.lastName}`,
          regNumber: data.studentStudentRegNumber,
          school: data.student.course.school.schoolName,
          course: data.student.course.courseName,
          year: data.yearOfStudy,
          semester: data.semesterOfStudy,
          units: data.units,
          examinationId: data.examinationExaminationId,
          academicYear: data.examination.academicYear,
          startDate: data.examination.startDate,
          endDate: data.examination.endDate,
          examCardId: data.exam_qr.examinationCardId,
          qrcode: data.exam_qr.qrcode,
        };
      }),
      tap((s) => {
        const outcome = s ? `fetched` : `did not find`;
        this.log(`${outcome} student id=${studentId}`);
      }),
      catchError(this.handleError<Student>(`Get student id=${studentId}`))
      // catchError((e) => console.error(e))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.status}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
