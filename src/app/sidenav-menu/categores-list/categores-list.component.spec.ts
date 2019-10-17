import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoresListComponent } from './categores-list.component';
import { By } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CategoresListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoresListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      providers:[CategoresListComponent]
    })
    .compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(CategoresListComponent);
      const component = fixture.componentInstance;
      const dailog = fixture.debugElement.injector.get(MatDialog);
      return { fixture, component,  dailog };
    }

    it('should create', async(() => {
      const { component } = setup();
      expect(component).toBeTruthy();
    }));

    it('should call the onSelect', async(() => {
      const { component, fixture } = setup();


      component.typesOfGoods = [
        {
          name: 'Классика',
          goods: [
            {
              name: 'Одиссея',
              author: 'Гомер',
              // tslint:disable-next-line: max-line-length
              pictureUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABuCAMAAACzxqVeAAAA1VBMVEUAAAD3izf5nET4jzv0WB31ZCT2gjHybyT0diz3aSj2hzXyYR38YyJzMRj1nkrydij////5lT/yZyH0fSz4fDDd3d33giP5+fmOjo6bm5tpaWnV1dW7u7tMTEyrq6vHx8fn5+dZWVmPORX85c7vZziBgYEzMzMoKCg9PT3w8PBzc3NhYWEbGxuSUCGVZjXltJQQEBCyRh2RWSqRRR39Vxz6uX30tYrtpYT5wJDxoIP78unrzKftuJHqmm71iUH51LHuVwD44Nf1mlfyv4P0x5LwjWXydT8HgPkkAAACSUlEQVRYhe3WbW/aMBAA4COE0IYOLkCwTRLHwAx5AZoF1tGua/f+/3/SHNpNnTppgTAVNPvDyUmcR77TRQ7UzUbNMmrNM+PiFew62larXjPPbcuwQUMa0pCG/h9oKOXoIJDr+QlE2c/L6UyFaC8oARACA44gceaLWHIhyHwPSEJKgIXcDb04QBaGzId4tBcUIHCfyziJI4ymag4Y7A6FKjU/FnMmFTqjsRgyEvM9arQd2dOZ2tE+xX4+gmftcKKdrSENaUhDGvp3UCAIK6IrgsydAmMwddF/CK4rEmBCyDIQ+gkmkMYSRxlGEXIg4XBUhHSOlEYJSpeVgFJUJ2wI0gWioLkQXJ3cANswwyQFGkNYBkrUG9wDHhYQ4Z7PCxqGZAsRdfoLgmWgAGfg+eBJIAEQBJ9HOFW/RhgVULHC56V2BG7s4ZShcNHNkEKoUFQhVCFDVWe1Za8UBIxH6nVKKQGqckoBKE8eAqUskENIRqX7SBZ/erRaH+0wNKQhDWlIQy8FvckXy+VitVyMHyf5eJXny3yVL8fFrVzdWo1/LVos8j9DDbPWMZxO12iurb5j9C4ca920bMPqWo5p1ntGvdk0ztfbRS2jv+736sZfINPuKKjl2OaZguyu/QQqnm0hcwfIOjroYKnpGp1iarpGpwgduNiDVs9ZHwB6e/XuanPdqAwNJnhzg/i6co0GE3L5flIRsh6h2yOD8MNdVWhbo/vJx8HmU/Udff6yubz9ev2tVrmP2vb3u3bjEJ/I72f/MXxrxwS9SGo/APEUrSlGKke1AAAAAElFTkSuQmCC'
            }
          ]
        }
      ];

      fixture.detectChanges();
      spyOn(component, 'onSelect');
      expect(component.onSelect).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      el.click();
      expect(component.onSelect).toHaveBeenCalled();
    }));

    it('should call dialog ', async(() => {
      const { fixture, dailog, component } = setup();

      component.typesOfGoods = [
        {
          name: 'Классика',
          goods: [
            {
              name: 'Одиссея',
              author: 'Гомер',
              // tslint:disable-next-line: max-line-length
              pictureUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABuCAMAAACzxqVeAAAA1VBMVEUAAAD3izf5nET4jzv0WB31ZCT2gjHybyT0diz3aSj2hzXyYR38YyJzMRj1nkrydij////5lT/yZyH0fSz4fDDd3d33giP5+fmOjo6bm5tpaWnV1dW7u7tMTEyrq6vHx8fn5+dZWVmPORX85c7vZziBgYEzMzMoKCg9PT3w8PBzc3NhYWEbGxuSUCGVZjXltJQQEBCyRh2RWSqRRR39Vxz6uX30tYrtpYT5wJDxoIP78unrzKftuJHqmm71iUH51LHuVwD44Nf1mlfyv4P0x5LwjWXydT8HgPkkAAACSUlEQVRYhe3WbW/aMBAA4COE0IYOLkCwTRLHwAx5AZoF1tGua/f+/3/SHNpNnTppgTAVNPvDyUmcR77TRQ7UzUbNMmrNM+PiFew62larXjPPbcuwQUMa0pCG/h9oKOXoIJDr+QlE2c/L6UyFaC8oARACA44gceaLWHIhyHwPSEJKgIXcDb04QBaGzId4tBcUIHCfyziJI4ymag4Y7A6FKjU/FnMmFTqjsRgyEvM9arQd2dOZ2tE+xX4+gmftcKKdrSENaUhDGvp3UCAIK6IrgsydAmMwddF/CK4rEmBCyDIQ+gkmkMYSRxlGEXIg4XBUhHSOlEYJSpeVgFJUJ2wI0gWioLkQXJ3cANswwyQFGkNYBkrUG9wDHhYQ4Z7PCxqGZAsRdfoLgmWgAGfg+eBJIAEQBJ9HOFW/RhgVULHC56V2BG7s4ZShcNHNkEKoUFQhVCFDVWe1Za8UBIxH6nVKKQGqckoBKE8eAqUskENIRqX7SBZ/erRaH+0wNKQhDWlIQy8FvckXy+VitVyMHyf5eJXny3yVL8fFrVzdWo1/LVos8j9DDbPWMZxO12iurb5j9C4ca920bMPqWo5p1ntGvdk0ztfbRS2jv+736sZfINPuKKjl2OaZguyu/QQqnm0hcwfIOjroYKnpGp1iarpGpwgduNiDVs9ZHwB6e/XuanPdqAwNJnhzg/i6co0GE3L5flIRsh6h2yOD8MNdVWhbo/vJx8HmU/Udff6yubz9ev2tVrmP2vb3u3bjEJ/I72f/MXxrxwS9SGo/APEUrSlGKke1AAAAAElFTkSuQmCC'
            }
          ]
        }
      ];

      fixture.detectChanges();
      const dailogSpy =  spyOn( dailog, 'open').and.callThrough();
      expect( dailogSpy ).not.toHaveBeenCalled();
      const el  = fixture.debugElement.query(By.css('div')).nativeElement;
      el.click();
      expect( dailogSpy ).toHaveBeenCalledTimes(1);
    }));

  });
});
