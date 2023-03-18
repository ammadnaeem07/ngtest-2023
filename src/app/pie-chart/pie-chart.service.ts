import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../init/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PieChartService extends BaseService  {

  constructor(http: HttpClient) { super(http)}
}
