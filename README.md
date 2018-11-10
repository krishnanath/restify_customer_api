#Restify Customer API
**Install Dependency**

```
npm install restify restify-error mongoose mongoose-timestamp

npm i -D nodemon
```

**Connect MLAB DB config.js**

```
module.exports ={
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',

    MONGODB_URI: process.env.MONGODB_URI ||
    'mongodb://<dbuser>:<dbpassword>@ds157843.mlab.com:57843/customer_api'
}
```
