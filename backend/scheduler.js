class Scheduler {
    constructor() {
        this.events = [];
    }

    // Method to add an event if it doesn't overlap
    addEvent({ start_time, end_time }) {
        // Check if the new event overlaps with any existing event
        for (let event of this.events) {
            if (
                (start_time < event.end_time && start_time >= event.start_time) ||
                (end_time > event.start_time && end_time <= event.end_time) ||
                (start_time <= event.start_time && end_time >= event.end_time)
            ) {
                return false; // Overlap found, do not add event
            }
        }
        // No overlap, add event to list
        this.events.push({ start_time, end_time });
        return true;
    }

    // Method to retrieve all scheduled events
    getEvents() {
        return this.events;
    }
}

module.exports = Scheduler;