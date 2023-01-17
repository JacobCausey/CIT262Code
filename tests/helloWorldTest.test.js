import helloWorld from "../utils/helloWorld";

it ("Should return 'Hello World", ()=> {

    const result = helloWorld();

    expect(result).toBe("Hello World");

    });