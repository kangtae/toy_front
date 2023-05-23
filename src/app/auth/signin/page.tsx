import Signin from '@/components/Signin';
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import { getServerSession  } from "next-auth";
import {getProviders} from "next-auth/react";
import { redirect } from 'next/navigation';


export default async function SignPage() {
	const session = await getServerSession(authOptions);

	if(session) {
		console.log("session1",session)
		redirect('/')
	}
	console.log("session2",session)
	const providers = (await getProviders()) ?? {};

	return (
		<div>
			<Signin providers={providers} />;
		</div>
	)

}