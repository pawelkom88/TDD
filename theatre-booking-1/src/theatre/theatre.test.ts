import {
  bookMultipleSeats,
  bookSeat,
  calculateNumberOfAvailableSeatsInRow,
  calculatePercentageOfAvailableSeats,
  countAvailableSeats,
  isSeatTaken,
  TheatreLayout,
} from './theatre';

describe('Theatre Seat Management', () => {
  describe('isSeatTaken', () => {
    it('should check if seat is taken', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
      } as TheatreLayout;
      expect(isSeatTaken('A3', theatreSeats)).toBeFalsy();
    });
  });

  describe('bookASeat', () => {
    it('should book a seat', () => {
      const theatreSeats = {
        A: ['A1', 'A2'],
      } as TheatreLayout;

      expect(bookSeat('A1', theatreSeats)).toBeTruthy();
    });
    it('should NOT book a seat', () => {
      const theatreSeats = {
        A: ['X', 'A2'],
      } as TheatreLayout;

      expect(bookSeat('A1', theatreSeats)).toBeFalsy();
    });
  });

  describe('bookMultipleSeats', () => {
    it('should allow to book multiple seats', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as TheatreLayout;

      expect(bookMultipleSeats(['A1', 'A2', 'A3'], theatreSeats)).toBeTruthy();
    });
    it('should throw an error if any of the selected seats are already taken', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'X'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as TheatreLayout;

      expect(() =>
        bookMultipleSeats(['A1', 'A2', 'A3'], theatreSeats)
      ).toThrowError('Seat A3 has already been booked');
    });
  });

  describe('countAvailableSeats', () => {
    it('should count available seats in the theatre', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'X'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as TheatreLayout;

      const theatreSeats2 = {
        A: ['X', 'X', 'X'],
        B: ['X', 'X', 'X'],
        C: ['X', 'X', 'X'],
      } as TheatreLayout;

      expect(countAvailableSeats(theatreSeats)).toBe(8);
      expect(countAvailableSeats(theatreSeats2)).toBe(0);
    });
  });

  describe('calculatePercentageOfAvailableSeats', () => {
    it('should calculate percentage of available seats in the theatre', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
      } as TheatreLayout;

      const theatreSeats2 = {
        A: ['X', 'X', 'X'],
        B: ['B1', 'B2', 'B3'],
        C: ['C1', 'C2', 'C4'],
        D: ['D1', 'D2', 'D4'],
      } as TheatreLayout;

      const theatreSeats3 = {
        A: ['X', 'X', 'X'],
        B: ['X', 'X', 'X'],
        C: ['X', 'X', 'X'],
        D: ['X', 'X', 'X'],
      } as TheatreLayout;

      expect(calculatePercentageOfAvailableSeats(theatreSeats)).toBe(100);
      expect(calculatePercentageOfAvailableSeats(theatreSeats2)).toBe(75);
      expect(calculatePercentageOfAvailableSeats(theatreSeats3)).toBe(0);
    });
  });

  describe('calculateNumberOfAvailableSeatsInRow', () => {
    it('should check how many seat are booked in a particular row', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
        B: ['X', 'B2', 'B3'],
        C: ['X', 'X', 'X'],
      } as TheatreLayout;

      expect(calculateNumberOfAvailableSeatsInRow('A', theatreSeats)).toBe(0);
      expect(calculateNumberOfAvailableSeatsInRow('B', theatreSeats)).toBe(1);
      expect(calculateNumberOfAvailableSeatsInRow('C', theatreSeats)).toBe(3);
    });
  });
});

// todo: add error messages for fun after you have done everything
