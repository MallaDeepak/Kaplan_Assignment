import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { of, throwError } from 'rxjs';
import { MenuService } from '../shared/services/menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MenuComponent ],
      providers: [MenuService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService); // Inject the MenuService

    // Mock the getMenuData method of menuService to return a known value for testing
    spyOn(menuService, 'getMenuData').and.returnValue(
      of([
        { title: 'Book 1', authors: ['Author 1'], publisher: 'Publisher 1', publishedDate: '2021-01-01' },
        { title: 'Book 2', authors: ['Author 2'], publisher: 'Publisher 2', publishedDate: '2022-02-02' },
        { title: 'Book 3', authors: ['Author 3'], publisher: 'Publisher 3', publishedDate: '2023-03-03' },
      ])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch books on calling fetchBooks()', () => {
    component.fetchBooks();

    expect(menuService.getMenuData).toHaveBeenCalled();
    expect(component.books$).toBeTruthy(); // Assuming books$ is declared in the component
  });

  it('should apply filter correctly on calling applyFilter()', () => {
    component.searchKey = 'Book 1'; // Set a search key for testing
    component.applyFilter();

    expect(menuService.getMenuData).toHaveBeenCalled();
    expect(component.books$).toBeTruthy(); // Assuming books$ is declared in the component

    component.books$.subscribe((books) => {
      expect(books.length).toBe(1); // Only one book should match the search key
      expect(books[0].title).toContain('Book 1');
    });
  });

  it('should create a new book correctly on calling createNewBook()', () => {
    component.createNewBook();

    expect(menuService.getMenuData).toHaveBeenCalled();
    expect(component.books$).toBeTruthy(); // Assuming books$ is declared in the component

    component.books$.subscribe((books) => {
      expect(books.length).toBe(4); // After creating a new book, the total count should be 4
      expect(books[3].title).toBe('Custom Book'); // Check if the newly created book is added correctly
    });
  });
});

