import { SecondsToTimePipe } from './seconds-to-time.pipe';

describe('SecondsToTimePipe', () => {
  it('converts seconds to time 00:00', () => {
    const pipe = new SecondsToTimePipe();

    expect(pipe.transform(0)).toEqual('00:00');
    expect(pipe.transform(5)).toEqual('00:05');
    expect(pipe.transform(59)).toEqual('00:59');
    expect(pipe.transform(60)).toEqual('01:00');
    expect(pipe.transform(330)).toEqual('05:30');
  });
});
