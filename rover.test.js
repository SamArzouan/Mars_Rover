// rover.test.js

const { Rover, Position } = require('./rover.js');

describe('Rover', () => {
    const createRover = (initialDirection) => new Rover(new Position(0, 0), initialDirection);
    describe('move', () => {
        it.each`
      initialDirection | expectedPosition
      ${'N'}           | ${{ x: 0, y: 1 }}
      ${'S'}           | ${{ x: 0, y: -1 }}
      ${'E'}           | ${{ x: 1, y: 0 }}
      ${'W'}           | ${{ x: -1, y: 0 }}
    `('should move in the correct direction', ({ initialDirection, expectedPosition }) => {
            const rover = createRover(initialDirection);
            rover.move();
            expect(rover.position).toEqual(expectedPosition);
        });
    });

    describe('moveBackward', () => {
        it.each`
      initialDirection | expectedPosition
      ${'N'}           | ${{ x: 0, y: -1 }}
      ${'S'}           | ${{ x: 0, y: 1 }}
      ${'E'}           | ${{ x: -1, y: 0 }}
      ${'W'}           | ${{ x: 1, y: 0 }}
    `('should move backward in the correct direction', ({ initialDirection, expectedPosition }) => {
            const rover = createRover(initialDirection);
            rover.moveBackward();
            expect(rover.position).toEqual(expectedPosition);
        });
    });

    describe('turnLeft', () => {
        it.each`
      initialDirection | expectedDirection
      ${'N'}           | ${'W'}
      ${'S'}           | ${'E'}
      ${'E'}           | ${'N'}
      ${'W'}           | ${'S'}
    `('should turn left and face the correct direction', ({ initialDirection, expectedDirection }) => {
            const rover = createRover(initialDirection);
            rover.turnLeft();
            expect(rover.direction).toBe(expectedDirection);
        });
    });

    describe('turnRight', () => {
        it.each`
      initialDirection | expectedDirection
      ${'N'}           | ${'E'}
      ${'S'}           | ${'W'}
      ${'E'}           | ${'S'}
      ${'W'}           | ${'N'}
    `('should turn right and face the correct direction', ({ initialDirection, expectedDirection }) => {
            const rover = createRover(initialDirection);
            rover.turnRight();
            expect(rover.direction).toBe(expectedDirection);
        });
    });
});
