// script.js
document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.getElementById('notes-container');

    // The entire content of the notes, structured as a JavaScript array of objects.
    // Each object represents a "Week" or a "Day" section.
    // Content strings are raw to preserve newlines and special characters for diagrams.
    const notesContent = [
        {
            type: 'week',
            title: '🌱 Week 1: Node.js Fundamentals - The Engine Under the Hood',
            content: [], // Week content can be empty or introductory text
            days: [
                {
                    title: '📦 Day 1: Genesis & Blueprint (`package.json`) 🧬',
                    sections: [
                        {
                            heading: 'Node.js Setup:',
                            text: 'Install **Node.js + npm**. Essential tools: **VSCode** & integrated terminal.'
                        },
                        {
                            heading: 'Project Init:',
                            text: '`npm init -y` scaffolds your project.',
                            subsections: [
                                {
                                    heading: '`package.json`:',
                                    text: 'Your project\'s **DNA**. Defines identity (`name`, `version`), `scripts` (automation), and **dependencies** (`dependencies` for production, `devDependencies` for development/testing). Ensures consistent, reproducible environments. 🏗️'
                                }
                            ]
                        },
                        {
                            heading: 'Version Control:',
                            text: '`.nvmrc` for consistent Node versioning across teams. Git & GitHub for robust code collaboration and history.'
                        },
                        {
                            heading: 'Code Quality:',
                            text: '**ESLint & Prettier** maintain consistent, readable, and error-free code formatting. 🧹'
                        },
                        {
                            type: 'code',
                            lang: 'text',
                            content: String.raw`
# Project Setup: The Foundational Layer (Perfected Borders)

┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│ .nvmrc          │       │ .gitignore      │       │ package.json    │
│ (Node Version)  │       │ (Excluded Files)│       │ (Project Manifest)│
│ e.g., v18.17.0  │       │ e.g., node_modules│       │  - Scripts        │
└─────────────────┘       └─────────────────┘       │  - Dependencies   │
                                                    └─────────────────┘
┌─────────────────┐       ┌─────────────────┐
│ .eslintrc.js    │       │ .prettierrc     │
│ (Code Style)    │       │ (Code Formatting)│
└─────────────────┘       └─────────────────┘

Mastery: Foundation dictates scalability.
`
                        }
                    ]
                },
                {
                    title: '⚡ Day 2: What is Node.js? - The Atomic Engine ⚛️',
                    sections: [
                        {
                            heading: 'Node.js:',
                            text: 'V8-powered **runtime** for JS *outside browser*.'
                        },
                        {
                            heading: 'Node.js Internals:',
                            subsections: [
                                {
                                    heading: 'V8:',
                                    text: 'Google\'s JS engine. Compiles JS → **machine code (JIT)**. **Speed**. 🏎️'
                                },
                                {
                                    heading: 'libuv:',
                                    text: 'C++ library. Handles **async I/O** (network, files) by offloading to OS/thread pool. **Non-blocking**.'
                                }
                            ]
                        },
                        {
                            heading: 'Principle:',
                            text: '**Single-threaded JS** + `libuv`\'s async I/O + Event Loop = **High concurrency**. Orchestration, not parallelism. 🧘'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Node.js Internals: Async Microcosm (Perfected Borders)

┌───────────────────────────────────────────────────────────┐
│                       Node.js Runtime                     │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  ┌────────────┐               ┌─────────────────┐         │
│  │    V8      │               │     libuv       │         │
│  │ (JS Engine)│               │ (C++ Library)   │         │
│  │  ⚡ JIT     │               │ 🔄 Async I/O   │         │
│  │ (JS -> CPU)│               │ 🌐 Network      │         │
│  │            │               │ 📁 Files        │         │
│  └────────────┘               └─────────────────┘         │
│        ▲                            ▲                      │
│        │      ┌─────────────────┐   │                      │
│        └──────▶│ C++ Bindings    │◀──┘                      │
│                └─────────────────┘                          │
│                                                           │
│             ╔═══════════════════════════════════╗         │
│             ║ MAIN JAVASCRIPT THREAD            ║         │
│             ║ (Executes YOUR JS Code)           ║         │
│             ╚═══════════════════════════════════╝         │
└───────────────────────────────────────────────────────────┘

Insight: JS thread never waits. It delegates.
`
                        },
                        {
                            heading: 'Environment Shift:',
                            subsections: [
                                {
                                    heading: 'Browser JS (Client):',
                                    text: '**Sandboxed** (security for user). Can\'t touch OS files. UI-focused.'
                                },
                                {
                                    heading: 'Node.js (Server):',
                                    text: '**Full OS access** (file system, network ports, processes). Backend services.'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
JavaScript's Duality: Browser vs. Node.js (Perfected Borders)

┌───────────────────────┐            ┌───────────────────────┐
│  Browser JS (Client)  │            │  Node.js (Server)     │
├───────────────────────┤            ├───────────────────────┤
│  - Runs in Web Browser│            │  - Runs Directly on OS│
│  - ╔══════════╗       │            │  - ╔══════════╗       │
│  │ ║ SECURITY ║ Sandbox│            │  │ ║  SYSTEM  ║ Access│
│  │ ║ FENCE    ║       │            │  │ ║   LEVEL  ║       │
│  │ ╚══════════╝       │            │  │ ╚══════════╝       │
│  - Capabilities:      │            │  - Capabilities:      │
│  - DOM Manipulation   │            │  - File I/O (fs)      │
│  - UI Interactivity   │            │  - Raw Networking (net)│
│  - Limited Fetch (CORS)│            │  - DB Interaction     │
│                        │            │  - OS Processes       │
└───────────────────────┘            └───────────────────────┘
                             ▲
                             │  Both Powered By
                             │
                           ╔═════╗
                           ║ V8  ║ (Converts JS to Machine Code)
                           ╚═════╝

Quantum Insight: Node.js lets JS operate at a deeper system level.
`
                        }
                    ]
                },
                {
                    title: '📁 Day 3: Modules & File System - Code Isolation & Persistent Storage',
                    sections: [
                        {
                            heading: 'Module System (CommonJS):',
                            text: 'Each `.js` file = **private module**. `module.exports` exposes **public API**. `require()` loads.',
                            subsections: [
                                {
                                    heading: 'Insight:',
                                    text: 'Enforces **encapsulation**. Prevents global pollution. Promotes **reusability/testability**. Modules are **cached** (`require()` executes once). ✅'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Module System: Private Scope, Public Contracts (Perfected Borders)

auth.js (Private Universe)         app.js (Consumer)

┌──────────────────────────┐      ┌──────────────────────────┐
│  // Internal Logic       │      │                          │
│  let _salt = 10;         │      │ // ONLY 'hash' & 'verify' are known here!
│  function _generateId() {}│      │                          │
│                          │      │ const auth = require('./auth.js');
│  // Public Contract      │      │                          │
│  module.exports = {      │      │ auth.hash('mysecret');    │
│    hash: (pwd) => ...,   │◄─────▶│ auth.verify(..., ...);   │
│    verify: (pwd, h) => ...│      │                          │
│  };                      │      │ // Trying auth._generateId() would FAIL!
└──────────────────────────┘      └──────────────────────────┘

Module Caching:
1st `require('moduleX')` ──▶ Loads & Executes moduleX, stores in CACHE
2nd `require('moduleX')` ──▶ Returns from CACHE (no re-execution)

Insight: Modular code is robust, composable, and fast.
`
                        },
                        {
                            heading: 'File I/O (`fs`):',
                            text: 'Node\'s disk access.',
                            subsections: [
                                {
                                    heading: 'Async (Non-Blocking):',
                                    text: '`fs.readFile(path, cb)`. **Server must use this.** Offloads disk to `libuv`. JS thread stays free. 🚀'
                                },
                                {
                                    heading: 'Sync (Blocking):',
                                    text: '`fs.readFileSync(path)`. **NEVER in server\'s main path.** Freezes process. ☠️'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
File I/O: Blocking vs. Non-Blocking (Perfected Borders)

Blocking (Synchronous)                    Non-Blocking (Asynchronous)
┌───────────────────────────┐           ┌───────────────────────────┐
│ YOUR JAVASCRIPT THREAD    │           │ YOUR JAVASCRIPT THREAD    │
├───────────────────────────┤           ├───────────────────────────┤
│  console.log("Start");   │           │  console.log("Start");   │
│  const data = fs.readFileSync('big.txt'); ◀─── FREEZES HERE       │  fs.readFile('big.txt', (err,data)=>{...});
│  console.log("End");     │             │  console.log("End");     │
└───────────────────────────┘             └───────────┬───────────┘
                                                        │ (Returns immediately)
        Result: Server FREEZES, users wait.                ▼
                                                    ┌───────────────────┐
                                                    │   LIBUV THREADS   │ (Background Disk Work)
                                                    └───────────────────┘
        Result: Server stays RESPONSIVE, serves other users.

Insight: Responsiveness is key for server-side performance.
`
                        }
                    ]
                },
                {
                    title: '⏱️ Day 4: Event Loop + Streams - Async Heartbeat & Data Flow',
                    sections: [
                        {
                            heading: 'Event Loop:',
                            text: 'Node\'s async brain. If JS **Call Stack** empty, pulls callbacks from queues.',
                            subsections: [
                                {
                                    heading: 'Microtasks (Highest):',
                                    text: '`process.nextTick()`, Promise callbacks. Cleared **before** macrotasks.'
                                },
                                {
                                    heading: 'Macrotasks:',
                                    text: 'Timers (`setTimeout`), I/O (`libuv` results), `setImmediate`.'
                                },
                                {
                                    heading: 'Insight:',
                                    text: 'Loop never blocks. It delegates heavy work (`libuv`), queues results, and processes JS chunks efficiently. **Scalability for I/O-bound apps.** 🔄'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
The Event Loop: The Never-Sleeping Maestro (Perfected Borders)

╔════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                    ║
║        ┌───────────────────────────────────────┐                                     ║
║        │         V8 Call Stack (Sync JS)       │                                     ║
║        │   (Your Synchronously Executing Code)   │                                     ║
║        └───────────▲───────────────────────────┘                                     ║
║                    │                                                                 ║
║                    │ (If Stack Empty, Event Loop Pulls from Queues)                  ║
║                    │                                                                 ║
║        ┌───────────▼───────────┐                                                     ║
║        │      Event Loop       │                                                     ║
║        │  (Scheduler/Pumper)   │                                                     ║
║        └───────────┬───────────┘                                                     ║
║                    │                                                                 ║
║       (Async Ops Complete, Push Callbacks)                                           ║
║                    ▼                                                                 ║
║  ┌───────────────────────────────────────────────────────────────────────────┐       ║
║  │ ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   │       ║
║  │ │ 1. Microtask Q  │   │ 2. Timer Q      │   │ 3. I/O (Poll) Q │   │ 4. Check Q      │   │       ║
║  │ │(nextTick, Promises)│   │(setTimeout,       │ (Network, File I/O) │ (setImmediate)      │   │       ║
║  │ │  (High Priority)  │   │  setInterval)     │  (Completion Cbs)   │ (Next Tick of Loop) │   │       ║
║  │ └─────────────────┘   └─────────────────┘   └─────────────────┘   └─────────────────┘   │       ║
║  └───────────────────────────────────────────────────────────────────────────┘       ║
╚════════════════════════════════════════════════════════════════════════════════════╝

Quantum Insight: Node.js's "concurrency" is rapid task-switching, not true parallel JS.
`
                        },
                        {
                            heading: 'Streams:',
                            text: 'Process large data in **chunks**, not all at once. **Memory efficiency**. 💧',
                            subsections: [
                                {
                                    heading: 'Types:',
                                    text: '`Readable` (source), `Writable` (destination), `Transform` (modifies).'
                                },
                                {
                                    heading: '`pipe()`:',
                                    text: 'Connects streams. Handles **back-pressure** (auto-pauses source if sink is slow).'
                                },
                                {
                                    heading: 'Insight:',
                                    text: 'Essential for large I/O (file uploads, video streaming). Prevents memory overruns.'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Data Streams: The Continuous Efficiency (Perfected Borders)

┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│ Readable Stream │───────▶│ Transform Stream│───────▶│ Writable Stream │
│ (Data Source)   │         │ (Data Modifier) │         │ (Data Sink)     │
│ e.g., fs.createReadStream()│         │ e.g., zlib.createGzip() │         │ e.g., fs.createWriteStream()│
└─────────────────┘         └─────────────────┘         └─────────────────┘
       │                        │                         │
       └───────────.pipe()──────┴───────────.pipe()──────┘
                  (Automates Data Flow & Back-Pressure)

Back-Pressure Explained:
┌─────────────────┐        ┌─────────────────┐
│  Fast Source    │◀─────┐ │   Slow Sink     │
│  (Producing Chunks)│     │  (Consuming Chunks)│
└─────────────────┘     │ └─────────────────┘
       │                │       ▲
       │                │       │  (Sink tells Source to PAUSE)
       └────────────────┴───────┘
       (Stream .pipe() handles this automatically, preventing memory overflow)

Quantum Insight: Data moves like water in a pipe. Back-pressure is the pipe's self-regulating valve.
`
                        }
                    ]
                },
                {
                    title: '🌐 Day 5: HTTP Networking - Your Server\'s Voice',
                    sections: [
                        {
                            heading: '`http.createServer(cb)`:',
                            text: 'Node\'s raw HTTP server. Manual parsing of requests/responses.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Powerful, but **low-level**. Manual URL, header, body parsing is tedious and error-prone.'
                        },
                        {
                            heading: 'Solution:',
                            text: 'Use **Express.js** (Day 6). It\'s an **abstraction layer** handling this complexity.'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Raw HTTP: The Manual Dance (Pre-Express) (Perfected Borders)

Client               Node.js http.Server
┌─────────┐          ┌───────────────────────────┐
│ Browser │          │ (http.createServer)       │
└────┬────┘          │  - req.method             │
     │ POST /data    │  - req.url (manual parse) │
     │ Header: JSON  │  - req.headers            │
     │ Body: {..}    │  - req.on('data'), 'end' (Body)│
     ├─────────────────▶│  - res.writeHead(), res.end() (Response)│
     │                 └───────────────────────────┘
     │ Response        ▲
     └─────────────────┘

Insight: Abstraction simplifies complex protocols.
`
                        },
                        {
                            heading: 'HTTP Core:',
                            text: 'Requests (Method, URI, Headers, Body) & Responses (Status, Headers, Body).'
                        },
                        {
                            heading: 'HTTP Statelessness & State Management:',
                            text: 'HTTP is **stateless**. Server forgets context between requests. **Insight:** Key to horizontal **scalability** (any server can handle any request).'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
HTTP Request-Response: A Stateless Conversation (Perfected Borders)

Client (Browser/App)                             Your Node.js Server
┌─────────────┐                                  ┌─────────────┐
│             │  1. HTTP Request                 │             │
│ (User clicks │   (Method, URI, Headers, Body)  │ (Receives Request,
│   a link)   ├───────────────────────────▶│   Processes ) │
└─────────────┘                                  └─────────────┘
      ▲                                         │
      │                                         │ (Request is processed, but
      │                                         │  server forgets client's
      │ 2. HTTP Response                        │  previous requests after response)
      │   (Status Code, Headers, Body)          │
      │◀────────────────────────────────────────┤
┌─────────────┐                                  ┌─────────────┐
│ (Client     │                                  │ (Server     │
│   receives  │                                  │   sends     │
│   response) │                                  │   response) │
└─────────────┘                                  └─────────────┘

Insight: HTTP's statelessness enables massive horizontal scaling.
`
                        }
                    ]
                }
            ]
        },
        {
            type: 'week',
            title: '🚀 Week 2: Express.js Essentials - API Acceleration',
            content: [],
            days: [
                {
                    title: '📦 Day 6: Intro to Express - The API Framework',
                    sections: [
                        {
                            heading: 'Express.js:',
                            text: '**Minimalist web framework** for Node.js. Simplifies API/web server creation.'
                        },
                        {
                            heading: 'Core:',
                            text: 'Handles **routing**, **middleware**, HTTP utilities.'
                        },
                        {
                            heading: 'Request Lifecycle:',
                            text: '`Client` → `Middleware` → `Route Handler` → `Response`.'
                        },
                        {
                            heading: '`app.use(express.json())`:',
                            text: 'Parses JSON request bodies into `req.body`. **Essential**.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Express is your **API scaffolding**. Organizes requests, not raw bytes.'
                        },
                        {
                            type: 'code',
                            lang: 'javascript',
                            content: String.raw`
// Express Init: Your API Blueprint
const express = require('express');
const app = express();
app.use(express.json()); // Middleware: Parses JSON request bodies into req.body

app.get('/', (req, res) => res.send('Hello API!')); // Simple route
app.listen(3000, () => console.log('Server running!')); // Start server
`
                        }
                    ]
                },
                {
                    title: '🧱 Day 7: Middleware + Routing - The API\'s Processing Gates',
                    sections: [
                        {
                            heading: 'Middleware:',
                            text: '`(req, res, next)` functions. Form a **processing pipeline**. Each `next()` passes control to the next "gate." **Order matters!** (e.g., `logger` then `auth` then `body-parser`).'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Handles **cross-cutting concerns** (logging, auth, parsing) without duplication. Can **terminate** request by sending response. 🛑'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Express Pipeline: The Request Funnel (Perfected Borders)

Client Request
┌───────────────────┐
│       Incoming    │
└─────────┬─────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────┐
│          Express.js Application (Request Processing)    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ┌────────────┐  next() ┌────────────┐  next() ┌────────────┐ next() ┌────────────┐ │
│ │ 1. GLOBAL  │────────▶│ 2. AUTH    │────────▶│ 3. JSON    │───────▶│ 4. ROUTE   │ │
│ │   LOGGER   │         │   GUARD    │         │   PARSER   │        │   HANDLER  │ │
│ └────────────┘         └────────────┘         └────────────┘        └────────────┘ │
│   (app.use)            (app.use or route-specific) (app.use(express.json())) (app.get('/path')) │
│                                                                        ▲             │
│                                                                        │             │
│  Quantum Insight: Each 'next()' opens the next gate. Middleware can send a response and EXIT. │
└─────────────────────────────────────────────────────────────────────────┴────────────┘
                                 │
                                 ▼
                             Response to Client
`
                        },
                        {
                            heading: 'Routing:',
                            text: 'Maps URLs to handlers.',
                            subsections: [
                                {
                                    heading: 'Route Params:',
                                    text: '`/users/:id` → `req.params.id`. Dynamic paths.'
                                },
                                {
                                    heading: 'Query Params:',
                                    text: '`/items?cat=A` → `req.query.cat`. Filtering/sorting.'
                                },
                                {
                                    heading: '`express.Router()`:',
                                    text: 'Creates **modular route groups**. **Crucial for large apps**. 📂'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Modular Routing: Scalability by Feature (Perfected Borders)

// app.js (Main Application)
┌───────────────────────────────────┐
│ app.use('/users', userRoutes);    │
│ app.use('/products', productRoutes);│
└───────────────────────────────────┘

// routes/users.js (Router Module)
┌───────────────────────────────────┐
│ const router = express.Router();  │
│ router.get('/', (req, res) => { /* All users */ });       // GET /users
│ router.post('/:id', (req, res) => { /* Specific user by ID */ });  // POST /users/:id
│ module.exports = router;          │
└───────────────────────────────────┘
`
                        }
                    ]
                },
                {
                    title: '🌐 Day 8: REST APIs - The Universal Dialogue',
                    sections: [
                        {
                            heading: 'REST Principles:',
                            text: 'Architectural style for networked apps. Focus on **resources** (nouns) via **URIs** and **HTTP verbs** (actions).'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Predictable, intuitive, scalable. Emphasizes **statelessness** (server forgets context between requests).'
                        },
                        {
                            heading: 'Status Codes:',
                            text: 'Server\'s feedback (e.g., `200 OK`, `404 Not Found`, `500 Server Error`). **Crucial for client logic.**'
                        },
                        {
                            heading: 'Thin Controllers:',
                            text: 'Route handlers (`controllers`) should delegate complex logic to **service layers**. 🧹'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
REST API Matrix: Resources + Verbs + Status (Perfected Borders)

┌───────────────────────────┬───────────────────────────┬─────────────────────────────┬─────────────────────────────┐
│       CRUD Operation      │         HTTP Verb         │          URI Pattern        │      Common Response Status │
├───────────────────────────┼───────────────────────────┼─────────────────────────────┼─────────────────────────────┤
│ C (Create new resource)   │ POST                      │ `/resources`                │ 201 Created                 │
│ R (Read collection)       │ GET                       │ `/resources`                │ 200 OK                      │
│ R (Read single resource)  │ GET                       │ `/resources/:id`            │ 200 OK (404 if not found)   │
│ U (Update - Full Replace) │ PUT                       │ `/resources/:id`            │ 200 OK                      │
│ U (Update - Partial)      │ PATCH                     │ `/resources/:id`            │ 200 OK                      │
│ D (Delete resource)       │ DELETE                    │ `/resources/:id`            │ 204 No Content              │
└───────────────────────────┴───────────────────────────┴─────────────────────────────┴─────────────────────────────┘

Insight: Uniform interface simplifies integration.
`
                        }
                    ]
                },
                {
                    title: '🧯 Day 9: Error Handling - Fortifying Your API',
                    sections: [
                        {
                            heading: 'Goal:',
                            text: 'Prevent crashes, give clear client feedback, aid debugging.'
                        },
                        {
                            heading: 'Error Propagation:',
                            subsections: [
                                {
                                    heading: 'Sync Errors:',
                                    text: '`throw new Error()`. Express catches automatically.'
                                },
                                {
                                    heading: 'Async Errors:',
                                    text: 'In Promises/callbacks. **MUST** be caught (`.catch()`) and passed via **`next(err)`**. **Uncaught async errors crash Node.js!** 💥'
                                }
                            ]
                        },
                        {
                            heading: 'Error Middleware (`(err, req, res, next)`):',
                            text: 'The **LAST `app.use()`** in your app. Global safety net.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Centralize errors. Distinguish **operational errors** (client issues, 4xx) from **programmer errors** (bugs, 5xx). Log `err.stack` server-side. **NEVER expose stack traces to clients in prod.** 🔒'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Error Handling: The Quantum Safety Net (Perfected Borders)

┌───────────────────────────────────────────────────────────┐
│               Middleware / Route Handlers                 │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  ┌───────────────────────┐                                │
│  │  Synchronous Logic    │  ───▶ `throw new Error()`      │ (Caught by Express's core error handling)
│  │ (e.g., validation)    │                                │
│  └───────────────────────┘                                │
│                                                           │
│  ┌───────────────────────┐                                │
│  │  Asynchronous Logic   │  ───▶ `.catch(err => next(err))`│ (CRITICAL for async)
│  │ (e.g., DB calls, Promises)│                                │
│  └───────────────────────┘                                │
└─────────────────────┬─────────────────────────────────────┘
                      │ (Error `err` passed)
                      ▼
┌───────────────────────────────────────────────────────────┐
│      Global Error Handling Middleware (app.use(err,req,res,next))│
├───────────────────────────────────────────────────────────┤
│  - **ALWAYS THE LAST** `app.use()` in your application.    │
│  - Logs `err.stack` to server console (for developers).   │
│  - Determines appropriate HTTP Status Code (e.g., 400, 404, 500).│
│  - Sends clean, non-sensitive error message to client (NEVER raw stack trace in production).│
└───────────────────────────┬───────────────────────────────┘
                            │
                            ▼
                   Clean Error Response to Client

Insight: Graceful degradation protects users and aids debugging.
`
                        }
                    ]
                },
                {
                    title: '🔐 Day 10: Auth Basics - Securing Your API\'s Perimeter',
                    sections: [
                        {
                            heading: 'AuthN (Authentication):',
                            text: '**"Who are you?"** Identity verification.'
                        },
                        {
                            heading: 'AuthZ (Authorization):',
                            text: '**"What can you do?"** Permissions.'
                        },
                        {
                            heading: 'Passwords:',
                            text: '**ALWAYS hash (`bcrypt`) and salt.** **NEVER plaintext.** 🔐'
                        },
                        {
                            heading: 'Methods:',
                            subsections: [
                                {
                                    heading: 'JWTs (JSON Web Tokens):',
                                    text: 'For **stateless API Auth.** Server signs a token (`claims`, `expiry`). Client sends token. Server verifies **signature**.'
                                },
                                {
                                    heading: 'Insight:',
                                    text: 'High **scalability** (no server-side session store needed).'
                                },
                                {
                                    heading: 'Session-Based:',
                                    text: '**Stateful Auth.** Server creates `sessionId`, stores session data. Sends `Cookie` with `sessionId`. Browser sends `Cookie`. Server looks up session data.'
                                },
                                {
                                    heading: 'Insight:',
                                    text: 'Server maintains state. Less scalable horizontally.'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Authentication Methods: Stateless (JWT) vs. Stateful (Session) (Perfected Borders)

1. Token-Based (JWT): Stateless Server                  2. Session-Based: Stateful Server
   (Ideal for APIs, SPAs, Mobile Apps)                     (Traditional Web Apps)

┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   Client        │       │     Server      │       │   Client        │       │     Server      │
│  (User/Pass)    │       │ (Node.js)       │       │  (Browser)      │       │ (Node.js + Store)│
└─────────┬───────┘       └─────────┬───────┘       └─────────┬───────┘       └─────────┬───────┘
          │ 1. Login (Creds)        │                         │ 1. Login (Creds)        │
          ├─────────────────────────▶                         ├─────────────────────────▶
          │                         │ 2. Generates JWT        │                         │ 2. Creates Session ID
          │                         │   (Signed Token)        │                         │   Stores Session Data
          │◀────────────────────────┤ 3. Responds with JWT    │◀────────────────────────┤ 3. Responds with Set-Cookie
          │ (Client stores JWT)     │                         │ (Client stores Cookie)  │
          │                         │                         │                         │
          │ 4. Req (Auth: Bearer JWT)│                         │ 4. Req (Cookie: SID)    │
          ├─────────────────────────▶                         ├─────────────────────────▶
          │                         │ 5. Verifies JWT         │                         │ 5. Looks Up Session Data
          │                         │   (NO SERVER STATE)     │                         │   (SERVER MAINTAINS STATE)
          │                         │                         │                         │
          │◀────────────────────────┤ 6. Response             │◀────────────────────────┤ 6. Response
          └─────────────────┘       └─────────────────┘       └─────────────────┘       └─────────────────┘

Insight: Statelessness enables horizontal scaling.
`
                        }
                    ]
                }
            ]
        },
        {
            type: 'week',
            title: '🛢️ Week 3: Databases - Your API\'s Memory',
            content: [],
            days: [
                {
                    title: '🗃 Day 11: MySQL Intro (SQL) - Structured Persistence',
                    sections: [
                        {
                            heading: 'SQL (Structured Query Language):',
                            text: 'Language for **Relational Databases** (MySQL, Postgres).'
                        },
                        {
                            heading: 'Schema:',
                            text: 'Predefined structure (tables, columns, types, relations). Enforces **data integrity**. 🧱'
                        },
                        {
                            heading: 'Joins:',
                            text: 'Combine data from multiple tables based on relationships.'
                        },
                        {
                            heading: 'ACID Properties:',
                            text: '**A**tomicity, **C**onsistency, **I**solation, **D**urability. Guarantees **transaction reliability**.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Best for **structured data**, complex relationships, high integrity (e.g., financial, inventory).'
                        }
                    ]
                },
                {
                    title: '✍️ Day 12: CRUD MySQL - Interacting with Relational Data',
                    sections: [
                        {
                            heading: 'CRUD:',
                            text: '**C**reate, **R**ead, **U**pdate, **D**elete. The four fundamental database operations.'
                        },
                        {
                            heading: 'SQL Commands:',
                            text: '`CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE);` (Define structure)\n`INSERT INTO users (name, email) VALUES (\'Alice\', \'alice@example.com\');` (Add record)\n`SELECT * FROM users WHERE id = 1;` (Retrieve record)\n`UPDATE users SET name = \'Bob\' WHERE id = 1;` (Modify record)\n`DELETE FROM users WHERE id = 1;` (Remove record)'
                        }
                    ]
                },
                {
                    title: '🍃 Day 13: MongoDB Intro (NoSQL) - Flexible Persistence',
                    sections: [
                        {
                            heading: 'MongoDB:',
                            text: '**Document Database** (NoSQL). Stores flexible, JSON-like **BSON documents**.'
                        },
                        {
                            heading: 'Collections:',
                            text: 'Analogous to tables, but hold **schemaless** documents.'
                        },
                        {
                            heading: 'Flexibility:',
                            text: 'No fixed schema. Documents can have varying fields.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Best for **unstructured/semi-structured data**, rapidly changing models, high scale (e.g., user profiles, IoT).'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
MongoDB: Document-Oriented Flexibility (Perfected Borders)

┌───────────────────────────────────────────────┐
│              `users` Collection (Dynamic Schema)        │
├───────────────────────────────────────────────┤
│  {                                            │
│    "_id": ObjectId("65c5e..."),             │
│    "name": "Alice",                          │
│    "email": "alice@email.com"                │
│  }                                            │
├───────────────────────────────────────────────┤
│  {                                            │
│    "_id": ObjectId("65c5f..."),             │
│    "username": "BobB",                       │
│    "age": 30,                                │
│    "preferences": {                          │
│      "theme": "light"                        │
│    }                                         │
│  }                                            │
└───────────────────────────────────────────────┘

Insight: Speed of iteration outweighs rigid schema for certain data.
`
                        }
                    ]
                },
                {
                    title: '🔁 Day 14: CRUD MongoDB - Querying Documents',
                    sections: [
                        {
                            heading: 'MongoDB Shell/Driver methods:',
                            text: '`db.users.insertOne({ name: \'Alice\', age: 25 });` (Create)\n`db.users.find({ age: { $gt: 20 }, name: "Alice" });` (Read)\n`db.users.updateOne({ name: \'Alice\' }, { $set: { age: 26, status: \'active\' } });` (Update)\n`db.users.deleteOne({ name: \'Alice\' });` (Delete)'
                        }
                    ]
                },
                {
                    title: '⚔️ Day 15: SQL vs NoSQL - Strategic Choice',
                    sections: [
                        {
                            heading: 'Insight:',
                            text: 'Pick DB based on data\'s nature, relationships, scale needs.'
                        },
                        {
                            heading: 'SQL:',
                            text: 'High integrity, complex joins, structured. (Banking, orders)'
                        },
                        {
                            heading: 'NoSQL:',
                            text: 'Flexibility, scalability, nested data. (Profiles, logs)'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
SQL vs. NoSQL: The Data Strategy (Perfected Borders)

┌───────────────────────────┬───────────────────────────┐
│           SQL (Relational)│          NoSQL (Non-Relational)│
├───────────────────────────┼───────────────────────────┤
│  Structured Schema        │  Flexible/No Schema       │
│  Tables (Rows/Cols)       │  Documents/Key-Value/Graph│
│  Strong ACID              │  BASE Consistency (Eventual)│
│  Complex JOINS            │  Embedded/Nested Data     │
│  Vertical Scale           │  Horizontal Scale         │
│  (MySQL, PostgreSQL)      │  (MongoDB, Redis)         │
└───────────────────────────┴───────────────────────────┘

Insight: Database choice is a strategic architectural decision.
`
                        }
                    ]
                }
            ]
        },
        {
            type: 'week',
            title: '🧪 Week 4: ORM & ODM - Abstracting Database Interactions',
            content: [],
            days: [
                {
                    title: '🌐 Day 16: Intro to Prisma (ORM) - Type-Safe SQL Abstraction',
                    sections: [
                        {
                            heading: 'ORM (Object-Relational Mapper):',
                            text: 'Interact with **SQL DBs** using **JS objects** instead of raw SQL.'
                        },
                        {
                            heading: 'Prisma:',
                            text: 'Modern ORM. Generates **type-safe client**. Autocompletion, migrations.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Boosts productivity. Reduces SQL boilerplate/injection risks.'
                        }
                    ]
                },
                {
                    title: '🧬 Day 17: Prisma Schema - Your Database Blueprint as Code',
                    sections: [
                        {
                            heading: 'Prisma Schema:',
                            text: 'Declarative file (`schema.prisma`). Defines models (tables), fields, relations.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Source of truth for client generation, migrations.'
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Prisma Schema: Database Definition as Code (Perfected Borders)

// schema.prisma: The Database Blueprint
model User {
  id        Int      @id @default(autoincrement()) // Primary key, auto-incrementing
  email     String   @unique                       // Unique constraint
  name      String?                                // Optional string
  posts     Post[]                                 // One-to-many relation to Post
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id]) // Relation to User
  authorId  Int?                                   // Foreign Key
}

Quantum Insight: Your code defines your database. Changes in schema.prisma → database migrations.
`
                        }
                    ]
                },
                {
                    title: '🔍 Day 18: Advanced Prisma - Powerful Queries',
                    sections: [
                        {
                            heading: 'Prisma Client:',
                            text: 'Type-safe, chainable methods for CRUD, filtering, sorting, pagination, relations.'
                        },
                        {
                            type: 'code',
                            lang: 'javascript',
                            content: String.raw`
// Advanced Prisma: Concise, Type-Safe Queries
const users = await prisma.user.findMany({
  where: { name: { contains: 'a' } }, // Filter
  orderBy: { createdAt: 'desc' },      // Sort
  include: { posts: true },            // Eager load relations
  take: 10, skip: 0                     // Pagination
});

// Transactions: Atomicity for multiple operations
await prisma.$transaction([
  prisma.user.updateMany({ where: { active: false }, data: { status: 'inactive' } }),
  prisma.log.create({ data: { message: 'Updated inactive users' } })
]);
`
                        },
                        {
                            heading: 'Insight:',
                            text: 'Abstraction simplifies complexity, maintains type safety.'
                        }
                    ]
                },
                {
                    title: '🍃 Day 19: Mongoose ODM - MongoDB\'s Schema Layer',
                    sections: [
                        {
                            heading: 'ODM (Object-Document Mapper):',
                            text: 'Adds **schema layer** over **MongoDB\'s** flexible documents.'
                        },
                        {
                            heading: 'Mongoose:',
                            text: 'Popular ODM for MongoDB/Node. Defines models with validation, hooks, query builders.'
                        },
                        {
                            heading: 'Insight:',
                            text: 'Brings structure/validation to MongoDB. Ensures predictable data.'
                        }
                    ]
                },
                {
                    title: '🧠 Day 20: Mongoose Model Diagram - Structured Flexibility',
                    sections: [
                        {
                            heading: 'Mongoose Layer:',
                            subsections: [
                                {
                                    heading: 'Schema:',
                                    text: 'Blueprint for documents. Defines fields, types, validators.'
                                },
                                {
                                    heading: 'Model:',
                                    text: 'Compiled schema. API for DB ops (`User.find()`).'
                                },
                                {
                                    heading: 'Validation:',
                                    text: 'Mongoose handles schema validation *before* data is sent to MongoDB.'
                                },
                                {
                                    heading: 'Type Casting:',
                                    text: 'Mongoose automatically converts data types.'
                                }
                            ]
                        },
                        {
                            type: 'code',
                            lang: 'ascii-diagram',
                            content: String.raw`
Mongoose ODM: Layering Structure on Flexibility (Perfected Borders)

┌───────────────────────────────────┐
│         Your Application          │
│         (JavaScript Code)         │
└─────────────────┬─────────────────┘
                  │
┌─────────────────▼─────────────────┐
│            Mongoose ODM           │
├───────────────────────────────────┤
│  1. Schema Definition             │
│     (e.g., `{ name: String, age: { type: Number, min: 0 } }`)│
├───────────────────────────────────┤
│  2. Model API (CRUD Ops)          │
│     (e.g., `User.find()`, `User.create()`)│
├───────────────────────────────────┤
│  3. Validation & Type Casting     │
│     (Enforces rules, converts types)│
└─────────────────┬─────────────────┘
                  │
┌─────────────────▼─────────────────┐
│          MongoDB Database         │
│        (Schemaless Documents)     │
└───────────────────────────────────┘

Quantum Insight: Mongoose balances MongoDB's agility with app-level consistency.
`
                        }
                    ]
                }
            ]
        }
    ];

    // Function to render notes content into HTML
    function renderNotes() {
        notesContent.forEach(week => {
            const weekDetails = document.createElement('details');
            weekDetails.className = 'week-details';
            weekDetails.open = true; // Keep weeks open by default

            const weekSummary = document.createElement('summary');
            weekSummary.className = 'text-2xl sm:text-3xl font-extrabold text-blue-700 cursor-pointer p-4 sm:p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition-colors duration-200 flex justify-between items-center';
            weekSummary.innerHTML = `<span>${week.title}</span>`;
            weekDetails.appendChild(weekSummary);

            const weekContentDiv = document.createElement('div');
            weekContentDiv.className = 'details-content p-4 sm:p-6';

            week.days.forEach(day => {
                const dayDetails = document.createElement('details');
                dayDetails.className = 'day-details mb-4';
                dayDetails.open = true; // Keep days open by default

                const daySummary = document.createElement('summary');
                daySummary.className = 'text-xl sm:text-2xl font-bold text-gray-800 cursor-pointer p-3 sm:p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center';
                daySummary.innerHTML = `<span>${day.title}</span>`;
                dayDetails.appendChild(daySummary);

                const dayContentDiv = document.createElement('div');
                dayContentDiv.className = 'details-content p-3 sm:p-4';

                day.sections.forEach(section => {
                    if (section.type === 'code') {
                        const pre = document.createElement('pre');
                        const code = document.createElement('code');
                        code.textContent = section.content;
                        if (section.lang === 'ascii-diagram') {
                            pre.classList.add('ascii-diagram');
                        } else {
                            code.classList.add(`language-${section.lang}`);
                        }
                        pre.appendChild(code);
                        dayContentDiv.appendChild(pre);
                    } else {
                        const sectionDiv = document.createElement('div');
                        if (section.heading) {
                            const h3 = document.createElement('h3');
                            h3.innerHTML = section.heading;
                            sectionDiv.appendChild(h3);
                        }
                        if (section.text) {
                            const p = document.createElement('p');
                            p.innerHTML = section.text.replace(/(\p{Emoji})/gu, '<span class="emoji">$1</span>'); // Add emoji styling
                            sectionDiv.appendChild(p);
                        }
                        if (section.subsections) {
                            section.subsections.forEach(sub => {
                                const h4 = document.createElement('h4');
                                h4.innerHTML = sub.heading;
                                sectionDiv.appendChild(h4);
                                const p = document.createElement('p');
                                p.innerHTML = sub.text.replace(/(\p{Emoji})/gu, '<span class="emoji">$1</span>'); // Add emoji styling
                                sectionDiv.appendChild(p);
                            });
                        }
                        dayContentDiv.appendChild(sectionDiv);
                    }
                });
                dayDetails.appendChild(dayContentDiv);
                weekContentDiv.appendChild(dayDetails);
            });
            weekDetails.appendChild(weekContentDiv);
            notesContainer.appendChild(weekDetails);
        });
    }

    renderNotes();
});
