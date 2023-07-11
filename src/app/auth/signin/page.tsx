import Signin from '@/components/Signin';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className='flex justify-center column flex-col	 mt-24'>
	    <h1>REDET</h1>
	    <div>
		    <h2>아이디& 휴대폰 번호</h2>
		    <input type="text" placeholder="아이디를 입력하시기 바랍니다"/>
	    </div>
	    <div>
		    <h2>비밀번호</h2>
		    <input type="text" placeholder="비밀번호를 입력하시기 바랍니다"/>
	    </div>
			<div>
				<button>로그인</button>
			</div>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}
