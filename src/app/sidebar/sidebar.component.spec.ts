import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        MatSidenavModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the respective component when the menu is clicked', () => {
    const menuButton = fixture.debugElement.query(By.css('.menu-button'));
    menuButton.nativeElement.click();
    fixture.detectChanges();
  
    // Assert that the respective component is open or navigate to the correct URL
    // You can use additional matchers and assertions based on your specific requirements
    // For example, you can use the RouterTestingModule to navigate and test the URL
  });

});




