class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rover {
    constructor(position, direction) {
        this.position = position;
        this.direction = direction;
        this.directionStrategies = {
            N: new MoveNorth(),
            S: new MoveSouth(),
            E: new MoveEast(),
            W: new MoveWest(),
        };
    }

    move() {
        this.directionStrategies[this.direction].move(this);
    }

    moveBackward() {
        this.directionStrategies[this.direction].moveBackward(this);
    }

    turnLeft() {
        this.direction = this.directionStrategies[this.direction].turnLeft();
    }

    turnRight() {
        this.direction = this.directionStrategies[this.direction].turnRight();
    }
}

class MoveNorth {
    move(rover) {
        rover.position.y += 1
    }

    moveBackward(rover) {
        rover.position.y -= 1;
    }

    turnLeft() {
        return "W"
    }

    turnRight() {
        return "E"
    }
}

class MoveSouth {
    move(rover) {
        rover.position.y -= 1
    }

    moveBackward(rover) {
        rover.position.y += 1;
    }

    turnLeft() {
        return "E"
    }

    turnRight() {
        return "W"
    }
}

class MoveEast {
    move(rover) {
        rover.position.x += 1
    }

    moveBackward(rover) {
        rover.position.x -= 1;
    }

    turnLeft() {
        return "N"
    }

    turnRight() {
        return "S"
    }
}

class MoveWest {
    move(rover) {
        rover.position.x -= 1
    }

    moveBackward(rover) {
        rover.position.x += 1;
    }

    turnLeft() {
        return "S"
    }

    turnRight() {
        return "N"
    }
}

module.exports = { Rover, Position, MoveNorth, MoveSouth, MoveEast, MoveWest };
