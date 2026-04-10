import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  slugify(text: string): string {
    if (!text) return '';

    return text
      .toString()               
      .toLowerCase()            
      .trim()                   
      .replace(/\s+/g, '-')     
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-')   
      .replace(/^-+/, '')       
      .replace(/-+$/, '');
  }
}