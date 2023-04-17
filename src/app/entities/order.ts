import { Item } from "./item";

export class Order {
    order_id: number = 0;
    status: string = "";
    address: string = "";
    contact_information: string = "";
    user_owner: number = 0;
    items: Item[] = [];
}
