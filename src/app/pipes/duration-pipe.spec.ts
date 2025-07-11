import { DurationToMachineReadablePipe } from './duration-pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationToMachineReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
