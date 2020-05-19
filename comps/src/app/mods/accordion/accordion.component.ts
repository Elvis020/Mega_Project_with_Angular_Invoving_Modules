import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickIndex(index: number) {
    if( index === this.openIndex ) {
      this.openIndex = -1;
    } else {
      this.openIndex = index;
    }
  }

}
