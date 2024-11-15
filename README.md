# Work in progress

## Church Content Management System (CMS)

A simple and efficient Content Management System (CMS) designed to streamline and simplify church-related activities such as managing events, sermons, blog posts, prayer requests, and more.

## Features

- **Event Management:** Easily create, update, and view church events.
- **Sermon Management:** Manage sermons with options for titles, preachers, dates, and media links.
- **Blog Management:** Write, categorize, and publish blog posts with author information.
- **Prayer Requests:** Allow church members to submit and track prayer requests.
- **Admin Users:** Secure login system for admin users to manage content.
- **Category Support:** Categorize blog posts and sermons into different groups for easier navigation.

## Database Schema

The CMS is powered by a relational database. Below is the schema for the tables used in the system.

### Events Table

Stores details about church events.

```sql
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
