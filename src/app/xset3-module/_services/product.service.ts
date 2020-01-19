import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<string[]>(`/products`);
    }

    getById(id: number) {
        return this.http.get<any>(`/products/${id}`);
    }

    create(product: any) {
        return this.http.post<any>(`/products`, product);
    }

    update(product: any) {
        return this.http.put<any>(`/products/${product.id}`, product);
    }

    delete(id: number) {
        return this.http.delete<any>(`/products/${id}`);
    }
}