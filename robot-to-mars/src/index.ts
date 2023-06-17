/* Nasa has hired us as a company to launch our first robt to Mars.

   Our robot can move 1 meter in each direction with the following commands:
   Left(L), Right(R), UP(U) and Down(D).

   Nasa is preparing a list of movements instructions to our robot from the load station in the example marked as point 0.
   Nevertheless, Nasa is concerned about the possibility that in case of a emergency the robot can return to the base in time.
   They want us to evaluate the number of movements in a simulator and tell them the maximum quantity of instructions
   that we should send to the robot when it's in its farthest point from the base (point 0).

   Calculate the maximum number of instructions that we can send to the robot in order to return to the base.

   Complete the function above to accomplish this task. The function will receive a list of execution plans,
   evaluate each plan y return a list with the maximum number of instructions.
*/

enum Direction {
  LEFT = 'L',
  RIGHT = 'R',
  UP = 'U',
  DOWN = 'D'
}

const listOfMovements: Direction[] = [Direction.RIGHT, Direction.RIGHT, Direction.UP, Direction.UP]

function maxInstructions(movements: Direction[]): number {
  let x:number = 0, y:number = 0, max:number = 0
  movements.forEach((movement: Direction) => {
    switch (movement) {
      case Direction.LEFT:
        x--
        break
      case Direction.RIGHT:
        x++
        break
      case Direction.UP:
        y++
        break
      case Direction.DOWN:
        y--
        break
    }
    const distance = Math.abs(x) + Math.abs(y)
    if (distance > max) {
      max = distance
    }
  })

  return max
}

console.log(maxInstructions(listOfMovements))
