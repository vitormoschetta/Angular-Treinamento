import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'age'];
  dataSource = listaClientes;
}



@Component({
  selector: 'app-table2',
  templateUrl: './table.pagination.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent2 {
  displayedColumns: string[] = ['name', 'age'];
  dataSource = new MatTableDataSource<Clientes>(listaClientes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}




export class Clientes {
  name: string;
  age: number;
}
const listaClientes: Clientes[] = [
  { name: 'Hydrogen', age: 18 },
  { name: 'Helium', age: 25 },
  { name: 'Lithium', age: 32 },
  { name: 'Beryllium', age: 21 },
  { name: 'Boron', age: 58 },
  { name: 'Carbon', age: 34 },
  { name: 'Nitrogen', age: 70 },
];

