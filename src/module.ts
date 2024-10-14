// src/form/form.module.ts

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FormController } from "./routes";
import { User, UserSchema } from "./modelsch";
import { FormService } from "./formServies";

 

@Module({
  imports: [

    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
