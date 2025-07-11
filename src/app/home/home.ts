import { Component, effect, inject } from '@angular/core';
import { VideoService } from '../services/video/video';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../interfaces/pagination';
import { VideoResponse } from '../interfaces/video/video';
import { AsyncPipe, DatePipe } from '@angular/common';
import { DurationToMachineReadablePipe, DurationToPrettyPipe } from '../pipes/duration-pipe';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DurationToMachineReadablePipe, DurationToPrettyPipe, DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  videos$!: Observable<PaginationResponse<VideoResponse>>;

  private readonly videoService = inject(VideoService);

  constructor() {
    effect(() => {
      this.videos$ = this.videoService.getVideos();
    });
  }
}
