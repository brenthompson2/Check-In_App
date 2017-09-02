import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

}
