import App from '../src/app';
import Base from '../src/base';


describe('App', () => {
    beforeEach(() => {
        spyOn(App, "constructor").and.callThrough();
		spyOn(Base, "constructor").and.callThrough();
		var app = new App();
    });

    it('test constructor', () => {
		expect(App.constructor).toHaveBeenCalled();
        expect(Base.constructor).toHaveBeenCalled();
    });

});
