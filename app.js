// TASK 1 Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    console.log(value);
  }
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// TASK 2 Awaiting a Call
async function fetchFakeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% success rate
      if (success) {
        resolve({ data: "Fake API data" });
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000); // Simulating delay of 1 second
  });
}

async function awaitCall() {
  try {
    const response = await fetchFakeAPI();
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

awaitCall();

// TASK 3 Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetchFakeAPI();
    console.log("Data received:", response.data);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
}

awaitCall();
