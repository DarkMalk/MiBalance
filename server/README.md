# Backend API for MiBalance

## Como instalar proyecto

1. Descargar proyecto

```bash
git clone https://github.com/DarkMalk/MiBalance.git
```

2. Movernos al proyecto

```bash
cd ./MiBalance/server
```

3. Instalar dependencias

```bash
pnpm install
```

4. Crear build del proyecto

```bash
pnpm run build
```

5. Configurar variables de entorno

```bash
# MacOS o Linux
export DB_CONNECTION_STRING="your_connection_string_database"
export PORT="your_port_available"
export SECRET_JWT="your_secret_key"
export ALLOWED_ORIGINS="http://localhost:5173, http://127.0.0.1:5173"

# Windows
set DB_CONNECTION_STRING="your_connection_string_database"
set PORT="your_port_available"
set SECRET_JWT="your_secret_key"
set ALLOWED_ORIGINS="http://localhost:5173, http://127.0.0.1:5173"
```

**NOTA:** En modo desarrollo puedes configurar las variables de entorno con el archivo `.env`

6. Iniciar proyecto

```bash
pnpm run start
```

## Endpoints

### Registrar usuarios

- Método: **POST**
- Ruta: `/api/user/register`
- Parámetros del `body` necesarios:

```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```

### Iniciar sesión

- Método: **POST**
- Ruta: `/api/user/login`
- Parámetros del `body` necesarios:

```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```

### Ver datos del perfil

- Método: **GET**
- Ruta: `/api/user/profile`

### Crear categoría

- Método: **POST**
- Ruta: `/api/categories`
- Parámetros del `body` necesarios:

```json
{
  "name": "Category Name"
}
```

### Actualizar categoría

- Método: **PUT**
- Ruta: `/api/categories`
- Parámetros del `body` necesarios:

```json
{
  "name": "Updated Category Name"
}
```

### Ver todas las categorías

- Método: **GET**
- Ruta: `/api/categories`

### Ver una categoría

- Método **GET**
- Ruta: `/api/categories/:id`

### Eliminar categoría

- Método: **DELETE**
- Ruta: `/api/categories/:id`

### Crear Transacción

- Método: **POST**
- Ruta: `/api/transactions`
- Parámetros del `body` necesarios:

```json
{
  "category_id": 1,
  "type": "EXPENSE", // -> "EXPENSE" o "INCOME"
  "amount": 12980,
  "transaction_date": "2025-11-01"
}
```

### Actualizar Transacción

- Método: **PUT**
- Ruta: `/api/transactions/:id`
- Parámetros del `body` necesarios:

```json
{
  "category_id": 1,
  "type": "EXPENSE", // -> "EXPENSE" o "INCOME"
  "amount": 12980,
  "transaction_date": "2025-11-01"
}
```

### Ver todas las Transacciones

- Método: **GET**
- Ruta: `/api/transactions`

### Ver una Transacción

- Método **GET**
- Ruta: `/api/transactions/:id`

### Eliminar Transacción

- Método: **DELETE**
- Ruta: `/api/transactions/:id`
