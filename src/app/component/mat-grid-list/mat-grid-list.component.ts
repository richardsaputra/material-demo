import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/model/topic.model';
import { TopicService } from 'src/app/service/topic.service';

@Component({
  selector: 'app-mat-grid-list',
  templateUrl: './mat-grid-list.component.html',
  styleUrls: ['./mat-grid-list.component.css']
})
export class MatGridListComponent implements OnInit {

  topics: TopicModel[];
  topic: TopicModel;
  id: string;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    return this.topicService.getAllTopics().subscribe(data => this.topics = data);
  }

  onSubmit(name, duration, description) {
    this.topicService.addTopic(new TopicModel(this.id, name, duration, description)).subscribe(error => console.log(error));
    location.reload();
  }

  onUpdate(nameToUpdate, name, duration, description) {
    this.topicService.updateTopic(new TopicModel(this.id, name, duration, description), nameToUpdate).subscribe(error => console.log(error));
    location.reload();
  }

}
