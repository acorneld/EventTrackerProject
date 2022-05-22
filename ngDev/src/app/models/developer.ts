export class Developer {

  id: number;
  name: string;
  active: boolean;
  caffeination: number;
  anxiety: number;
  productivity: number;

  constructor(
  devId: number = 0,
  name: string = '',
  active: boolean = false,
  caffeination: number = 0,
  anxiety: number = 0,
  productivity: number = 0
  ){
  this.id = devId;
  this.name = name;
  this.active = active;
  this.caffeination = caffeination;
  this.anxiety = anxiety;
  this.productivity = productivity;
  }
}
