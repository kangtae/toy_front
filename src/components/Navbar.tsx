import Link from "next/link";

const menu = [
	{
		href : '/', icon: <AiOutlineHome />
	}
]
export default function Navbar(props) {
	return <div>
		<Link href="/">
			<h1>Instargram</h1>
		</Link>
		<nav>
			<ul>

			</ul>
		</nav>
	</div>;
}