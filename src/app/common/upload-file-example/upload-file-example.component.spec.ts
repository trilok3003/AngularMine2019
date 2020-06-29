import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileExampleComponent } from './upload-file-example.component';

describe('UploadFileExampleComponent', () => {
  let component: UploadFileExampleComponent;
  let fixture: ComponentFixture<UploadFileExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
