import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";

@Controller()
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    @Get()
    getAllItems() {
        return this.itemService.getAllItems()
    }

    @Post()
    addItem(@Body() CreateItemDto) {
        return this.itemService.addItems(CreateItemDto)
    }


    @Get(":id")
    getOneItem(@Param("id") id: string) {
        return this.itemService.getOneItem(id)
    }

    @Put("update_item/:id")
    updateItem(@Param("id") id: number, @Body() UpdateItemDto: UpdateItemDto) {

        return this.itemService.updateItem(id, UpdateItemDto)
    }

    @Delete("delete_item/:id")
    deleteItem(@Param("id") id: number,) {

        return this.itemService.deleteItem(id)

    }
}