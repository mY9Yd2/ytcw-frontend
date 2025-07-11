import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationToMachineReadable'
})
export class DurationToMachineReadablePipe implements PipeTransform {

  transform(seconds: number): string {
    if (seconds < 0 || isNaN(seconds)) {
      return '';
    }

    let remaining = seconds;

    const days = Math.floor(remaining / 86400);
    remaining %= 86400;

    const hours = Math.floor(remaining / 3600);
    remaining %= 3600;

    const minutes = Math.floor(remaining / 60);
    remaining %= 60;

    const secs = remaining;

    const parts = ['P'];
    if (days > 0) {
      parts.push(`${days}D`);
    }

    parts.push('T');

    if (hours > 0) {
      parts.push(`${hours}H`);
    }
    if (minutes > 0) {
      parts.push(`${minutes}M`);
    }
    if (secs > 0 || (hours === 0 && minutes === 0)) {
      parts.push(`${secs}S`);
    }

    return parts.join('');
  }
}

@Pipe({
  name: 'durationToPretty'
})
export class DurationToPrettyPipe implements PipeTransform {

  transform(seconds: number): string {
    if (seconds < 0 || isNaN(seconds)) {
      return '';
    }

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (seconds < 60) {
      return secs.toString();
    }

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    } else {
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
  }
}
