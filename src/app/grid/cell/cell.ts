import { Component } from '@angular/core';
import { CellType } from '../cell-type/cell-type';
import { Position } from '../position/position';

@Component({
  selector: 'app-cell'
})
export class Cell {

  public position: Position;
  public cellType: CellType;

  public rhs: number;
  public distance: number;
  public estimatedDistance: number;
  public heuristicDistance: number;

  public color: String;
  public previous: Cell;
  public isOpen: boolean;

  constructor(row: number, col: number, cellType = CellType.Free) {
    this.position = new Position(col, row);
    this.cellType = cellType;
  }

  /*################################################
            Getter / Setter - CellTyp
  #################################################*/

  set type(cellType) {
    this.cellType = cellType;
  }
  get type() {
    return this.cellType;
  }

  /*################################################
        Abgleichsfunktionen für CellStatus(Typ)
  #################################################*/

  get isFree() {
    return this.cellType === CellType.Free;
  }
  get isBlocked() {
    return this.cellType === CellType.Blocked;
  }
  get isVisited() {
    return this.cellType === CellType.Visited;
  }
  get isCurrent() {
    return this.cellType === CellType.Current;
  }
  get isStart() {
    return this.cellType === CellType.Start;
  }
  get isGoal() {
    return this.cellType === CellType.Goal;
  }
  get isBlockable() {
    return this.isFree || this.isCurrent ||this.isVisited;
  }

  /*################################################
             Positionsausgabe der Zelle
  #################################################*/

  public toString() {
    let result = `[${this.position.x},${this.position.y}]`;
  
    if (this.rhs !== undefined) {
      result += " | rhs = " + this.rhs;
    }
    if(this.distance !== undefined) {
      result += " | distance = " + this.distance;
    }
  }

}
