// test.js - Ejecutar con Node.js o importar en consola
function testLocalSearch() {
  const mockData = [
    { name: "Rick Sanchez" },
    { name: "Morty Smith" },
    { name: "Summer Smith" },
  ];

  const searchMock = (term) =>
    mockData.filter((c) => c.name.toLowerCase().includes(term));

  console.assert(
    searchMock("rick").length === 1,
    "Error: Debería encontrar 1 Rick",
  );
  console.assert(
    searchMock("smith").length === 2,
    "Error: Debería encontrar 2 Smiths",
  );
  console.assert(
    searchMock("xyz").length === 0,
    "Error: No debería encontrar nada",
  );
  console.log("✅ Tests de filtrado local superados.");
}
testLocalSearch();
