import Signin from '@/components/Signin';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import CommonInput from "@/components/CommonInput"
import React, { useState } from 'react';

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

	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const handleChange = (key:string,value : string) => {
		setId(value)
	}

  return (
    <section className='flex justify-center column flex-col	 mt-24'>
	    <h1>REDET</h1>
	    <div>
		    <h2>아이디& 휴대폰 번호</h2>
		    <CommonInput
			    key={"setId"}
		      inputType={"text"}
		      placeholder={"아이디를 입력하시기 바랍니다"}
		      handleChange={handleChange}
		    ></CommonInput>
	    </div>
	    <div>
		    <h2>비밀번호</h2>
		    <CommonInput
			    key={"setPw"}
			    inputType={"text"}
			    placeholder={"비밀번호를 입력하시기 바랍니다"}
			    handleChange={handleChange}
		    ></CommonInput>
	    </div>
			<div>
				<button>로그인</button>
			</div>
    </section>
  );
}
