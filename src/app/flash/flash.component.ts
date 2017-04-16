import { FlashService } from './../general/flash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  message: any;
  constructor(private flashService: FlashService) { }

  /**
   * Subscribe to the flash service observable and print message accordingly.
   */
  ngOnInit() {
    this.flashService.getMessage().subscribe((message: any) => { this.message = message; });
  }

}
