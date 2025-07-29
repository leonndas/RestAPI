import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  contactsUrl = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.contactsUrl}`);
  }
}
