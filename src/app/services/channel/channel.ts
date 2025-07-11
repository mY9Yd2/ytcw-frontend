import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../../interfaces/pagination';
import { ChannelResponse } from '../../interfaces/channel/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  getChannels(): Observable<PaginationResponse<ChannelResponse>> {
    return this.http.get<PaginationResponse<ChannelResponse>>(`${this.apiUrl}/api/v1/channels`, {
      mode: 'cors'
    })
  }
}
