'use client'

import Link from "next/link";
import HomeIcon from "@/components/ui/icons/HomeIcon";
import HomeFillIcon from "@/components/ui/icons/HomeFillIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import SearchFillIcon from "@/components/ui/icons/SearchFillIcon";
import NewIcon from "@/components/ui/icons/NewIcon";
import NewFillIcon from "@/components/ui/icons/NewFillIcon";
import {usePathname} from "next/navigation";


const menu = [
	{
		href : '/',
		icon: <HomeIcon />,
		clickedIcon: <HomeFillIcon />
	},
	{
		href: "/search",
		icon: <SearchIcon />,
		clickedIcon: <SearchFillIcon />
	},
	{
		href: "/new",
		icon: <NewIcon />,
		clickedIcon: <NewFillIcon />
	}
]
export default function Navbar(props) {
	const pathName = usePathname()
	return <div>
		<Link href="/">
			<h1>Instantgram</h1>
		</Link>
		<nav>
			<ul>
				{
					menu.map(item => <li key={item.href}>
						<Link href={item.href}>
							{pathName === item.href ? item.clickedIcon : item.icon}
						</Link>
					</li>)
				}
			</ul>
		</nav>
	</div>;
}