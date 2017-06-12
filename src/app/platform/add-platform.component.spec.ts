import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPlatformComponent} from './add-platform.component';

describe('AddPlatformComponent', () => {
    let component: AddPlatformComponent;
    let fixture: ComponentFixture<AddPlatformComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddPlatformComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPlatformComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
