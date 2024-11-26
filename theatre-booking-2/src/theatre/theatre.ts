import { FIRST_ROW, referenceOf, rowOf } from './array-reference';
import { Row, SeatReference } from './types';

export class Theatre {
  allocatedSeats: boolean[][] = Theatre.createEmptyAuditorium();

  isAllocated(seatReference: SeatReference): boolean {
    const arrayRef = referenceOf(seatReference);
    return this.allocatedSeats[arrayRef.row][arrayRef.col];
  }

  allocate(seatReference: SeatReference) {
    const arrayRef = referenceOf(seatReference);
    this.allocatedSeats[arrayRef.row][arrayRef.col] = true;
  }

  countOfBooked() {
    return this.allocatedSeats
      .map((row) => row.filter(Boolean).length)
      .reduce((prev, curr) => prev + curr, 0);
  }

  countOfSpareSeatsByRow(rowLetter: Row) {
    const row = rowLetter.charCodeAt(0) - FIRST_ROW;
    const numberOfSeatsInRow = this.allocatedSeats[row].length;
    const numberOfBookedSeats = this.allocatedSeats[row].filter(Boolean).length;
    return numberOfSeatsInRow - numberOfBookedSeats;
  }

  checkAdjecentSeatsAvailability() {
    for (let rowIndex = 0; rowIndex < this.allocatedSeats.length; rowIndex++) {
      let consecutiveAvailableSeats = 0;
      const row = this.allocatedSeats[rowIndex];

      for (let seatIndex = 0; seatIndex < row.length; seatIndex++) {
        if (!row[seatIndex]) {
          consecutiveAvailableSeats++;
          if (consecutiveAvailableSeats >= 5) {
            return rowOf(rowIndex);
          }
        } else {
          consecutiveAvailableSeats = 0;
        }
      }
    }
    return null;
  }

  clearAllBookings() {
    this.allocatedSeats = Theatre.createEmptyAuditorium();
  }

  private static createEmptyAuditorium() {
    return Array.from({ length: 10 }, () => Array(10).fill(false));
  }
}
