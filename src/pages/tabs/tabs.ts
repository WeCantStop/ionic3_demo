import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FindPage } from '../find/find';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'about';
  tab3Root = ContactPage;
  tab4Root = FindPage;
  tab5Root = MyPage;

  constructor() {

  }
}
