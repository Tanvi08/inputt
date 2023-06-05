import { Input, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-entity-details',
  
  
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent {
  [x: string]: any;

  @Input()
  massage!: string;
  name= "Tanvi";
  entitys="any";
  cols: any;
  TableHeight: any;



  address= {
    lien1: 'Aspencourt',
    lien2: 'USA',
  
  }
  
  constructor(private  Users:UsersService) { }
 
ngOnInit(){

  console.log(this.address);



this.Users.getUsers().subscribe((data) =>{
  console.log(data)
})
}


/* prepareColumns(cols: any) {
      if (cols != null && cols.length > 0) {
        for (let i = 0; i < cols.length; i++) {
          let colsInfo = { field: "", header: "" };
          colsInfo.field = cols[i] ;
          colsInfo.header = cols[i].toUpperCase().replace("_" , " ");
          this.cols.push(colsInfo);
          //this.dropDown[i] = [];
          console.log(this.cols);
        }
      }
      console.log(this.cols)
    }  */
  

  

  
}

// subscribe to the Observable to make the HTTP call
/* getEntity(){
this.entiyService.getEntity().subscribe((data: any) => {
  // we received our posts!
  console.log(data);
});
} */


 /*  prepareDropDowns(){

    for (let i = 0; i < this.entitys.length; i++) {
      for(let j=0 ;j< this.col?.length;j++)
      {
        
        this.dropDown[j].push({label: this.entitys[i][this.col[j].field], 
          value: this.entitys[i][this.col[j].field]});
  
      }
      
  } */
 /*  ngOnInit(){
    console.log(this.name)
  } */
  
  

   

function getEntity() {
  throw new Error('Function not implemented.');
}

