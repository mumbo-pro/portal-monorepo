## Endpoints

```sh
curl \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"name": "octocat@octomac","email": "alphaolomi0@gmail.com","password": "killerapp"}' \
  http://localhost:3333/api/users/register



curl \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{"email": "alphaolomi0@gmail.com","password": "killerapp"}' \
  http://localhost:3333/api/auth


  curl \
  -X GET \
  -H 'Content-Type: application/json' \
  http://localhost:3333/api/jobs

```
