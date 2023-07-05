import { Component, OnInit } from '@angular/core';
import {RegistrationRequest} from './registration-request'
@Component({
  selector: 'app-srf',
  templateUrl: './srf.component.html',
  styleUrls: ['./srf.component.css']
})
export class SrfComponent implements OnInit {
  public regRequest: RegistrationRequest;
constructor()
 { 

}
ngOnInit()
{
  this.regRequest = {
   name:'',
    dob:'',
    Yog:'',
    nationality:'',
    phoneno:'',
    emailid:''
  };
}
}
