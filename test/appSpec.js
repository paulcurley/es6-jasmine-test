import App from '../src/app';


describe('App', () => {
    beforeEach(() => {
        spyOn(App, "constructor").and.callThrough();
		var app = new App();
    });

    it('runs', () => {
		
        expect(App.constructor).toHaveBeenCalled();
    });

});
