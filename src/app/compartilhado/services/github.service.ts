import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Repository } from 'src/app/exemplos/app-github/models/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly baseurl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserRepositories(username: string): Observable<Repository[]> {
    const url = `${this.baseurl}/users/${username}/repos`;

    return this.http.get<Repository[]>(url);
  }
}
