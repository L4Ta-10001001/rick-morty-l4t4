# Proyecto Rick & Morty - L4T4
Usuario: Admin
Password: tes

### Stack Tecnológico
* **Lenguaje:** Vanilla JavaScript (ES6+)
* **Maquetación:** HTML5 & CSS3 (Flexbox/Grid)
* **Data Source:** [Rick & Morty API](https://rickandmortyapi.com/)

### Arquitectura
El proyecto implementa una **Estructura Plana**. Esto garantiza la máxima compatibilidad en entornos de hosting estáticos [Vercel](https://rick-morty-l4t4.vercel.app), eliminando errores comunes de rutas relativas (`../`) al mover archivos.
* **Filtrado en Memoria:** Para optimizar la experiencia de usuario, una vez obtenidos los datos de la API, las búsquedas se realizan sobre el array en memoria, proporcionando resultados instantáneos sin latencia de red adicional.

### Ejecución Local
Para previsualizar el proyecto en un entorno real de servidor (evitando problemas de CORS o rutas de archivos locales), usa el módulo de Python:
```bash
# En la carpeta del proyecto
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

### 🛠 Seguridad y Riesgos (Análisis Técnico)
**Aviso Crítico:** Este MVP utiliza actualmente un sistema de login basado en **LocalStorage** y credenciales **hardcoded**.
* **Riesgo:** Cualquier usuario con acceso a la consola del navegador puede leer las credenciales o manipular el estado de autenticación. Al no existir un backend, los datos no están cifrados.
* **Mitigación en Producción:**
    1.  **Bcrypt:** Las contraseñas jamás deben viajar o guardarse en texto plano.
    2.  **JWT (JSON Web Tokens):** Implementar tokens firmados por un servidor para gestionar sesiones de forma segura.
    3.  **HTTPS:** Obligatorio para cifrar la comunicación entre cliente y servidor.

