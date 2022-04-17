import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user!:User;
  repos!:Repo;

  
  constructor(private http:HttpClient) { 
    this.user = new User("",0,0,0,"","","");
    this.repos = new Repo("","","","",new Date());
  }

  getProfile(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    }

    let userUrl = 'https://api.github.com/users/'+username+'?ApiUrl='+environment.ApiUrl+ "&client_secret="+environment.clientSecret;

    let promise = new Promise((resolve,reject) =>{
      this.http.get<ApiResponse>('https://api.github.com/users/').toPromise().then
      ((response:any) => {
        this.user = response.user;
        



        resolve(response)
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }

    getRepo(username:string){
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
        language:string;
        created_at:Date
        
      }
      let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?ApiUrl='+environment.ApiUrl+ '&client_secret='+environment.clientSecret;
      let promise = new Promise((resolve,reject) =>{
        this.http.get<ApiResponse>('https://api.github.com/users/').toPromise().then
        ((response:any) => {
            this.repos = response.repos;
            
          resolve(response)
        },
        error=>{
          this.repos.name = "We couldn’t find any repositories matching the name given"
  
          reject(error)
          })
        })
        return promise;

    }
  }