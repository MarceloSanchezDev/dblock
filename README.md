# Dblock

Sitio corporativo desarrollado con React, Vite y una función serverless de Vercel para el formulario de contacto.

## Desarrollo local

1. Instalá dependencias con `npm ci`.
2. Copiá `.env.example` como `.env.local` y completá `RESEND_API_KEY` si querés enviar correos reales.
3. Ejecutá `npm run dev`.

`npm run dev` sirve la SPA y la función `/api/contact` en el mismo entorno mediante un middleware de Vite, por lo que permite probar el formulario de punta a punta sin iniciar sesión en Vercel. En producción, Vercel ejecuta el mismo handler desde `api/contact.js`.

## Variables de entorno

| Variable | Requerida | Descripción |
| --- | --- | --- |
| `RESEND_API_KEY` | Sí para enviar correos | Clave privada de Resend. |
| `CONTACT_TO_EMAIL` | No | Buzón que recibe consultas; por defecto `ventas@dblock.com.ar`. |
| `CONTACT_FROM_EMAIL` | No | Remitente verificado en Resend. |

Configurá estas variables también en el proyecto de Vercel. Nunca las expongas con prefijo `VITE_` ni las agregues al repositorio.

## Seguridad del formulario

El endpoint valida tipos de proyecto y servicios permitidos, normaliza y limita la entrada, usa un honeypot y rechaza envíos demasiado rápidos. Además incorpora un límite de cinco solicitudes por IP cada quince minutos dentro de cada instancia activa.

Ese límite en memoria es una defensa complementaria: las funciones serverless pueden escalar en varias instancias. Para una protección distribuida en producción, activá Rate Limiting y WAF en el panel de Vercel para la ruta `POST /api/contact`. Revisá periódicamente los registros de Vercel y Resend.

## Verificación

- `npm run lint`
- `npm run build`
