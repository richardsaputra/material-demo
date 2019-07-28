import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicModel } from '../model/topic.model';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  getAllTopicsUrl = "http://localhost:8080/getAllTopics" 

  constructor(private http: HttpClient) { }

  getAllTopics() {
    return this.http.get<TopicModel[]>(this.getAllTopicsUrl);
  }
}
