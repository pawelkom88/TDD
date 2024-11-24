import {
  bookMultipleSeats,
  bookSeat,
  calculateNumberOfAvailableSeatsInRow,
  calculatePercentageOfAvailableSeats,
  checkAdjectentSeatAvailability,
  countAvailableSeats,
  isSeatBooked,
  TheatreLayout,
} from './theatre';

describe('Theatre Seat Management', () => {
  describe('isSeatTaken', () => {
    it('should check if seat is taken', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
      } as TheatreLayout;
      expect(isSeatBooked('A3', theatreSeats)).toBeFalsy();
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

      expect(calculateNumberOfAvailableSeatsInRow('A', theatreSeats)).toBe(3);
      expect(calculateNumberOfAvailableSeatsInRow('B', theatreSeats)).toBe(2);
      expect(calculateNumberOfAvailableSeatsInRow('C', theatreSeats)).toBe(0);
    });
  });

  describe('checkAdjectentSeatAvailability ', () => {
    it('should check if adjecent seat to the booked one is free or not', () => {
      const theatreSeats = {
        A: ['A1', 'A2', 'A3'],
        B: ['X', 'B2', 'B3'],
        C: ['X', 'X', 'X'],
        D: ['X', 'D2', 'X'],
        E: ['X', 'X', 'E3'],
      } as TheatreLayout;

      // ---------- Row A --------- //
      expect(checkAdjectentSeatAvailability('A1', theatreSeats)).toBe(
        'Seat to the right is available for booking.'
      );
      expect(checkAdjectentSeatAvailability('A2', theatreSeats)).toBe(
        'Seats to the left and right are available for booking.'
      );
      expect(checkAdjectentSeatAvailability('A3', theatreSeats)).toBe(
        'Seat to the left is available for booking.'
      );

      // ---------- Row B --------- //
      expect(checkAdjectentSeatAvailability('B1', theatreSeats)).toBe(
        'Seat to the right is available for booking.'
      );
      expect(checkAdjectentSeatAvailability('B2', theatreSeats)).toBe(
        'Seat to the right is available for booking.'
      );
      expect(checkAdjectentSeatAvailability('B3', theatreSeats)).toBe(
        'Seat to the left is available for booking.'
      );

      // ---------- Row C --------- //
      expect(checkAdjectentSeatAvailability('C1', theatreSeats)).toBe(
        'This row is fully booked.'
      );
      expect(checkAdjectentSeatAvailability('C2', theatreSeats)).toBe(
        'This row is fully booked.'
      );
      expect(checkAdjectentSeatAvailability('C3', theatreSeats)).toBe(
        'This row is fully booked.'
      );

      // ---------- Row D --------- //
      expect(checkAdjectentSeatAvailability('D1', theatreSeats)).toBe(
        'Seat to the right is available for booking.'
      );
      expect(checkAdjectentSeatAvailability('D2', theatreSeats)).toBe(
        'Both adjacent seats are booked.'
      );

      expect(checkAdjectentSeatAvailability('D3', theatreSeats)).toBe(
        'Seat to the left is available for booking.'
      );

      // ---------- Row E --------- //
      expect(checkAdjectentSeatAvailability('E1', theatreSeats)).toBe(
        'Seat to the right is booked.'
      );

      expect(checkAdjectentSeatAvailability('E3', theatreSeats)).toBe(
        'Seat to the left is booked.'
      );
    });
  });
});
