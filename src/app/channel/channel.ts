import { Component, effect, inject } from '@angular/core';
import { ChannelResponse } from '../interfaces/channel/channel';
import { ChannelService } from '../services/channel/channel';
import { PaginationResponse } from '../interfaces/pagination';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-channel',
  imports: [AsyncPipe],
  templateUrl: './channel.html',
  styleUrl: './channel.scss'
})
export class Channel {
  channels$!: Observable<PaginationResponse<ChannelResponse>>;

  private readonly channelService = inject(ChannelService);

  constructor() {
    effect(() => {
      this.channels$ = this.channelService.getChannels();
    });
  }
}
