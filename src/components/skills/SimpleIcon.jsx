import React from "react";
import * as simpleIcons from "simple-icons";

// "nextdotjs" -> simpleIcons.siNextdotjs
export function getSimpleIcon(slug) {
	if (!slug) return null;
	const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
	return simpleIcons[key] ?? null;
}

function luminance(hex) {
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

// Renders a Simple Icons brand logo in its official brand color. Brands whose
// color would vanish against the page background get a neutral fallback in
// that color scheme only.
const SimpleIcon = ({ slug, className = "" }) => {
	const icon = getSimpleIcon(slug);
	if (!icon) return null;

	const lum = luminance(icon.hex);
	const onLight = lum > 0.85 ? "#1f2937" : `#${icon.hex}`;
	const onDark = lum < 0.25 ? "#e2e8f0" : `#${icon.hex}`;

	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			aria-label={icon.title}
			className={`fill-[var(--brand)] dark:fill-[var(--brand-dark)] ${className}`}
			style={{ "--brand": onLight, "--brand-dark": onDark }}
		>
			<path d={icon.path} />
		</svg>
	);
};

export default SimpleIcon;
