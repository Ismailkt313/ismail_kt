export interface CaseStudyData {
	title: string;
	subtitle: string;
	problem: string;
	solution: string;
	architecture: string;
	challenges: string;
	tradeoffs: string;
	security: string;
	deployInfo: string;
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
	errorlens: {
		title: "ErrorLens — AI-Powered Debugging Assistant",
		subtitle: "Automating root-cause error analysis and semantic code debugging.",
		problem:
			"Developers waste hours pasting error stack traces into search engines. Context-free searching lacks codebase specific metrics, leading to generic fixes.",
		solution:
			"ErrorLens parses active runtime stack traces, semantic context tags, and routes them to LLM APIs with confidence scoring models, returning immediate fixes.",
		architecture: `
+------------------+     JSON Payload      +-----------------------+
|  Dev Client CLI  | --------------------> |  Express API Gateway  |
+------------------+                       +-----------------------+
                                                       |
                                            +----------+----------+
                                            |                     |
                                            v                     v
                                  +-------------------+  +-------------------+
                                  |   LLM Providers   |  |   MongoDB Cache   |
                                  | (OpenAI / Claude) |  |   (Error Logs)    |
                                  +-------------------+  +-------------------+
		`,
		challenges:
			"Rate limiting on LLM providers under high concurrent client calls was causing timeouts.",
		tradeoffs:
			"Chose MongoDB document models over PostgreSQL schemas to log unstructured raw CLI JSON payloads without migrations.",
		security:
			"Inputs are sanitized before API parsing; client tokens are stored securely in headers.",
		deployInfo:
			"Hosted on Render with auto-deployment git pipelines and automated Vercel preview gateways.",
	},
	quickwork: {
		title: "QuickWork — Local Service Matcher",
		subtitle: "Real-time task allocations and service matches using WebSockets.",
		problem:
			"Traditional local service systems rely on listings and email checkouts, leading to delay matches and zero dynamic status tracking.",
		solution:
			"QuickWork connects users directly with local providers and handles dynamic task tracking with WebSocket status synchronization.",
		architecture: `
+-------------------+      WebSockets      +-----------------------+
| User/Provider UI  | <==================> |  Socket.IO Gateway    |
+-------------------+                      +-----------------------+
                                                       |
                                                       v
                                           +-----------------------+
                                           |  Node/Express Server  |
                                           +-----------------------+
                                                       |
                                                       v
                                           +-----------------------+
                                           |     PostgreSQL DB     |
                                           +-----------------------+
		`,
		challenges:
			"Maintaining socket connection state when mobile users navigate cellular network zones.",
		tradeoffs:
			"Used PostgreSQL transaction logs to guarantee data integrity for payment state allocations.",
		security:
			"Implemented JWT authentication and CORS configurations to block external API scripts.",
		deployInfo:
			"Hosted on AWS EC2 behind Nginx proxy servers, database backed up automatically on storage grids.",
	},
	timzo: {
		title: "TIMZO — Watch E-Commerce Platform",
		subtitle: "Optimized payment gateways and inventory tracking.",
		problem:
			"Complex shopping checkout flows lead to customer cart bounce rates during watch order placements.",
		solution:
			"TIMZO incorporates secure order verification, Razopay payment checkouts, and clean admin inventory dashboards.",
		architecture: `
+------------------+    Secure Checkout    +-----------------------+
| E-Commerce UI    | --------------------> |   Express Backend     |
+------------------+                       +-----------------------+
                                                       |
                                            +----------+----------+
                                            |                     |
                                            v                     v
                                  +-------------------+  +-------------------+
                                  |   Razorpay API    |  |   MongoDB Store   |
                                  | (Payment Gateway) |  | (Inventory/User)  |
                                  +-------------------+  +-------------------+
		`,
		challenges: "Webhooks sync checks failing due to latency during high-traffic order calls.",
		tradeoffs:
			"Utilized session auth cookies instead of custom state parameters to simplify compliance checklists.",
		security:
			"Transactions verified via signature checks inside the Express app prior to updating stock.",
		deployInfo: "Hosted on Render backing up order data models in MongoDB Atlas clusters.",
	},
	syncchat: {
		title: "SyncChat — Real-Time Chat App",
		subtitle: "Dynamic messaging channels and live communication.",
		problem:
			"Traditional chat frameworks show latency during high-frequency channel messaging updates.",
		solution:
			"SyncChat coordinates chat events over active socket connections, rendering channels dynamically.",
		architecture: `
+------------------+      WebSockets      +-----------------------+
|   Chat Client    | <==================> |  Express Gateway API  |
+------------------+                      +-----------------------+
                                                      |
                                                      v
                                          +-----------------------+
                                          |   MongoDB Database    |
                                          +-----------------------+
		`,
		challenges: "Optimizing state renders when users fetch large historical message logs.",
		tradeoffs:
			"Chose MongoDB for messages storage to scale horizontal reading operations easily.",
		security: "Message validation schemas check inputs before broadcasting events.",
		deployInfo: "Automated Render git commits pipelines triggered on master branches.",
	},
	devshowroom: {
		title: "DevShowroom — Developer Portfolio Presenter",
		subtitle: "Sleek shareable showcase templates beyond GitHub.",
		problem: "Recruiters struggle to read raw GitHub source files to check code quality.",
		solution:
			"DevShowroom organizes dynamic portfolios, technical projects, and skills highlights in one dashboard.",
		architecture: `
+------------------+     Static HTML      +-----------------------+
|  Recruiter / Visitor | --------------------> | Next.js App Router    |
+------------------+                      +-----------------------+
                                                      |
                                                      v
                                          +-----------------------+
                                          |      GitHub API       |
                                          +-----------------------+
		`,
		challenges: "GitHub API rate limit calls during high page views.",
		tradeoffs: "Implemented cached static pages mapping on Next.js to minimize API fetches.",
		security: "Keys and API tokens are loaded in environment variables.",
		deployInfo: "Vercel edge network deployment pipelines.",
	},
	bistrohub: {
		title: "BistroHub — Dining Finder Hub",
		subtitle: "Local restaurant lists, maps, and details.",
		problem: "Local restaurant search engines show outdated menus and details.",
		solution: "BistroHub displays restaurants, reviews, and detail guides in a responsive UI.",
		architecture: `
+------------------+    REST Request      +-----------------------+
|   Diner Client   | --------------------> |  Express Listing API  |
+------------------+                      +-----------------------+
                                                      |
                                                      v
                                          +-----------------------+
                                          |   MongoDB Database    |
                                          +-----------------------+
		`,
		challenges: "Dynamic list sorting latency on large restaurant datasets.",
		tradeoffs: "Cached static search queries to speed up results.",
		security: "Form field sanitization on user review inputs.",
		deployInfo: "Render hosting clusters.",
	},
};
