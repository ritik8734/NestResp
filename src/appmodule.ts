import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { FormModule } from './module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/your_database_name'), // Update with your  
    FormModule,
  ],
})
export class AppModule {}
