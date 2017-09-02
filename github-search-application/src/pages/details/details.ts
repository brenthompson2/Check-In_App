import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GitHubProvider} from '../../providers/github/github';

@Component({
	selector: 'page-details',
	templateUrl: 'details.html',
	providers: [GitHubProvider]
})
export class DetailsPage {
	public readme = '';
	public repo;

	constructor(private github: GitHubProvider,
				private nav: NavController,
				private navParams: NavParams) {

		this.repo = navParams.get('repo');

		this.github.getDetails(this.repo).subscribe(
			data => this.readme = data.text(),
			err => {
				if (err.status == 404) {
					this.readme = 'This repo does not have a README';
				} else {
					console.error(err);
				}
			},
			() => console.log('getDetails completed')
		)
	}

}
