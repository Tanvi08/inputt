import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  name = 'Tanvi';

  address= {
    lien1: 'Aspencourt',
    lien2: 'USA',
  
  }
ngOnInit(){
  console.log(this.address)
}

}
