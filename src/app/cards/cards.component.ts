import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardTitle = [{
    name:'a',price:2,details:"b",img:"https://lh3.googleusercontent.com/ogw/AOh-ky3rSx8L2EF8ZtgOkVn--c-orWEKOjdiI0x-7r7k=s32-c-mo"
  }
    
    ]
    buttonDetail: boolean[] = [false,false,false,false];

    showDetail(param: any){
      this.buttonDetail[param] = !this.buttonDetail[param];
    }

  constructor() { }

  ngOnInit(): void {
  }

}
