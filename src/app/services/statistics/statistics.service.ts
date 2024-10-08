import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private httpClient:HttpClient) { }

  getBasicStatistics():Observable<any>{
    return this.httpClient.get(`${environment.baseURL}Statistics/GetBasicStatistics`)
  }
}
