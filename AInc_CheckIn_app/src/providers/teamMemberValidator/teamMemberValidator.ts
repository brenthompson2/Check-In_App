import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Provider for validating the checkboxes in the teamMembersPage
*/

@Injectable()
export class TeamMemberValidator {

	constructor(public http: HttpModule) {
	}

	validateCheckboxes(boxes: FormControl){
		var valid 	: boolean = false,
			k		: any;

		for (k in boxes.value){
			var val = boxes.value[k];

			if (val) {
				valid = true;
				break;
			}
		}

		if (valid) {
			return null;
		}

		return {
			checkboxRequired: true
		};
	}
}