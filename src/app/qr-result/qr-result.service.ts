import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
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
  result: any;

  constructor(private http: HttpClient) {}
  fetchResult(result: string): Observable<Qr> {
    const data = { qrcode: result };

    const url = 'https://examauth.centyfano.dev/api/qr';
    return this.http.post<Qr>(url, data, this.httpOptions).pipe(
      tap((res) => {
        this.data = res;
        return this.data;
      })
    );
  }

  getRes() {}
}
