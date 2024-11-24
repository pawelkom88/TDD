type RowLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
type SeatIdentifier = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Seat = `${RowLetter}${SeatIdentifier}` | 'X';

export type TheatreLayout = {
  [Row in RowLetter]: Seat[];
};

export const initialTheatreLayout: TheatreLayout = {
  A: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
  B: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
  C: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
  D: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
  E: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
  F: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
  G: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
  H: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
  I: ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'],
  J: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
};

const bookedSeatIdentifier = 'X';

const getSelectedRowLetter = (chosenSeat: Seat): RowLetter =>
  chosenSeat.charAt(0) as RowLetter;

export const isSeatTaken = (
  chosenSeat: Seat,
  allSeats: TheatreLayout
): boolean => {
  const selectedRow = getSelectedRowLetter(chosenSeat);
  return !allSeats[selectedRow].includes(chosenSeat);
};

export const bookSeat = (
  chosenSeat: Seat,
  allSeats: TheatreLayout
): boolean => {
  if (isSeatTaken(chosenSeat, allSeats)) return false;

  const chosenRow = getSelectedRowLetter(chosenSeat);
  const seatsFromChosenRow = allSeats[chosenRow];

  seatsFromChosenRow.forEach((seat, seatIndex) => {
    if (seat === chosenSeat) {
      seatsFromChosenRow[seatIndex] = bookedSeatIdentifier;
    }
  });

  return true;
};

export const bookMultipleSeats = (
  selectedSeats: Seat[],
  allSeats: TheatreLayout
): boolean => {
  selectedSeats.forEach((selectedSeat) => {
    if (isSeatTaken(selectedSeat, allSeats)) {
      throw Error(`Seat ${selectedSeat} has already been booked`);
    }
  });

  selectedSeats.forEach((selectedSeat) => bookSeat(selectedSeat, allSeats));
  return true;
};

const getAllSeats = (seatsByRow: TheatreLayout): Seat[] =>
  Object.values(seatsByRow).flat();

export const countAvailableSeats = (seatsByRow: TheatreLayout): number =>
  getAllSeats(seatsByRow).filter((seat) => seat !== bookedSeatIdentifier)
    .length;

export const calculatePercentageOfAvailableSeats = (
  allSeats: TheatreLayout
): number => {
  const totalSeats = getAllSeats(allSeats).length;
  const availableSeats = countAvailableSeats(allSeats);
  const percentage = (availableSeats / totalSeats) * 100;

  return Math.round(percentage);
};

export const calculateNumberOfAvailableSeatsInRow = (
  row: RowLetter,
  allSeats: TheatreLayout
): number => {
  const seatsInRow = allSeats[row];
  const availableSeats = seatsInRow.filter(
    (seat) => seat !== bookedSeatIdentifier
  ).length;
  return availableSeats;
};

const messages = {
  fullyBooked: 'This row is fully booked.',
  bothAvailable: 'Seats to the left and right are available for booking.',
  leftAvailable: 'Seat to the left is available for booking.',
  rightAvailable: 'Seat to the right is available for booking.',
  firstSeatBooked: 'Seat to the right is booked.',
  lastSeatBooked: 'Seat to the left is booked.',
  bothBooked: 'Both adjacent seats are booked.',
};

const getSeatAvailability = (
  chosenSeat: Seat,
  seatsFromChosenRow: Seat[]
): Record<string, boolean> => {
  const seatNumber = parseInt(chosenSeat.slice(1), 10);
  const chosenSeatIndex = seatNumber - 1;

  const seatToTheLeftIndex = chosenSeatIndex - 1;
  const seatToTheRightIndex = chosenSeatIndex + 1;
  const isAtStartOfRow = chosenSeatIndex === 0;
  const isAtEndOfRow = chosenSeatIndex === 2;

  const leftSeatAvailable =
    seatToTheLeftIndex >= 0 && seatsFromChosenRow[seatToTheLeftIndex] !== 'X';

  const rightSeatAvailable =
    seatToTheRightIndex < seatsFromChosenRow.length &&
    seatsFromChosenRow[seatToTheRightIndex] !== 'X';

  return {
    leftSeatAvailable,
    rightSeatAvailable,
    isAtStartOfRow,
    isAtEndOfRow,
  };
};

export const checkAdjectentSeatAvailability = (
  chosenSeat: Seat,
  allSeats: TheatreLayout
) => {
  const chosenRowLetter = getSelectedRowLetter(chosenSeat);
  const seatsFromChosenRow = allSeats[chosenRowLetter];

  const {
    leftSeatAvailable,
    rightSeatAvailable,
    isAtStartOfRow,
    isAtEndOfRow,
  } = getSeatAvailability(chosenSeat, seatsFromChosenRow);

  const isRowFullyBooked =
    calculateNumberOfAvailableSeatsInRow(chosenRowLetter, allSeats) === 0;

  switch (true) {
    case isRowFullyBooked:
      return messages.fullyBooked;
    case leftSeatAvailable && rightSeatAvailable:
      return messages.bothAvailable;
    case leftSeatAvailable:
      return messages.leftAvailable;
    case rightSeatAvailable:
      return messages.rightAvailable;
    case isAtStartOfRow && !rightSeatAvailable && !leftSeatAvailable:
      return messages.firstSeatBooked;
    case isAtEndOfRow && !leftSeatAvailable && !rightSeatAvailable:
      return messages.lastSeatBooked;
    default:
      return messages.bothBooked;
  }
};
