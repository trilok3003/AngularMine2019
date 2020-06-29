import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dyanamic-form',
  templateUrl: './dyanamic-form.component.html',
  styleUrls: ['./dyanamic-form.component.css']
})
export class DyanamicFormComponent implements OnInit {
  addForm: FormGroup;

  ingredients: any;

  response: any;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      rows: this.fb.array([])
    });

  }

  ngOnInit() {
    this.ingredients = [{ id: 1, name: 'Flour', price: 2, quantity: 100}, { id: 2, name: 'Sugar', price: 5, quantity: 100 }, { id: 3, name: 'baking soda', price: 3, quantity: 100 }];

    this.initGroup();
  }

  onDeleteRow(rowIndex) {
    let rows = this.addForm.get('rows') as FormArray;
    rows.removeAt(rowIndex);

    this.disableRows(rows);
  }

  initGroup() {
    let rows = this.addForm.get('rows') as FormArray;
    rows.push(this.fb.group({
      ingredient_id: ['', Validators.required],
      unit_price: new FormControl({ value: '', disabled: true }, Validators.required),
      quantity: ['', Validators.required],
    }))

    this.disableRows(rows);
  }

  disableRows(rows){
    rows.controls.forEach((control, index) => {
      if(index !== rows.controls.length - 1){
        control.controls['ingredient_id'].disable();
        control.controls['quantity'].disable();
      }else{
        control.controls['ingredient_id'].enable();
        control.controls['quantity'].enable();
      }
    })
  }

  patchValues(id,i) {
    let x = (<FormArray>this.addForm.controls['rows']).at(i);
    console.log(x);

    x.patchValue({
      unit_price: this.ingredients[id - 1].price
    });
  }

  onSelectIngredient(event,i): void {
    const formData = {
      ingredient_id: event.target.value
    }
    console.log(formData,i);
    this.patchValues(event.target.value,i);
  }

}
