# 🌿 Frutos de mi Tierra — Portafolio Digital

Catálogo digital estático con carrito de pedidos y cierre vía WhatsApp.

## 🚀 Despliegue en GitHub Pages — 3 pasos

### 1. Sube el proyecto a GitHub

```bash
git init
git add .
git commit -m "✨ Portafolio Frutos de mi Tierra"
git remote add origin https://github.com/TU_USUARIO/frutos-de-mi-tierra.git
git push -u origin main
```

### 2. Activa GitHub Pages

En tu repositorio: **Settings → Pages → Source → main → / (root) → Save**

### 3. Accede a tu portafolio

En 1-2 minutos estará disponible en:
`https://TU_USUARIO.github.io/frutos-de-mi-tierra/`

---

## 📂 Estructura del proyecto

```
/
├── index.html          ← Página principal
├── styles.css          ← Sistema de diseño completo
├── script.js           ← Lógica: carrito, WhatsApp, filtros
├── assets/
│   └── productos/      ← 33 imágenes PNG de productos
└── README.md
```

## 🖼️ Reemplazar imágenes oscuras

Algunas imágenes llegaron con problemas de exposición. Reemplaza los archivos en `assets/productos/` manteniendo los **nombres exactos** (incluyendo tildes y caracteres especiales):

| Archivo | Estado |
|---|---|
| `Muffin-Sabor-a-Vino-Tinto.png` | ⚠️ Reemplazar |
| `Postre-de-Piña.png` | ⚠️ Reemplazar |
| `Postre-de-Fresa.png` | ⚠️ Reemplazar |
| `Postre-de-Maracuyá.png` | ⚠️ Reemplazar |
| `Postre-de-Tomate-de-Árbol.png` | ⚠️ Reemplazar |
| `Salpicón-en-Jugo-de-Maracuyá.png` | ⚠️ Reemplazar |
| `Torta-de-Plátano-Maduro.png` | ⚠️ Reemplazar |
| `Torta-de-Plátano-de-Banano.png` | ⚠️ Reemplazar |

## ✨ Funcionalidades incluidas

- 🛍️ Carrito de pedidos con drawer lateral
- 📱 Mensaje formateado automático por WhatsApp
- 🌙 Modo oscuro / claro con toggle
- 📄 Descarga de catálogo PDF (impresión del navegador)
- 🔍 Filtros por categoría con scroll suave
- 📱 100% responsive (375px a 1440px+)
- ♿ Accesibilidad: aria-labels, contraste AA, focus visible

## 📞 Contacto configurado

WhatsApp: **+57 320 752 8652**  
Para cambiar el número, edita `script.js` línea:  
```js
const WA_NUMBER = '573207528652';
```
