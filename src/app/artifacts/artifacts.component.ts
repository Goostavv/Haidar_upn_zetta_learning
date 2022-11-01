import { Component, OnInit } from '@angular/core';
//import { Task } from 'src/app/model/task';
//import { service } from 'src/app/service/crud.service';
@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {

  artifactsObj : Artifacts = new Artifacts();
  artifactsArr : Artifacts[] = [];

  addArtifactsValue : string = '';
  editArtifactsValue : string = '';


  constructor() { }

  ngOnInit(): void {
    this.editArtifactsValue = '';
    this.addArtifactsValue = '';
    this.artifactsObj = new Artifacts();
    this.artifactsArr = [];
    this.getAllArtifacts();
  }
  getAllArtifacts() {
    this.service.getAllArtifacts().subscribe(res => {
      this.artifactsArr = res;
    }, err => {
      alert("Unable to get list of Artifacts");
    });
  }

  addArtifacts() {
    this.artifactsObj.artifacts_name = this.addArtifactsValue;
    this.service.addArtifacts(this.artifactsObj).subscribe(res => {
      this.ngOnInit();
      this.addArtifactsValue = '';
    }, err => {
      alert(err);
    })
  }

  editArtifacts() {
    this.artifactsObj.artifacts_name = this.editArtifactsValue;
    this.service.editArtifacts(this.artifactsObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteArtifacts(eartifacts : Artifacts) {
    this.service.deleteArtifacts(eartifacts).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete artifacts");
    });
  }

  call(eartifacts : Artifacts) {
    this.artifactsObj = eartifacts;
    this.editArtifactsValue = eartifacts.artifacts_name;
  }
}
