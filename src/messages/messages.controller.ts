import {
  Body,
  Controller,
  Get,
  Injectable,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public ser: MessagesService) {}

  @Get()
  listMessages() {
    return this.ser.findAll();
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    console.log(id);
    const message = await this.ser.findOne(id);
    if (!message) {
      throw new NotFoundException('The message was not found');
    }
    return message;
  }

  @Post()
  postMessages(@Body() body: CreateMessageDto) {
    console.log(body);
    return this.ser.create(body.content);
  }
}
