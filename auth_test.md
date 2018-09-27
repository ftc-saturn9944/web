# Testing the JWT authentication

Before trying this, make sure you're in the `web` folder with a command prompt. Then do `npm update` to make sure you get the new packages I just added.
Then `npm start` to start the server.

First try to access the stats protected resource, without a JWT...

```
curl -i http://localhost:5000/api/stats
```

You get thrown out...

```
HTTP/1.1 403 Forbidden
X-Powered-By: Express
Date: Thu, 27 Sep 2018 01:23:29 GMT
Connection: keep-alive
Transfer-Encoding: chunked
```

So, you need to get a valid token. First lets try with bad credentials:

```
curl -i -X POST -d username=abc -d password=def http://localhost:5000/api/login
```

You get thrown out...

```
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
Vary: Accept-Encoding
Date: Thu, 27 Sep 2018 01:25:28 GMT
Connection: keep-alive
```

Next, we go back to the login with the proper user/pass:

```
curl -i -X POST -d username=test -d password=test http://localhost:5000/api/login
```

This time, you get a JWT back:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 192
ETag: W/"c0-lujAWg1xIOoMhV4aL3RCPP29RDM"
Vary: Accept-Encoding
Date: Thu, 27 Sep 2018 01:26:40 GMT
Connection: keep-alive

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzYXR1cm45OTQ0IiwidXNlciI6InRlc3QiLCJpYXQiOjE1MzgwMTIxMjM2MjAsImV4cCI6MTUzODI3MTMyMzYyMH0.DgoaRkFvPyEX9vuDGU4PyxjsEnoF12w2ZpqheC5GHVg"}
```

So now, we can access the protected resource by passing the JWT in the Authorization header:

```
curl -i -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzYXR1cm45OTQ0IiwidXNlciI6InRlc3QiLCJpYXQiOjE1MzgwMTIxMjM2MjAsImV4cCI6MTUzODI3MTMyMzYyMH0.DgoaRkFvPyEX9vuDGU4PyxjsEnoF12w2ZpqheC5GHVg" http://localhost:5000/api/stats
```

And this time, it works...

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 59
ETag: W/"3b-9Ig8N0CGMCkQT9GuZnshEFwGNcg"
Vary: Accept-Encoding
Date: Thu, 27 Sep 2018 01:35:51 GMT
Connection: keep-alive

{"result":"Good job you made it. But I have no stats yet."}
```

I made the token expire after three days. It's up to us to change that if we want. Shouldn't really be a problem for our usage.

