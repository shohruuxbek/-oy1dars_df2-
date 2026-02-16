import { Module } from "@nestjs/common";
import { ItemModule } from "./item/item.module";
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
    
    imports: [
        ItemModule,
        ProductModule,
        AuthModule,
  
    ]
})

export class AppModule {}