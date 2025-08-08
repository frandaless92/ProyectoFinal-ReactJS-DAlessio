# 🛍️ Yanel Lagares E-Commerce

**Yanel Lagares E-Commerce** es un portal de compras online especializado en artículos de estética.  
Permite a los usuarios explorar productos, agregarlos al carrito y completar una compra con control de stock en tiempo real gracias a Firebase Firestore.

## 🚀 Tecnologías usadas

- **React 19**
- **Vite 6**
- **Firebase 12** (Firestore como base de datos y hosting opcional)
- **React Router DOM 7**
- **React Icons**
- **React Spinners**
- **Sweet Alert 2**
- **ESLint** para control de calidad del código

## 📂 Estructura de colecciones en Firestore

### `products`

| Campo         | Tipo   | Descripción                    |
| ------------- | ------ | ------------------------------ |
| `nombre`      | string | Nombre del producto            |
| `descripcion` | string | Detalle del producto           |
| `precio`      | number | Precio unitario                |
| `stock`       | number | Stock disponible               |
| `imagen`      | string | Ruta de la imagen del producto |
| `categoria`   | string | Categoría (ej. "corporal")     |

**Ejemplo de documento en `products`:**

```json
{
  "categoria": "corporal",
  "descripcion": "Eliminá células muertas y dejá tu piel suave y renovada con este gel exfoliante con microgránulos naturales.",
  "imagen": "/img/exfoliante_corporal.jpg",
  "nombre": "Gel exfoliante corporal",
  "precio": 4200,
  "stock": 3
}
```

---

### `orders`

| Campo       | Tipo      | Descripción                                     |
| ----------- | --------- | ----------------------------------------------- |
| `buyer`     | map       | Información del comprador                       |
| `products`  | array     | Lista de productos comprados (incluye cantidad) |
| `total`     | number    | Total de la compra                              |
| `createdAt` | timestamp | Fecha y hora de la compra                       |

**Ejemplo de documento en `orders`:**

```json
{
  "buyer": {
    "fullname": "Franco D'Alessio",
    "phone": "0111523232323",
    "email": "f.n.dalessio@gmail.com"
  },
  "products": [
    {
      "id": "6PU7KUfeAn9xUkIjON6a",
      "nombre": "Gel exfoliante corporal",
      "descripcion": "Eliminá células muertas y dejá tu piel suave y renovada...",
      "precio": 4200,
      "quantity": 2,
      "stock": 5,
      "total": 8400,
      "categoria": "corporal",
      "imagen": "/img/exfoliante_corporal.jpg"
    }
  ],
  "total": 8400,
  "createdAt": "8/8/2025, 16:04:53"
}
```

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/frandaless92/ProyectoFinal-ReactJS-DAlessio.git
   gh repo clone frandaless92/ProyectoFinal-ReactJS-DAlessio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar Firebase**
   Crea un archivo `.env` en la raíz del proyecto con tus credenciales:

   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

4. **Levantar el entorno de desarrollo**
   ```bash
   npm run dev
   ```

---

## 🛒 Funcionalidades principales

- **Listado de productos** con imágenes, descripción y precio.
- **Carrito de compras** persistente en estado global (`CartContext`).
- **Checkout con validación de stock** usando `runTransaction` de Firestore para evitar ventas sin disponibilidad.
- **Creación de órdenes** en la colección `orders` con datos del comprador y productos.
- **Descuento automático de stock** al confirmar la compra.
- **Ruteo** con React Router DOM.

---

## 📜 Scripts disponibles

- `npm run dev` → Inicia el servidor de desarrollo.
- `npm run build` → Genera la versión optimizada para producción.
- `npm run preview` → Previsualiza el build en local.
- `npm run lint` → Ejecuta ESLint.

---

## 📄 Licencia

Desarrollado por **Franco D'Alessio**.
