import { Tag } from "./tag";

export class Item {
    item_id: number = 0;
    description: string = "";
    price: number = 0;
    tags: Tag[] = [];
}
