# Agenda-API

## Instalação
> npm install

## Executar a aplicação
> npm start

# Operações (REST API)

Abaixo estão listadas as operações dísponiveis na API

## Obter os contatos

### Request

`GET /contatos`

### Response

    Status: 200 OK
    Content-Type: application/json
```json
[
  {
    "id": 1,
    "nome": "Himura Kenshin",
    "email": "rurouni@kenshin.jp",
    "telefone": "551199999-9999",
    "grupo": "amigos do zap"
  }
]
```

## Obter um contato por id

### Request

`GET /contatos/1`

### Response

    Status: 200 OK
    Content-Type: application/json
```json
{
  "id": 1,
  "nome": "Himura Kenshin",
  "email": "rurouni@kenshin.jp",
  "telefone": "551199999-9999",
  "grupo": "amigos do zap"
}
```
> Caso não seja encontrado nenhum recurso com o `id` informado será retornado `Status: 404 Not Found`

## Criar um novo contato

### Request

`POST /contatos`
```json
{
  "nome": "Himura Kenshin",
  "email": "rurouni@kenshin.jp",
  "telefone": "551199999-9999",
  "grupo": "amigos do zap"
}
```

### Response

    Status: 200 OK
    Content-Type: application/json
```json
{
  "id": 1
}
```

## Atualizar um contato existente

### Request

`PUT /contato/1`
```json
{
  "nome": "Battousai",
  "email": "rurouni@kenshin.jp",
  "telefone": "551199999-9999",
  "grupo": "amigos do zap"
}
```

### Response

    Status: 200 OK
    Content-Type: application/json
```json
{
  "rowsAffected": 1
}
```
> Caso não seja encontrado nenhum recurso com o `id` informado será retornado `Status: 404 Not Found`

## Excluir um contato existente

### Request

`DELETE /contato/1`

### Response

    Status: 200 OK
    Content-Type: application/json
```json
{
  "rowsAffected": 1
}
```
> Caso não seja encontrado nenhum recurso com o `id` informado será retornado `Status: 404 Not Found`
