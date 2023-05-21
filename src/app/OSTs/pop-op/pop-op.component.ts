import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pop-op',
  templateUrl: './pop-op.component.html',
  styleUrls: ['./pop-op.component.css'],
})
export class PopOpComponent implements OnInit {
  vedio_id: any;
  apiLoaded = false;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.vedio_id = this.activatedRoute.snapshot.paramMap.get('vedio_id');
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  //
}
