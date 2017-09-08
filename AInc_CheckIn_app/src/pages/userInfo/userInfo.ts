import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramPage } from '../programs/program';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
/*import { SlackMessaging } from '../../providers/slackIntegration/slackMessaging';*/


@Component({
	selector: 'page-userInfo',
	templateUrl: 'userInfo.html',
})

export class UserInfoPage {
	public currentProgram;
	public currentMemberFormGroup: FormGroup;
	public currentUserInfoFormGroup : FormGroup;
	private ourHttp: Http;
	public TEAMMEMBERS = [
		{id: 1, name:'Emily Wehrle',
			description: 'Director of Operations',
			team: 'main',
			imageURL: 'assets/img/TeamMembers/emilywehrle_wall.gif',
			imageAlt: 'Emily Wehrle'
		},
		{id: 2, name:'Brian Raney',
			description: 'Co-Founder',
			team: 'main',
			imageURL: 'assets/img/TeamMembers/brianraney_wall.gif',
			imageAlt: 'Brian Raney'
		},
		{id: 3, name:'Amanda Murray',
			description: 'Director of Marketing',
			team: 'Marketing',
			imageURL: 'assets/img/TeamMembers/teamMember.png',
			imageAlt: 'Amanda Murray'
		},
		{id: 4, name:'Keith McMunn',
			description: 'Director of Fellowship',
			team: 'Fellowship',
			imageURL: 'assets/img/TeamMembers/teamMember.png',
			imageAlt: 'Keith McMunn'
		},
		{id: 5, name:'Nick Such',
			description: 'Co-Founder',
			team: 'main',
			imageURL: 'assets/img/TeamMembers/nicksuch_wall.gif',
			imageAlt: 'Nick Such'
		},
		{id: 6, name:'Kyle Raney',
			description: 'Development Team',
			team: 'Team Alpha',
			imageURL: 'assets/img/TeamMembers/kyleraney_wall.gif',
			imageAlt: 'Kyle Raney'
		}
	];

	constructor(private navCtrl : NavController,
				private navParameters : NavParams,
				private userInfoFormBuilder : FormBuilder,
				private http: Http) {

		this.currentProgram = this.navParameters.get('currentProgram');
		this.currentMemberFormGroup = this.navParameters.get('memberFormGroup');

		this.ourHttp = http;

		this.currentUserInfoFormGroup = this.userInfoFormBuilder.group ({
			name : ['', Validators.required],
			email : ['', Validators.minLength(8)],
			reason : ['']
		});
	}

	sendSlackMessage() {
		var url = "https://hooks.slack.com/services/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";
		var messageText =
			{
				"text": "Testing Message from Check-In App"
			}

		return this.ourHttp.post(url, messageText)
			.subscribe();

		/*submitUserInfo();*/
	}

	submitUserInfo() {
		this.navCtrl.push(ProgramPage, { currentProgram: this.currentProgram,
										memberFormGroup: this.currentMemberFormGroup,
										userInfoFormGroup: this.currentUserInfoFormGroup });
	}
}
