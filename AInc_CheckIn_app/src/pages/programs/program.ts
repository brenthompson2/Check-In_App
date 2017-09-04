import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamMembersPage } from '../teamMembers/teamMembers';

@Component({
	selector: 'page-program',
	templateUrl: 'program.html',
})

export class ProgramPage {
	public currentProgram;

	constructor(private navCtrl: NavController,
				private navParameters: NavParams) {

		this.currentProgram = this.navParameters.get('currentProgram');
	}

	isExpected(program) {
		this.navCtrl.push(TeamMembersPage, { currentProgram: program });
	}

	notExpected(program) {
		this.navCtrl.push(TeamMembersPage, { currentProgram: program });
	}

}
