export default [
  "strapi::logger",
  "strapi::errors",
  // 'strapi::security',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [
            "http://localhost:*",
            "self",
            "sandbox.embed.apollographql.com",
            "http://192.168.228.4:*",
            "http://192.168.0.14:*",
          ],
          "frame-ancestors": [
            "http://192.168.0.14:*",
            "http://172.20.10.11:*",
            "https://9c25-2001-e68-541a-caf5-c430-c331-2b81-c4be.ngrok-free.app",
            "http://localhost:3000",
            "self",
            "http://192.168.0.2:*",
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
