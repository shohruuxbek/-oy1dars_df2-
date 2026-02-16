import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";


@Injectable()
export class ItemService {
    private items: any = [
        {
            id: 1,
            titla: "laptop"
        }
    ]

    async getAllItems(): Promise<CreateItemDto[]> {
        return this.items
    }

    async addItems(createItemDto: CreateItemDto): Promise<{ message: string }> {
        this.items.push(createItemDto)
        return { message: "Added new Item" }
    }

    async getOneItem(id: string): Promise<CreateItemDto> {
        const foundedItem = this.items.find((item) => item.id === +id)

        if (!foundedItem) throw new NotFoundException("Item not found")
        return foundedItem
    }

    async updateItem(id: number, updateItemDto: UpdateItemDto): Promise<CreateItemDto> {

        const foundedItem = this.items.findIndex((item) => item.id === +id)

        if (foundedItem === -1) throw new NotFoundException("Item not found")


        this.items[foundedItem] = updateItemDto
        return this.items[foundedItem]
    }

    async deleteItem(id: number): Promise<{ message: string }> {

        const foundedItem = this.items.findIndex((item) => item.id === +id)

        if (foundedItem === -1) throw new NotFoundException("Item not found")


            this.items.splice(foundedItem, 1)

        return { message: "Deleted item" }


    }
}
