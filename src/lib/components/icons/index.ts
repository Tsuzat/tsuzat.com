import {
	MoonStar,
	Sun,
	Plus,
	CalendarDays,
	ArrowUpRight,
	Clock,
	Send,
	Eye,
	ThumbsUp,
	LogOut,
	Pen,
	Trash2
} from '@lucide/svelte';
import Accenture from './Accenture.svelte';
import Neovim from './Neovim.svelte';
import Github from './Github.svelte';
import LinkedIn from './LinkedIn.svelte';
import Email from './Email.svelte';

const Icons = {
	sun: Sun,
	moon: MoonStar,
	plus: Plus,
	calendar: CalendarDays,
	clock: Clock,
	eye: Eye,
	like: ThumbsUp,
	logOut: LogOut,
	send: Send,
	arrowUpRight: ArrowUpRight,
	edit: Pen,
	delete: Trash2,
	accenture: Accenture,
	neovim: Neovim,
	github: Github,
	linkedIn: LinkedIn,
	email: Email
};

export default Icons;
