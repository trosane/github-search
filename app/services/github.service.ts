import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'f0b6ffcc133fc2ea3ca5';
    private client_secret = '051a7c52dbaf7518e256592cf89cf9db43caec38';

    constructor(private _http:Http) {
        console.log('Github Service Ready...');
        this.username = 'trosane';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id+'&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.client_id+'&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    
    updateUser(username:string){
        this.username = username;
    }

}