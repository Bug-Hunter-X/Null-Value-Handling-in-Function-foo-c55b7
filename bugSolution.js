function foo(a, b) {
  if (a === null || b === null) {
    console.log("Null values detected. Returning.");
    return 0; // or any appropriate default value or error handling 
  }
  // ... rest of the function
  return a + b; //Example operation
}