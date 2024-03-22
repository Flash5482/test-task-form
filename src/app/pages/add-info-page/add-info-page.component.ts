import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-info-page',
  templateUrl: './add-info-page.component.html',
  styleUrls: ['./add-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
