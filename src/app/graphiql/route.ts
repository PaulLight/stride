export async function GET() {
    const html = `<!DOCTYPE html>
<html>
  <head>
    <title>GraphiQL - STRIDE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/3.8.3/graphiql.min.css" />
  </head>
  <body style="margin:0;height:100vh">
    <div id="graphiql" style="height:100vh"></div>
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/3.8.3/graphiql.min.js"></script>
    <script>
      const fetcher = GraphiQL.createFetcher({ url: '/api/graphql' });
      ReactDOM.createRoot(document.getElementById('graphiql')).render(
        React.createElement(GraphiQL, { fetcher })
      );
    </script>
  </body>
</html>`;

    return new Response(html, {
        headers: { "Content-Type": "text/html" },
    });
}
