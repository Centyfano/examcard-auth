import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  regNo: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.title.setTitle('Home - Login');
  }
  login() {
    this.router.navigate(['/examcard', this.regNo], {
      relativeTo: this.route,
    });
  }

  ngOnInit() {}
}
