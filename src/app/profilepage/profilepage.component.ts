import { Component, OnInit, TemplateRef } from '@angular/core';
import { Profile } from '../profile';
// import {BsModalRef, BsModalService} from "ngx-bootstrap";
//import {AuthService} from "../../services/auth/auth.service";
import { ActivatedRoute } from "@angular/router";
//import {FileUploader} from "ng2-file-upload";
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private _profilesservice: ProfilesService) { }
  profile: any
  ngOnInit() {



    this._profilesservice.getUserInfo("6053f09145a0303044202142").subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
    })
  }


}

