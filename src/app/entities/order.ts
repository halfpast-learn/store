import { Item } from "./item";

export class Order {
    order_id: number = 0;
    status: string = "";
    comment: string = "";
    user_owner: number = 0;
    items: Item[] = [];
}
