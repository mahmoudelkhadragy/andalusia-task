import { Component, OnInit } from '@angular/core';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  faTachometerAlt = faTachometerAlt;
  faUserPlus = faUserPlus;
  faSearch = faSearch;
  faFolder = faFolder;

  constructor() {}

  ngOnInit(): void {}
}
