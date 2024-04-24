const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Hello World!");
    }

    if (url.pathname === "/about") {
      return new Response("About us!");
    }

    return new Response("404 | Not found");
  },
});

console.log(`Listening on PORT: ${server.port}`);
