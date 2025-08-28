import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaginationResponse } from '../../interfaces/pagination';
import { VideoResponse } from '../../interfaces/video/video';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  getVideos(page: number = 1): Observable<PaginationResponse<VideoResponse>> {
    return this.http.get<PaginationResponse<VideoResponse>>(`${this.apiUrl}/api/v1/videos?page=${page}`, {
      mode: 'cors'
    }).pipe( // Default to sddefault if thumbnail does not exist.
      map(response => {
        response.data = response.data.map(video => ({
          ...video,
          thumbnail: video.thumbnail && video.thumbnail.trim() !== '' ? video.thumbnail : 'sddefault.webp'
        }));
        return response;
      })
    );
  }
}
