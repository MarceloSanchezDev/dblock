import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const MAX_CONTACT_BODY_SIZE = 64 * 1024

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response, next) => {
        // Resend is loaded only when the contact endpoint receives a request.
        // Keeping it out of Vite's startup path makes the dev server faster and
        // prevents mail-provider dependencies from breaking the local preview.
        const { default: contactHandler } = await import('./api/contact.js')

        if (request.method !== 'POST') {
          return contactHandler(request, createResponse(response))
        }

        try {
          const body = await readJsonBody(request)
          request.body = body
          return contactHandler(request, createResponse(response))
        } catch (error) {
          if (error.message === 'Body too large') {
            response.statusCode = 413
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({ ok: false, message: 'La consulta es demasiado extensa.' }))
            return
          }

          if (error instanceof SyntaxError) {
            response.statusCode = 400
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({ ok: false, message: 'La solicitud no es válida.' }))
            return
          }

          next(error)
        }
      })
    },
  }
}

function createResponse(response) {
  return {
    status(code) {
      response.statusCode = code
      return this
    },
    json(payload) {
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(payload))
    },
    setHeader(name, value) {
      response.setHeader(name, value)
    },
  }
}

async function readJsonBody(request) {
  let body = ''

  for await (const chunk of request) {
    body += chunk

    if (Buffer.byteLength(body) > MAX_CONTACT_BODY_SIZE) {
      throw new Error('Body too large')
    }
  }

  return body ? JSON.parse(body) : {}
}

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: 'lightningcss',
  },
  server: {
    strictPort: true,
    watch: {
      // HyperFrames generates previews in this repository. They are not part of
      // the Dblock app and must not trigger Vite reloads for this site.
      ignored: ['**/hyperframes-heroes/**'],
    },
  },
  plugins: [react(), contactApiPlugin()],
})
