import Base from '../src/base';


export default class App extends Base {
    constructor (){
		super();
        this.name = 'test';
        console.log(this.name);
    }
}
