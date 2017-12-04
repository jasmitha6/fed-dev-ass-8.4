import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
import { DropDownService } from 'app/service/drop-down.service';
import { LoggerService } from 'app/service/logger.service';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent implements OnInit {
  /**Creating global variable. */
  title: string;
  name: string;
  lastName: string;
  arrayList: any[] = [];
  genderArray: any[] = [];

  constructor(private _listService: ListService, private _dropDownService: DropDownService, private _logger: LoggerService) { }

  ngOnInit() {
    this.genderArray = this._dropDownService.getDropDown();
  }
// defining submit function with name ,lastname amd gender

  submit(Name: string, LastName: string, Gender: string) {
    const model = {
      name: Name,
      lastName: LastName,
      gender: Gender
    };
    this._listService.addList(model);
    this._logger.log('Adding Data');
    this.arrayList = this._listService.getList();
  }
}




