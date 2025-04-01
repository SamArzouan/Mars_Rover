class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rover {
    constructor(position, direction, grid) {
        this.position = position;
        this.direction = direction;
        this.grid = grid;
        this.directionStrategies = {
            N: new MoveNorth(),
            S: new MoveSouth(),
            E: new MoveEast(),
            W: new MoveWest(),
        };
    }

    move() {
        const newPosition = new Position(this.position.x, this.position.y);
        
        this.directionStrategies[this.direction].move(newPosition);

        if (this.grid.inPerimeter(newPosition.x, newPosition.y)) {
            this.position = newPosition;
        }
    }

    moveBackward() {
        const newPosition = new Position(this.position.x, this.position.y);
        this.directionStrategies[this.direction].moveBackward(newPosition);

        if (this.grid.inPerimeter(newPosition.x, newPosition.y)) {
            this.position = newPosition;
        }
    }

    turnLeft() {
        this.direction = this.directionStrategies[this.direction].turnLeft();
    }

    turnRight() {
        this.direction = this.directionStrategies[this.direction].turnRight();
    }
}

class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    inPerimeter(x, y) {
        return x >=0 && x <= this.width && y >=0 && y <= this.height;
    }
}

class MoveNorth {
    move(position) {
        position.y += 1
    }

    moveBackward(position) {
        position.y -= 1;
    }

    turnLeft() {
        return "W"
    }

    turnRight() {
        return "E"
    }
}

class MoveSouth {
    move(position) {
        position.y -= 1
    }

    moveBackward(position) {
        position.y += 1;
    }

    turnLeft() {
        return "E"
    }

    turnRight() {
        return "W"
    }
}

class MoveEast {
    move(position) {
        position.x += 1
    }

    moveBackward(position) {
        position.x -= 1;
    }

    turnLeft() {
        return "N"
    }

    turnRight() {
        return "S"
    }
}

class MoveWest {
    move(position) {
        position.x -= 1
    }

    moveBackward(position) {
        position.x += 1;
    }

    turnLeft() {
        return "S"
    }

    turnRight() {
        return "N"
    }
}

module.exports = { Rover, Position, Grid, MoveNorth, MoveSouth, MoveEast, MoveWest };
