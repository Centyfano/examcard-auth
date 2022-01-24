import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class ExamcardService {
  private studentUrl = 'http://localhost:3000/eligible';

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
      // tap((e) => console.log(e)),
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
          examCardId: data.examinationCardId,
          qrcode: data.qrcode,
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
      let custom = '';
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else if (error.status === 404) {
        // console.error(error);
        custom = 'Please Ensure you have cleared with the finance department';
      } else {
        custom = 'Please try again';
        console.log(error);
      }
      // Return an observable with a user-facing error message.
      return throwError(custom);
    };
  }

  private log(message: string) {}
}
