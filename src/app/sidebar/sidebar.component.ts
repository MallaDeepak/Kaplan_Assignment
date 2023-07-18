import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isMenuExpanded = true;
  menuList: { title: string; viewLink: string; image: string; isVisible: boolean; }[] = [];

  constructor() { 
    this.menuList = [
      { title: 'MENU', viewLink: '/menu', image: '../../../assets/images/menu_icon.png', isVisible: true },
      { title: 'CONTENT MANAGEMENT', viewLink: '/content', image: '../../../assets/images/content-management_icon.png', isVisible: true },
      { title: 'COURSES', viewLink: '/courses', image: '../../../assets/images/courses_icon.png', isVisible: true },
    ];
    
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

}
