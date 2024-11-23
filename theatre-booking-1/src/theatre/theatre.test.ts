import { bookASeat, bookMultipleSeats, isSeatTaken, Seats } from './theatre';

describe('Theatre Seat Management', () => {
  describe('isSeatTaken', () => {
    it('should check if seat is taken', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
      } as Seats;
      expect(isSeatTaken('A3', theatreSeats)).toBeFalsy();
    });
  });

  describe('bookASeat', () => {
    it('should book a seat', () => {
      const theatreSeats = {
        A: ['A1', 'A2'],
      } as Seats;

      expect(bookASeat('A1', theatreSeats)).toBeTruthy();
    });
    it('should NOT book a seat', () => {
      const theatreSeats = {
        A: ['X', 'A2'],
      } as Seats;

      expect(bookASeat('A1', theatreSeats)).toBeFalsy();
    });
  });

  describe('bookMultipleSeats', () => {
    it('should allow to book multiple seats', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as Seats;

      expect(bookMultipleSeats(['A1', 'A2', 'A3'], theatreSeats)).toBeTruthy();
    });
    it.only('should allow to book all seats if at least one of them is taken', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'X'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as Seats;

      expect(bookMultipleSeats(['A1', 'A2', 'A3'], theatreSeats)).toBeFalsy();
    });
  });
});

// todo: add error messages for fun after you have done everything
