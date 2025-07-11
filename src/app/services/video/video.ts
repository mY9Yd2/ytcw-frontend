import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginationResponse } from '../../interfaces/pagination';
import { VideoResponse } from '../../interfaces/video/video';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  getVideos(): Observable<PaginationResponse<VideoResponse>> {
    return this.http.get<PaginationResponse<VideoResponse>>(`${this.apiUrl}/api/v1/videos`, {
      mode: 'cors'
    })
  }
}
