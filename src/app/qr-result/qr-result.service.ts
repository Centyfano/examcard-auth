import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Qr } from '../models/qr';

@Injectable({
  providedIn: 'root',
})
export class QrResultService {
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  data: any;
  constructor(private http: HttpClient) {}
  fetchResult(result: string): Observable<Qr> {
    // console.log(result);
    const data = { qrcode: result };

    const url = 'http://localhost:5000/qr';
    return this.http.post<Qr>(url, data, this.httpOptions).pipe(
      take(1),
      tap((res) => {
        this.data = res;
        console.log(this.data);
        return this.data;
      })
    );
  }
}
