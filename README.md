# Restify Customer API

**Install Dependency**

```
npm install restify restify-error mongoose mongoose-timestamp

npm i -D nodemon

npm i restify-jwt-community jsonwebtoken bcryptjs
```

**Connect MLAB DB config.js**

```
module.exports ={
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',

    MONGODB_URI: process.env.MONGODB_URI ||
    'YOUR_OWN_MONGO_URI'
}
```

# API Endpoints

GET /customers
GET /customers/:id
POST (Protected) /customers
PUT (Protected) /customers/:id
DELETE (Protected) /customers/:id
