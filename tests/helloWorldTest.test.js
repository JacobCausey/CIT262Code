import HelloWorld from '../utils/HelloWorld.js';

it ("Should return 'Hello World", ()=> {

    const result = HelloWorld();

    expect(result).toBe("Hello World!");

    });