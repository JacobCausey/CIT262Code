import fetch from 'node-fetch';

it ("Should get a login token", async () => {

    const loginResponse = await fetch('https://dev.stedi.me/login', {


        method: 'POST',
        headers: {
            'Content-Type': 'application-text'
        },

        body: JSON.stringify({
            "userName": "googlemail123@gmail.com",
            "password": "errorcode"
        })

    })
    expect(loginResponse.status).toBe(401);
})