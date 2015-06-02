import App from '../src/app';


describe('App', () => {
    beforeEach(() => {
        spyOn(App, "constructor")
    });

    it('runs', () => {

        expect(App.constructor).toHaveBeenCalled();
    });

});
