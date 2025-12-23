const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

var users = [
  {
    name: "Charlie",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const charlieKidneys = users[0].kidneys;
  const numberOfKidneys = charlieKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (charlieKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys: numberOfKidneys,
    numberOfHealthyKidneys: numberOfHealthyKidneys,
    numberOfUnhealthyKidneys: numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({ message: "Kidney added successfully" });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({ message: "All kidneys marked as healthy" });
});

app.delete("/", (req, res) => {
  if (isThereUnhealtyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ message: "Unhealthy kidneys deleted" });
  } else {
    res.status(411).json({ message: "No unhealthy kidneys to delete" });
  }
});

function isThereUnhealtyKidney() {
  let atleastOneUnhealthy = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthy = true;
    }
  }
  return atleastOneUnhealthy;
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
