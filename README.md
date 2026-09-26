# Product API - CI/CD

RESTful API quản lý Product được xây dựng bằng:

- Node.js
- Express.js
- Mongoose
- MongoDB
- Docker
- Docker Compose
- GitHub Actions
- Docker Hub

## Product

Gồm các thuộc tính:

- `pid`
- `pname`
- `price`
- `quantity`

## Chức năng

- CRUD Product
- Kết nối MongoDB bằng Mongoose
- Cấu hình bằng `.env`
- Dockerize ứng dụng
- Docker Compose
- Healthcheck MongoDB + Product API
- CI test bằng GitHub Actions
- CRUD test với MongoDB trên GitHub
- CD lên Docker Hub
- Tự động deploy về Local Docker Engine bằng Self-hosted Runner

## API

```text
POST   /api/products
GET    /api/products
GET    /api/products/:pid
PUT    /api/products/:pid
DELETE /api/products/:pid
GET    /health