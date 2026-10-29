🔌 API minimale (Next.js)
app/api/projects/route.js
`js
export async function GET() {
  return Response.json([
    { id: 1, name: "Solar Optimization", status: "active" },
    { id: 2, name: "Eco Data Monitor", status: "planned" },
    { id: 3, name: "Green Tech Lab", status: "research" }
  ]);
}
`
