import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent {
  @Input()
  massage: string="abc"

}
