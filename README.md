# Sabaneta Secretary of Transportation — Data Management System

A CRUD web application built for the **Secretary of Transportation of Sabaneta** to manage transportation-related data. The system also includes a **report generation module** that produces statistics and insights from the stored data.

## Features

- **Create, Read, Update, Delete (CRUD)** operations for managing transportation data.
- **Report generation**: generate statistical reports/summaries based on the data stored in the system.
- Server-rendered views using **EJS** (no frontend framework/React involved).
- Data persistence and authentication handled via **Supabase**.

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** EJS
- **Database:** Supabase
- **Architecture:** MVC (Model-View-Controller)

## Architecture

This project follows the **MVC (Model-View-Controller)** pattern:

- **Models** – handle data logic and communication with Supabase.
- **Views** – EJS templates rendered on the server.
- **Controllers** – handle request logic, connecting models and views.

## ⚠️ Important: GraphQL Notice

Starting from **commit 13**, this project uses **GraphQL** to query/interact with data.

Prior to that, in **commit 11** (and earlier), the project **does not** use GraphQL — it relies on standard REST-style calls to Supabase instead.

> If you are reviewing the project history or checking out an older commit, keep this in mind: the data-fetching approach changes depending on which commit you're on. Behavior, available endpoints, and data-fetching logic will differ before and after this change.

## Prerequisites

- [Node.js](https://nodejs.org/) installed (LTS version recommended)
- The valid **Project URL** and A valid **API Key**

## Environment Variables

This project requires Supabase credentials to fetch and post data. These credentials are **not included in the repository** for security reasons.

Create a `.env` file in the root of the project with the following variables:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_api_key
```

> Replace the placeholder values with your actual Supabase project credentials. Without these, the application will not be able to connect to the database.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file as described in the [Environment Variables](#environment-variables) section.

## Running the Project

Start the server with (you gotta be located in the backend folder):

```bash
node server.js
```

By default, the application will run on the port configured in `server.js` (check the file or your `.env` for the exact port).

## Reports Module

The application includes a **"Generate Report"** feature that produces statistics based on the data stored in Supabase, allowing the Secretary of Transportation to analyze trends and key metrics.