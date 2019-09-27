import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  date: string;
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];
listofstudent = [
  {id:"1", name:"icha",age:"20"},
  {id:"2", name:"denok",age:"23"},
  {id:"3", name:"sri utami",age:"10"},
  {id:"4", name:"mbok darmi",age:"40"},
  {id:"5", name:"jeniffer",age:"30"},
  {id:"6", name:"limbuk",age:"22"}];
  queryString;
   customer = {
    "id": 1,
    "firstName": "First name",
    "lastName": "Last name",
    "email": "name@email.com",
    "phone": "(387) 592-6773",
    "city": "City",
    "country": "Country",
    "title": "Title"
  }
  searchText = '';
  showDialog;
  formObject: any;
  constructor(public api:ApiService) { 
    this.formObject = [
      {
        label: 'Receiving',
        key: 'RECEIVING_TYPE',
        disabled: false,
        selectedIndex: 0,
        values: [
          {
            label: 'Aggregate',
            key: 'AGGREGATE',
            disabled: false,
            children: []
          }, {
            label: 'Fuel',
            key: 'FUEL',
            disabled: false,
            children: []
          }, {
            label: 'General',
            key: 'GENERAL',
            disabled: false,
            children: [
              {
                label: 'Type',
                key: 'TYPE',
                disabled: false,
                selectedIndex: 0,
                values: [
                  {
                    label: 'Purchase',
                    key: 'PURCHASE',
                    disabled: false,
                    children: []
                  },
                  {
                    label: 'Rent',
                    key: 'RENT',
                    disabled: false,
                    children: []
                  },
                  {
                    label: 'Returned',
                    key: 'RETURNED',
                    disabled: false,
                    children: []
                  },
                  {
                    label: 'Transferred',
                    key: 'TRANSFERRED',
                    disabled: false,
                    children: [
                      {
                        label: 'Transfer In',
                        key: 'TRANSFER_IN',
                        selectedIndex: 1,
                        disabled: false,
                        values: [
                          {
                            label: 'Same Environment',
                            key: 'SAME_ENVIRONMENT',
                            disabled: false,
                          }, {
                            label: 'Different Environment',
                            key: 'DIFFERENT_ENVIRONMENT',
                            disabled: false,
                          }
                        ]
                      }
                    ]
                  },
                  {
                    label: 'F.O.C.',
                    key: 'FOC',
                    disabled: false,
                    children: []
                  }
                ]
              }, {
                label: 'Transportation',
                key: 'TRANSPORTATION',
                disabled: false,
                selectedIndex: 0,
                values: [
                  {
                    label: 'Included',
                    key: 'INCLUDED',
                    disabled: false,
                    children: []
                  }, {
                    label: 'Separate',
                    key: 'SEPARATE',
                    disabled: false,
                    children: []
                  }
                ]
              }, {
                label: 'Weight Required',
                key: 'WEIGHT_REQUIRED',
                disabled: false,
                selectedIndex: 0,
                values: [
                  {
                    label: 'Yes',
                    key: 'YES',
                    disabled: false,
                    children: []
                  }, {
                    label: 'No',
                    key: 'NO',
                    disabled: false,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

  }

  ngOnInit() {
      this.api.getCustomers().subscribe((res)=>{
        console.log(res);
      }); 
      this.api.getCustomerById(1).subscribe((res)=>{
        console.log(res);
      }); 
//     this.api.createCustomer(this.customer).subscribe((res)=>{
//       console.log("Created a customer");
// }, err=> console.log(err));
// this.api.updateCustomer(this.customer).subscribe((res)=>{
//   console.log("Updated the customer");
// });
// this.api.deleteContact(1).subscribe((res)=>{
//   console.log("Deleted a customer");
// });
  }
  onDateUpdate(date: string): void {
    this.date = date;
  }
 

}
