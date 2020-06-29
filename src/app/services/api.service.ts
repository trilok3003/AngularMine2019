import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private httpClient: HttpClient) { }
  public createCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiURL}`,customer);
  }
public updateCustomer(customer: Customer){
  return this.httpClient.put(`${this.apiURL}${customer.id}`,customer);
}
public deleteCustomer(id: number){
  return this.httpClient.delete(`${this.apiURL}${id}`);
}
public getCustomerById(id: number){
  return this.httpClient.get(`${this.apiURL}${id}`);
}
public getCustomers(){
  return this.httpClient.get<Customer[]>(`${this.apiURL}`);
}

}
