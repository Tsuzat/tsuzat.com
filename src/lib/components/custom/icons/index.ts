import Google from './Google.svelte';
import Accenture from './Accenture.svelte';
import Github from './Github.svelte';
import LinkedIn from './LinkedIn.svelte';
import X from './X.svelte';
import Email from './Email.svelte';

// Lucide icons
import Moon from 'lucide-svelte/icons/moon-star';
import Sun from 'lucide-svelte/icons/sun';
import Device from 'lucide-svelte/icons/computer';
import CalendarDays from 'lucide-svelte/icons/calendar-days';
import Clock from 'lucide-svelte/icons/clock';
import Copy from 'lucide-svelte/icons/copy';
import CopyCheck from 'lucide-svelte/icons/copy-check';
import Location from 'lucide-svelte/icons/map-pin';
import Briefcase from 'lucide-svelte/icons/briefcase';
import TypeScript from './langs/TypeScript.svelte';
import Java from './langs/Java.svelte';
import JavaScript from './langs/JavaScript.svelte';
import Spring from './langs/Spring.svelte';
import Tailwind from './langs/Tailwind.svelte';
import Azure from './langs/Azure.svelte';
import Jwt from './langs/JWT.svelte';

export const Icons = {
	moon: Moon,
	sun: Sun,
	calendar: CalendarDays,
	clock: Clock,
	copy: Copy,
	copyCheck: CopyCheck,
	location: Location,
	briefcase: Briefcase,

	// Logos
	device: Device,
	google: Google,
	github: Github,
	linkedin: LinkedIn,
	x: X,
	email: Email,
	accenture: Accenture,
	// Langs
	typescript: TypeScript,
	java: Java,
	javascript: JavaScript,
	spring: Spring,
	tailwind: Tailwind,
	azure: Azure,
	jwt: Jwt
};
