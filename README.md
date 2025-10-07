# Issue Tracker

A full-stack **Issue Tracking Web App** built with **Next.js 15**, **TypeScript**, **Prisma**, and **MongoDB**.  
This application allows users to securely log in, create, assign, and track issues dynamically.  
Each user has a personalized dashboard to manage their issues efficiently, with a clean, responsive Redux-style UI.

---

## Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| Framework      | **Next.js 15 (App Router, TypeScript)**      |
| ORM            | **Prisma**                                   |
| Database       | **MongoDB**                                  |
| Authentication | **NextAuth.js**                              |
| Styling        | **Tailwind CSS**                             |
| Icons          | **React Icons**                              |
| UI Layout      | **Redux-style Dashboard (Sidebar + Topbar)** |
| Deployment     | **Vercel**                                   |

---

## Database Models

### **User Model**

| Field     | Type   | Description        |
| --------- | ------ | ------------------ |
| id        | String | Unique identifier  |
| name      | String | User name          |
| email     | String | Unique email       |
| password  | String | Hashed password    |
| role      | String | Role (admin/user)  |
| createdAt | Date   | Creation timestamp |

### **Issue Model**

| Field       | Type   | Description                            |
| ----------- | ------ | -------------------------------------- |
| id          | String | Unique issue ID                        |
| title       | String | Issue title                            |
| description | String | Detailed issue description             |
| status      | String | open / in-progress / resolved / closed |
| priority    | String | low / medium / high                    |
| reporterId  | String | User who created the issue             |
| assigneeId  | String | User assigned to resolve it            |
| createdAt   | Date   | When issue was created                 |
| updatedAt   | Date   | When issue was last updated            |

---

## Key Features

### 🔹 Authentication

- Secure login and signup with **NextAuth.js**
- Protected routes using server sessions
- Redirects to dashboard upon successful login

### 🔹 Dashboard

- Personalized dashboard for each user
- Displays stats: open, in-progress, resolved issues
- Quick access to issue management

### 🔹 Issue Management

- Create, edit, delete issues
- Assign issues to other users
- Update status (Open → In Progress → Resolved)
- Filter issues by priority or status

### 🔹 UI & UX

- Clean **Redux-style dashboard layout**
- Responsive design with **Tailwind CSS**
- Modern icons with **React Icons**

---

## Project Flow

### 1. Authentication

- User logs in or signs up using NextAuth credentials provider
- Session data is stored securely
- Redirect to `/dashboard`

### 2. Dashboard

- Displays user-specific stats and recent issues
- Shows counts by status (Open, Resolved, Closed)

### 3. Issues Page

- `/issues` lists all user-specific issues
- `/issues/[id]` shows detailed issue info
- User can update, assign, or close issues

---

## API Routes

| Endpoint           | Method | Description                       |
| ------------------ | ------ | --------------------------------- |
| `/api/issues`      | GET    | Fetch all user-specific issues    |
| `/api/issues`      | POST   | Create new issue                  |
| `/api/issues/[id]` | PATCH  | Update issue status or assignment |
| `/api/issues/[id]` | DELETE | Delete issue (if allowed)         |

---

## Folder Structure

issue-tracker/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── dashboard/
│ │ │ └── page.tsx
│ │ ├── issues/
│ │ │ ├── page.tsx
│ │ │ └── [id]/page.tsx
│ │ ├── api/
│ │ │ ├── auth/[...nextauth]/route.ts
│ │ │ ├── issues/
│ │ │ │ ├── route.ts
│ │ │ │ └── [id]/route.ts
│ ├── components/
│ │ ├── ui/
│ │ ├── layout/
│ │ └── dashboard/
│ ├── lib/
│ └── styles/
├── .env
├── package.json
└── tailwind.config.ts

---

## Development Roadmap

### **Phase 1 – Setup**

- Initialize Next.js (TypeScript)
- Configure Tailwind CSS
- Setup Prisma and connect MongoDB

### **Phase 2 – Authentication**

- Implement **NextAuth.js** with credentials provider
- Protect routes with `getServerSession()`
- Redirect authenticated users to dashboard

### **Phase 3 – Database**

- Define Prisma `User` and `Issue` models
- Run Prisma migrations
- Test with sample data

### **Phase 4 – API Development**

- Implement issue CRUD endpoints
- Add authentication middleware
- Filter results by logged-in user

### **Phase 5 – UI Development**

- Build **Redux-style dashboard layout**
- Sidebar, topbar, and main content area
- Responsive issue list, issue form, and cards

### **Phase 6 – Features**

- Create new issues
- Update and confirm issue status
- Show statistics on dashboard

### **Phase 7 – Finalization**

- Add loading states and error handling
- UI polish and responsive adjustments
- Deploy frontend and backend to **Vercel**

---

## Security

- Passwords encrypted with bcrypt
- Protected API routes via NextAuth sessions
- Users can only access their own issues
- Environment variables secured in `.env`

---

## Future Enhancements

- Role-based access (admin, developer, user)
- File uploads (screenshots)
- Email or in-app notifications
- Real-time updates with WebSockets
- Analytics dashboard with charts

---

## Expected Outcome

A secure, scalable, and modern **Issue Tracker** app featuring:

- User authentication
- Dynamic issue management
- Personalized dashboards
- Clean responsive UI

---

## Deployment

You can deploy this project on **Vercel** for both the frontend and backend.

1. Create a MongoDB cluster (MongoDB Atlas).
2. Add the connection string to `.env`.
3. Push Prisma schema using:
   ```bash
   npx prisma db push
   ```

**Deploy to Vercel.**

**Author**

**Hazrat Bilal**
_Certified Web & Mobile App Developer_
Passionate about building modern web apps with Next.js, Node.js, and cloud technologies.
