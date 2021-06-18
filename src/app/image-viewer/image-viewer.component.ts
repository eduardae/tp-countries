import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input()
  url: string;

  @Output()
  selectEvent = new EventEmitter();

  constructor() {
    this.url = '';
  }

  ngOnInit(): void {
  }

  selectCountry() {
    this.selectEvent.emit(this.url);
  }

}
