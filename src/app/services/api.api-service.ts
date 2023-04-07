import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user';
import { Item } from '../entities/item';
import { Tag } from '../entities/tag';
import { Role } from '../entities/role';
import { Order } from '../entities/order';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_SERVER: String = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  /* users */
  public readUsers() {
    return this.httpClient.get<User[]>(`${this.API_SERVER}/users`);
  }
  public readUser(user_id: number) {
    return this.httpClient.get<User>(`${this.API_SERVER}/users/${user_id}`);
  }
  public readUserByName(login: string) {
    return this.httpClient.get<User>(`${this.API_SERVER}/users/name/${login}`);
  }
  public readUserOrders(user_id: number) {
    return this.httpClient.get<User>(`${this.API_SERVER}/users/${user_id}/orders`);
  }
  public createUser(user: User) {
    return this.httpClient.post<User>(`${this.API_SERVER}/users/create`, user);
  }
  public updateUser(user: User) {
    return this.httpClient.patch<User>(
      `${this.API_SERVER}/users/${user.user_id}/update`,
      user
    );
  }
  public deleteUser(id: number) {
    return this.httpClient.delete(`${this.API_SERVER}/users/${id}/delete`);
  }
  /* items */
  public readItems() {
    return this.httpClient.get<Item[]>(`${this.API_SERVER}/items`);
  }
  public readItemsByTags(ids: number[]) {
    return this.httpClient.get<Item[]>(
      `${this.API_SERVER}/tags/${ids.toString()}/allItems`
    );
  }
  public readItem(item_id: number) {
    return this.httpClient.get<Item>(`${this.API_SERVER}/items/${item_id}`);
  }
  /* tags */
  public readTags() {
    return this.httpClient.get<Tag[]>(`${this.API_SERVER}/tags`);
  }
  public readTagsByRole(id: number) {
    return this.httpClient.get<Tag[]>(`${this.API_SERVER}/roles/role/${id}`);
  }
  /* roles */
  public readRoles() {
    return this.httpClient.get<Role[]>(`${this.API_SERVER}/roles`);
  }
  public readRole(id: number) {
    return this.httpClient.get<Role>(`${this.API_SERVER}/roles/${id}`);
  }
  /* orders */
  public createOrder(order: Order) {
    this.httpClient.post<Order>(`${this.API_SERVER}/orders`, order).subscribe();
  }
}
