import { Order } from "./order";

export class User {
  user_id?: number;
  username: string = '';
  password: string = '';
  role?: number;
  orders?: Order[] = [];
}
