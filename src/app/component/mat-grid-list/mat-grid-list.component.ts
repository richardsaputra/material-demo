import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/model/topic.model';
import { InquiryService } from 'src/app/service/inquiry.service';

@Component({
  selector: 'app-mat-grid-list',
  templateUrl: './mat-grid-list.component.html',
  styleUrls: ['./mat-grid-list.component.css']
})
export class MatGridListComponent implements OnInit {

  topics: TopicModel[];

  constructor(private inquiry: InquiryService) { }

  ngOnInit() {
    return this.inquiry.getAllTopics().subscribe(data => this.topics = data);
  }

}
