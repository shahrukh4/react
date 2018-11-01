let appEnvironment = {

    // env: 'beta',

    // env: 'demo',

     env: 'local',

    // env: 'staging'

    //env: 'testing'

},env = { }, pusher = { }

switch (appEnvironment.env){

    case 'beta': 

        env = {

            apiUrl: 'https://demoapi.votemix.com/api/v1',

            

            apiKey: 'xO1Z2hfvYYlpwA19UgHFp6vW6rvtzbwL',

            googleMapApiKey: "AIzaSyChXcR0QCgk17F3qFJtkmGGeiU2vqNsalo",

            chatUrl: 'https://demoserver.votemix.com',

            restServer : "https://demoserver.votemix.com",    

            bucketUrl: 'https://votemix-storage.s3.ap-south-1.amazonaws.com/',

        }

        pusher = {

            "appId":"487792",

            "key":"07b6d968ed82f04ff8a6",

            "secret":"d657b355aae4eb48ce9c",

            "cluster":"ap2",

            "encrypted":true,

            "restServer": "https://testingserver1991.votemix.com",    

            "authEndpoint" : "https://testingserver1991.votemix.com/pusher/auth",

        }

    break;

    case 'demo': 

        env = {

            apiUrl: 'https://demoapi.votemix.com/api/v1',

            apiKey: 'xO1Z2hfvYYlpwA19UgHFp6vW6rvtzbwL',

            googleMapApiKey: "AIzaSyChXcR0QCgk17F3qFJtkmGGeiU2vqNsalo",

            chatUrl: 'https://demoserver.votemix.com',

            bucketUrl: 'https://votemix-storage.s3.ap-south-1.amazonaws.com/',

            restServer : "https://demoserver.votemix.com",    

            authEndpoint : "https://demoserver.votemix.com/pusher/auth",

        }

        pusher = {

            "appId":"554833",

            "key":"be196ee80cc275aa2014",

            "secret":"3d8e3b082e1b358fe62b",

            "cluster":"ap2",

            "encrypted":true,

            "restServer": "https://demoserver.votemix.com",    

            "authEndpoint" : "https://demoserver.votemix.com/pusher/auth",

        }

    break;

    case 'local':

        env = {

            apiUrl: 'http://127.0.0.1:8000/api/v1',

            apiKey: 'xO1Z2hfvYYlpwA19UgHFp6vW6rvtzbwL',

            googleMapApiKey: "AIzaSyChXcR0QCgk17F3qFJtkmGGeiU2vqNsalo",

            chatUrl: 'http://localhost:5000',

            bucketUrl: 'https://votemix-test.s3.us-east-1.amazonaws.com/',

            restServer : "http://localhost:5000" 

        }

        pusher = {

            "appId":"576989",

            "key":"edf374bcc56580063a51",

            "secret":"a860104c57625ce1ab81",

            "cluster":"ap2",

            "encrypted":true,

            "restServer": "http://localhost:5000",    

            "authEndpoint" : "https://testingserver1991.votemix.com/pusher/auth",

        }

    break;

    case 'staging': 

        env = {

            // apiUrl: 'https://stagingapi1990.votemix.com/api/v1',

            apiUrl: 'https://testingapi1991.votemix.com/api/v1',

            apiKey: 'xO1Z2hfvYYlpwA19UgHFp6vW6rvtzbwL',

            googleMapApiKey: "AIzaSyChXcR0QCgk17F3qFJtkmGGeiU2vqNsalo",

            chatUrl: 'https://stagingserver1990.votemix.com',

            bucketUrl: 'https://votemix-stage.s3.us-west-1.amazonaws.com/',

            restServer : "https://stagingserver1990.votemix.com"

        }

        pusher = {

            "appId":"576989",

            "key":"edf374bcc56580063a51",

            "secret":"a860104c57625ce1ab81",

            "cluster":"ap2",

            "encrypted":true,

            "restServer": "https://stagingserver1990.votemix.com",    

            "authEndpoint" : "https://stagingserver1990.votemix.com/pusher/auth",

        }

    break;

    case 'testing':

        env = {

            apiUrl: 'https://testingapi1991.votemix.com/api/v1',

            apiKey: 'xO1Z2hfvYYlpwA19UgHFp6vW6rvtzbwL',

            googleMapApiKey: "AIzaSyChXcR0QCgk17F3qFJtkmGGeiU2vqNsalo",

            chatUrl: 'https://testingserver1991.votemix.com',

            bucketUrl: 'https://votemix-test.s3.us-east-1.amazonaws.com/',

            restServer : "https://testingserver1991.votemix.com"

        }

        pusher = {

            "appId":"576989",

            "key":"edf374bcc56580063a51",

            "secret":"a860104c57625ce1ab81",

            "cluster":"ap2",

            "encrypted":true,

            "restServer": "https://testingserver1991.votemix.com",    

            "authEndpoint" : "https://testingserver1991.votemix.com/pusher/auth",

        }

        break;

    default:

}

export {

    env,

    pusher

}