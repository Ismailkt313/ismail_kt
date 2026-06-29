export const trackEvent = (eventName: string, data?: Record<string, unknown>) => {
	// Custom tracking logger for privacy-focused setups
	console.log(`[Analytics Event]: ${eventName}`, data || "");

	// Hooks directly into Vercel Web Analytics if initialized on window
	if (typeof window !== "undefined") {
		const win = window as unknown as {
			va?: (type: string, options: { name: string; data?: Record<string, unknown> }) => void;
		};
		if (win.va) {
			win.va("event", { name: eventName, data });
		}
	}
};
