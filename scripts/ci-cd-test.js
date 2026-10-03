async function testAPI() {
  try {
    const health = await fetch("http://localhost:3000/");

    if (!health.ok) {
      throw new Error("Product API failed");
    }

    const products = await fetch(
      "http://localhost:3000/api/products"
    );

    if (!products.ok) {
      throw new Error("Products API failed");
    }

    console.log("CI/CD test passed");
  } catch (error) {
    console.error("CI/CD test failed:", error.message);
    process.exit(1);
  }
}

testAPI();