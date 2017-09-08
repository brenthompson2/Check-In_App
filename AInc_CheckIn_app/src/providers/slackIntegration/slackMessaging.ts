import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Provider for sending messages to Slack from this app
*/

@Injectable()
export class SlackMessaging {
	private ourHttp: Http;
	public slackIncomingWebHookUrl = 'https://hooks.slack.com/services/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';

	constructor(private http: Http) {
		this.ourHttp = http;
	}

	public postToSlack(payload): Observable<any>{

		return this.ourHttp.post(this.slackIncomingWebHookUrl, payload);
	}
}