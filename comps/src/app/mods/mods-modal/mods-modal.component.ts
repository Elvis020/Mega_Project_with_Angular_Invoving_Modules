import { Component, OnInit,ElementRef,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mods-modal',
  templateUrl: './mods-modal.component.html',
  styleUrls: ['./mods-modal.component.css']
})
export class ModsModalComponent implements OnInit {
  @Output() close = new EventEmitter;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();

  }

  onClickClose() {
    this.close.emit();

  }

}
