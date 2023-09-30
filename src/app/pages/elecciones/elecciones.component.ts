import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Eleccion } from 'src/app/model/elecciones';
import { EleccionesServiceService } from 'src/app/service/elecciones.service';

@Component({
  selector: 'app-elecciones',
  templateUrl: './elecciones.component.html',
  styleUrls: ['./elecciones.component.css']
})
export class EleccionesComponent implements OnInit {


  displayedColumns: string[] = ['candidato', 'cantidadDeVotos', 'porcentaje',  'actions']; //se definen columnas
  dataSource: MatTableDataSource<Eleccion>; ///mandamos la data
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private eleccionService: EleccionesServiceService //servicio
  ) { }

  ngOnInit(): void {
// this.eleccionService.getEleccionChange().subscribe(data => {
//       this.createTable(data);
//     });

//     this.eleccionService.getMessageChange().subscribe(data => {
//       this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
//     });

this.eleccionService.GetEleccion().subscribe(data =>{console.log(data)});


    this.eleccionService.findAll().subscribe(data => {
      this.createTable(data);
      console.log(data);
    });

  }
  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(id: number){
    this.eleccionService.delete(id).pipe(switchMap( ()=> {
      return this.eleccionService.findAll();
    }))
    .subscribe(data => {
      this.eleccionService.setEleccionChange(data);
      this.eleccionService.setMessageChange('DELETED!');
    })
    ;
  }

  createTable(customers: Eleccion[]){
    this.dataSource = new MatTableDataSource(customers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
