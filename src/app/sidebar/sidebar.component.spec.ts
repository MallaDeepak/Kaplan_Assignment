import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        MatSidenavModule,
        RouterTestingModule,
        BrowserAnimationsModule
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

  it('should have initial value of isMenuExpanded set to true', () => {
    expect(component.isMenuExpanded).toBe(true);
  });

  it('should toggle isMenuExpanded when toggleMenu is called', () => {
    // Initially, isMenuExpanded is true
    expect(component.isMenuExpanded).toBe(true);

    // Call the method to toggle isMenuExpanded
    component.toggleMenu();
    fixture.detectChanges();

    // After the method call, isMenuExpanded should be false
    expect(component.isMenuExpanded).toBe(false);

    // Call the method again to toggle isMenuExpanded
    component.toggleMenu();
    fixture.detectChanges();

    // After the method call, isMenuExpanded should be true again
    expect(component.isMenuExpanded).toBe(true);
  });

});




