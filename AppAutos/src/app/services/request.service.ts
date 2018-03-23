import { Injectable } from '@angular/core';
import { Response, Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
    private url: string;

    constructor(private _http: Http) {
        this.url = 'https://my-json-server.typicode.com/FelipeDev/RepoOptimisa/cars';
    }


    getCars() {
        let response = this._http.get(this.url);
        let responseAsObjet = response.map(res => res.json());
        return responseAsObjet;
    }

}

