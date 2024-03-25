# react-assignment
Home assignment to be discussed about in an interview

# react app with cognito authentication

* Create a react app which does a login to AWS Cognito

details of user pool are sent to you in an email

# render a list of json objects from cloud api with authentication

* In GET request following header should be present

```Authorization: Bearer <token>```

Data from cloud API looks like this. Create a component which lists following fields in a table:

* os_version
* test_protocol
* device
* start_time_readable


```
[
    {
        "user": "sami",
        "id": "1710143411636-8305e490-30fb-4896-9393-e71b0a0ede85",
        "data": {
            "device_id": "UP1A.231005.007",
            "os_version": 34,
            "test_parameters": "ytr",
            "datasets": [
                {
                    "filename": "accelerometer.bin",
                    "quantity": "elapsed-time-fSensor,x,y,z",
                    "datatype": "float",
                    "sensortype": "accelerometer",
                    "bits": 32,
                    "units": "Elapsed time since previous sample (ms). All values are in SI units (m/s^2).",
                    "rows": 8025,
                    "cols": 4
                }
            ],
            "test_protocol": "test",
            "steps_measured": "0",
            "rests_recorded": "0",
            "distance_Measured": "0",
            "model": "SM-A546B",
            "end_time_unix": 1710143394940,
            "user": "sami",
            "device": "samsung",
            "start_time_readable": "Mon Mar 11 09:48:54 GMT+02:00 2024",
            "start_time_unix": 1710143334859,
            "end_time_readable": "Mon Mar 11 09:49:54 GMT+02:00 2024"
        },
        "study": "hiihto"
    }
]
 ```




All necessary information will be sent in an email:

* url of the API
* username and password
* cognito user pool details

# Pull Request

* Fork this repository and create a pull request
* remember to add gitignore
* remember not to reveal url and user pool details in pull request. use .env
