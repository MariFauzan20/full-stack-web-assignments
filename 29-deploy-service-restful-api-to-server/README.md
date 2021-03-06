# API Spec

## Create Hewan

Request :
- Method : POST
- Endpoint : `/hewan`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "id": 1,
    "nama": "jon thor",
    "namaSpesies": "anjing",
    "umur": 1000
}
```

Response :

```json 
{
    "status" : "success",
    "data" : {
          "id": 1,
          "nama": "jon thor",
          "namaSpesies": "anjing",
          "umur": 1000
     }
}
```

## Get Hewan

Request :
- Method : GET
- Endpoint : `/hewan`
- Header :
    - Accept: application/json

Response :

```json 
{
    "status" : "OK",
    "data" : {
          "id": 3,
          "nama": "si b aja",
          "namaSpesies": "anjing",
          "umur": 2,
          "createdAt": "2021-12-16T15:19:46.000Z",
          "updatedAt": "2021-12-16T15:19:46.000Z"
     }
}
```

## Update hewan

Request :
- Method : PUT
- Endpoint : `/hewan/{id_hewan}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "nama": "roger",
    "namaSpesies": "serigala",
    "umur": 2
}
```

Response :

```json 
{
    "message": "Updated",
    "data": {
        "nama": "roger",
        "namaSpesies": "serigala",
        "umur": 2
    }
}
```

## Delete Product

Request :
- Method : DELETE
- Endpoint : `/hewan/{id_hewan}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "status" : "Deleted"
}
```
