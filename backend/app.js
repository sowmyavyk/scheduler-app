const express = require("express");
const bodyParser = require("body-parser");
const Scheduler = require("./scheduler");

const app = express();
const port = 3000;
const scheduler = new Scheduler();

app.use(bodyParser.json());

// Route to add an event
app.post("/addEvent", (req, res) => {
    const { start_time, end_time } = req.body;
    if (start_time >= 0 && start_time < 24 && end_time > 0 && end_time <= 24 && start_time < end_time) {
        const success = scheduler.addEvent({ start_time, end_time });
        res.json({ success });
    } else {
        res.status(400).json({ error: "Invalid event time." });
    }
});

// Route to retrieve all events
app.get("/getEvents", (req, res) => {
    const events = scheduler.getEvents();
    res.json(events);
});

app.listen(port, () => {
    console.log(`Scheduler API running on http://localhost:${port}`);
});