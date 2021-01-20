import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emergency } from 'src/app/_model/Emergency';
import { Team } from 'src/app/_model/Team';
import { GatewayService } from 'src/app/_services/gateway.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Array<Team>;
  teamColumns = ['name', 'location', 'selectBtn'];

  selectedTeam: Team;
  assignedEmergency: Emergency;

  form: FormGroup;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private gatewayService: GatewayService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.checkLogin()) {
      this.loadData();
    }

    this.form = this.formBuilder.group({
      location: ['', Validators.required]
    }
    );
  }

  loadData() {
    this.gatewayService.getTeams().subscribe(
      (data) => {
        this.teams = data;
        console.log(this.teams);
      }
    );
  }

  checkLogin(): boolean {
    const isLoggedIn = !!this.tokenStorageService.getToken();
    if (!isLoggedIn) {
      this.router.navigate(['/home/login']);
      return false;
    } else {
      return true;
    }
  }

  changeLocation() {
    this.selectedTeam.location = this.form.value.location;
    this.gatewayService.updateTeam(this.selectedTeam).subscribe(
      (res) => {
        // this.selectedTeam = null;
        this.loadData();
      }
    );
  }

  endEmergency() {
    // this.assignedEmergency.status = 5;
    // this.gatewayService.updateEmergency(this.assignedEmergency).subscribe(
    //   (res) => {
    //     this.loadData();
    //   }
    // );
  }

  selectTeam(team: Team) {
    this.selectedTeam = team;
    this.form = this.formBuilder.group({
      location: [this.selectedTeam.location, Validators.required]
    }
    );
    // TODO: get team emergency
  }
}
