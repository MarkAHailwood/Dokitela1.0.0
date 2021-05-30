import { Component } from '@angular/core';

@Component({
  selector: 'Tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {
  status: string = 'Next player: X';
  renderSquare(i) {
    return `<Square />
    <div>
      <div className= "status" > { status } < /div>
      < div className = "board-row" >
        { this.renderSquare(0) }
        { this.renderSquare(1) }
        { this.renderSquare(2) }
      </div>
      < div className = "board-row" >
        { this.renderSquare(3) }
        { this.renderSquare(4) }
        { this.renderSquare(5) }
      </div>
      < div className = "board-row" >
        { this.renderSquare(6) }
        { this.renderSquare(7) }
        { this.renderSquare(8) }
      </div>
    < /div>
    );`;
  }
}
