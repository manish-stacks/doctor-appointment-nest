import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true })
  phone: string;
  @Prop({ required: true,enum: ['user', 'admin'] })
  role: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  state: string;
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  pinCode: string;
  @Prop({ required: true })
  password: string;
  patients: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
