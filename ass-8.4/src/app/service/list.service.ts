import { Injectable } from '@angular/core';
import { LoggerService } from 'app/service/logger.service';

@Injectable()
export class ListService {

  Arraylist: any[] = [];

  constructor(private _logger: LoggerService) { }

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
    this.Arraylist.unshift(arrayListDetail);
  }

  /**Get the list list from the array. */
  getList(): any[] {
    this._logger.info("Retriving Data")

    return this.Arraylist;
  }

}
