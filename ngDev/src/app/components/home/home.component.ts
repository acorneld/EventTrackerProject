import { DevService } from './../../services/dev.service';
import { Developer } from './../../models/developer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private devSvc: DevService) { }


  devs: Developer[] = [];

  newDev: Developer = new Developer();

  editDev: Developer | null = null;

  selected: Developer | null = null;

  display: Boolean = false;

  showComplete: boolean = false;

  ngOnInit(): void {
    this.loadDevelopers();
    this.displayAllDevs;
  }

  setDeveloper(dev: Developer){
        this.selected = dev;
  }

  displayDev(dev: Developer){
    this.selected = dev;
  }

  displayAllDevs(devs: Developer[]){
      this.devs = devs;
  }


  loadDevelopers(){
    this.devSvc.index().subscribe(
      success => this.devs = success,
      err => console.log('Observable got an error' + err)
    );
  }

  createDev(dev: Developer){
  this.devSvc.create(dev).subscribe(
    data => {
      this.loadDevelopers();
      this.newDev = new Developer();
    },
    err => console.log('Observable Create Error')
  );
  }

  reload(){
    this.devSvc.index().subscribe(
      data => this.devs = data,
      err => console.error(err)
    );
  }

  setEditDev(){
  this.editDev = Object.assign({}, this.selected);
}

  updateDev(dev: Developer){
  this.devSvc.update(dev).subscribe(
    data => {
      this.reload();
      this.editDev = null;
      if(this.selected){
        this.selected = Object.assign({}, dev);
      }
    },
    err => console.error(err)
  );
  }

  deleteDev(id: number){
    this.devSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.error(err)
    );
  }


}
