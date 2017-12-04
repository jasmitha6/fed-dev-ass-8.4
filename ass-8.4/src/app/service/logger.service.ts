import { Injectable } from '@angular/core';
// defining class LoggerService for displaying differnt message 
@Injectable()
export class LoggerService {

  constructor() { }

  info(textMessage: string) {
    console.info(textMessage);
  };

  warning(textMessage: string) {
    console.warn(textMessage);
  };

  log(textMessage: string) {
    console.log(textMessage);
  };

  clear(textMessage: string) {
    console.clear();
  }


}
