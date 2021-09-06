import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  getName = '';
  getNumber = '';
  getAddress = '';
  getMemberName: any;
  
  constructor(private fb:FormBuilder) { }
  
  registerForm = this.fb.group({
  fullName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
  number: ['', [Validators.required,Validators.pattern('[- +()0-9]+')]],
  Address: ['', Validators.required],
  player: this.fb.array([this.pushPlayer()])
  });
  ngOnInit(): void {
  }
  
  get player() {
    return this.registerForm.get('player') as FormArray;
  }
  pushPlayer(){
    return this.fb.group({
      playerName: ['', [Validators.required ,Validators.pattern("[a-zA-Z ]*")]],
      playerNo: ['', [Validators.required,Validators.pattern('[- +()0-9]+')]],
      playerHome: ['', Validators.required]
    })
  }
  addPlayer() {
    this.player.push(this.pushPlayer());
  }
  removePlayer() {
    this.player.removeAt(this.player.length - 1);
  }
  onSubmit() {
    this.getName = this.registerForm.get('fullName')?.value;
    this.getNumber = this.registerForm.get('number')?.value;
    this.getAddress = this.registerForm.get('Address')?.value;
    
   
    
  }
}
