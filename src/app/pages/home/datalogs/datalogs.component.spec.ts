import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalogsComponent } from './datalogs.component';

describe('DatalogsComponent', () => {
  let component: DatalogsComponent;
  let fixture: ComponentFixture<DatalogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
