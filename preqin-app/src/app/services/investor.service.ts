import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  private baseUrl = 'http://localhost:8000/api/Investors';

  constructor(private http: HttpClient) {}

  getInvestors(): Observable<any> {
    const firmIds = [2670, 2792, 332, 3611].join(',');
    return this.http.get(`${this.baseUrl}?firmIds=${firmIds}`);
  }

  getInvestorCommitment(assetClass: string, investorId: string): Observable<any> {
    return this.http.get(`/api/Investor/commitment/${assetClass}/${investorId}`);
  }

  
}
