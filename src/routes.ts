// src/form/form.controller.ts
import { Controller, Post, Body, Res } from '@nestjs/common';
 
import { Response } from 'express';
import { CreateUserDto } from './sch';
import { FormService } from './formServies';

import { Injectable } from '@nestjs/common';
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('formFill')
  async formFill(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const savedUser = await this.formService.create(createUserDto);
      return res.status(200).json({
        savedUser,
        message: 'Saved successfully!',
      });//rugegrggbefvjrgbebfbkj
    } catch (error:any) {
      return res.status(500).json({
        message: 'Error saving user',
        error: error.message,
      });
    }
  }
}
