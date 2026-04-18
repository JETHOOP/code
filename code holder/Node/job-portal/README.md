# Job Board API

Small Express.js API for job listings, applications and user authentication.

## Repository layout

- [server.js](server.js) — app entry point
- [.env](.env) — environment variables
- [package.json](package.json) — npm scripts and dependencies
- [seedjobs.js](seedjobs.js) — seed script to populate jobs
- [uploads/](uploads/) — uploaded files (e.g. resumes)

Controllers:
- [`controllers.applicationController`](controllers/application.controller.js) — [controllers/application.controller.js](controllers/application.controller.js)
- [`controllers.authController`](controllers/auth.controller.js) — [controllers/auth.controller.js](controllers/auth.controller.js)
- [`controllers.jobController`](controllers/job.controller.js) — [controllers/job.controller.js](controllers/job.controller.js)

Models:
- [`models.applicationModel`](models/application.model.js) — [models/application.model.js](models/application.model.js)
- [`models.jobModel`](models/job.models.js) — [models/job.models.js](models/job.models.js)
- [`models.userModel`](models/user.model.js) — [models/user.model.js](models/user.model.js)

Routes:
- [`routes.applicationRoutes`](routes/application.routes.js) — [routes/application.routes.js](routes/application.routes.js)
- [`routes.authRoutes`](routes/auth.routes.js) — [routes/auth.routes.js](routes/auth.routes.js)
- [`routes.jobRoutes`](routes/job.routes.js) — [routes/job.routes.js](routes/job.routes.js)

Other:
- [`db.db`](db/db.js) — [db/db.js](db/db.js)
- [`middleware.authMiddleware`](middleware/auth.middleware.js) — [middleware/auth.middleware.js](middleware/auth.middleware.js)

## Quick start

1. Install
```sh
npm install