import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  option1: boolean  = false;
  option2: boolean  = false;
  option3: boolean  = false;
  range: number = 0;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  radio: string = "";
  settings: any;

  constructor() {}

  ngOnInit() {
    this.getPreferences;
  }

  async getPreferences(){
    const { value } = await Preferences.get({ key: 'userSettings' });

    if (value) {
      const settings = JSON.parse(value);
      this.option1 = this.settings.option1;
      this.option2 = this.settings.option2;
      this.option3 = this.settings.option3;
      this.range = this.settings.range;
      this.checkbox1 = this.settings.checkbox1;
      this.checkbox2 = this.settings.checkbox2;
      this.checkbox3 = this.settings.checkbox3;
      this.radio = settings.radio;
    } else {
      this.createPreferences();
    }
  }

  async createPreferences(){
    const userSettings = {
      option1 : this.option1,
      option2 : this.option2,
      option3 : this.option3,
      range : this.range,
      checkbox1 : this.checkbox1,
      checkbox2 : this.checkbox2,
      checkbox3 : this.checkbox3,
      radio : this.radio
    }

  await Preferences.set({ key: 'userSettings', value: JSON.stringify('userSettings')});
  }

  async resetPreferences(){
    this.option1 = false;
    this.option2 = false;
    this.option3 = false;
    this.range = 0;
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
    this.radio = "";

    this.createPreferences();
  }

}
