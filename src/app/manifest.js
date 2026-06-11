export const dynamic = "force-static";

export default function manifest() {
	return {
		name: "Simon Says Hello",
		short_name: "Simon Says Hello",
		start_url: "/",
		display: "standalone",
		background_color: "#1F2937",
		theme_color: "#E94560",
		icons: [
			{
				src: "/icon.png",
				sizes: "any",
				type: "image/png",
			},
		],
	};
}
