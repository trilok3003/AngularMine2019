import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoadInCanvasComponent } from './image-load-in-canvas.component';

describe('ImageLoadInCanvasComponent', () => {
  let component: ImageLoadInCanvasComponent;
  let fixture: ComponentFixture<ImageLoadInCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLoadInCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLoadInCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
