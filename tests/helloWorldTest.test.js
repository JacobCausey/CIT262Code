import HelloWorld from '../utils/HelloWorld';

it ("Should return 'Hello World", ()=> {

    const result = HelloWorld();

    expect(result).toBe("Hello World");

    });