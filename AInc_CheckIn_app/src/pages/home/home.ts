import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramPage } from '../programs/program';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	PROGRAMS = [
		{id: 1, name:'Awesome Inc',
			description: 'The Main Entrepenuarial Epicenter',
			imageURL: '../../assets/img/logo.png',
			imageAlt: 'Awesome Inc Logo'
		},
		{id: 2, name:'Awesome Inc University',
			description: 'The Bootcamps and Classes for both youth and adults',
			imageURL: '../../assets/img/Awesome Inc U - Logo_header.png',
			imageAlt: 'Awesome Inc U Logo'
		},
		{id: 3, name:'Awesome Inc Fellowship',
			description: 'The incubator programs for start-ups',
			imageURL: '../../assets/img/fellowship_logo.png',
			imageAlt: 'Fellowship Logo'
		},
		{id: 4, name:'Awesome Inc Team Alpha',
			description: 'The Interns that make Awesome Inc possible',
			imageURL: '../../assets/img/teamalpha.png',
			imageAlt: 'Team Alpha Logo'
		}
	];

	constructor(public navCtrl: NavController) {

	}

	goToProgram(program) {
		this.navCtrl.push(ProgramPage, { currentProgram: program });
	}
}
