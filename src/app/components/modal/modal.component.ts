import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display = 'none';
  constructor() { }

  ngOnInit() {
  }
   openModal(){

          this.display='block';
    
       }
       onCloseHandled(){

            this.display='none';
      
         }

}
