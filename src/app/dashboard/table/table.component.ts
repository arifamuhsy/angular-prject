import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData = new MatTableDataSource([]);
  userDataColumn;

  dataUser = [
    { user: 'Arifa', address: 'Jakarta', email: 'arifa@gmail.com'},
    { user: 'Anas', address: 'Bekasi', email: 'anas@gmail.com'},
    { user: 'Edwin', address: 'Tanggerang', email: 'edwin@gmail.com'},
  ];

  getDataUser(){
    this.userDataColumn = ['user','address', 'email', 'action'];
    this.userData.data = this.dataUser;
  }

  deleteUser(element, index: Number){
    console.log(element, 'element');
    this.userData.data.splice(element, 1);
    this.userData.filter = '';
  }

}
