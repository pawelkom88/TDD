import { isSeatTaken } from './theatre';

describe('Theatre Seat Management', () => {
  describe('isSeatTaken', () => {
    it.only('should check if seat is taken', () => {
      expect(isSeatTaken('A3')).toBeFalsy();
    });
  });

  describe('bookASeat', () => {
    it('should book a seat successfully', () => {
      const theatreSeats = {
        A: ['A1', 'A2'],
      };

      expect(bookASeat('A1', theatreSeats).toBe(true));
    });
    it('should NOT book a seat', () => {
      const theatreSeats = {
        A: ['X', 'A2'],
      };

      expect(bookASeat('A1', theatreSeats).toBe(false));
    });
  });
});
