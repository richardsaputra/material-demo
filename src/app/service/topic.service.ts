import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicModel } from '../model/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  getAllTopicsUrl = "http://localhost:8080/getAllTopics";
  addTopicUrl = "http://localhost:8080/addTopic";
  updateTopicUrl = "http://localhost:8080/updateTopic";

  constructor(private http: HttpClient) { }

  getAllTopics() {
    return this.http.get<TopicModel[]>(this.getAllTopicsUrl);
  }

  addTopic(request: TopicModel) {
    return this.http.post(this.addTopicUrl, request);
  }

  updateTopic(request: TopicModel, nameToUpdate: string) {
    return this.http.put(this.updateTopicUrl+"/"+nameToUpdate, request);
  }
}
