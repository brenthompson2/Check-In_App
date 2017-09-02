import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

/*
  Service for getting data from the GitHub API
*/

@Injectable()
export class GitHubProvider {

	constructor(private http: Http) {
	}

	getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
	}

	getDetails(repo) {
		let headers = new Headers();
		headers.append('accept', 'application/vnd.github.VERSION.html');
		return this.http.get(`${repo.url}/readme`, { headers: headers });
	}
}