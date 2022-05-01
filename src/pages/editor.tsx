import type { NextPage } from 'next';
import Head from 'next/head';
import { Resume } from 'src/core/containers/Resume';
import { Sidebar } from 'src/core/containers/Sidebar';
import { LeftNav } from 'src/core/containers/LeftNav';
import { FlexHC } from 'src/styles/styles';
import { useState, useEffect } from 'react';
import MainNav from 'src/core/containers/mainNav';
import { useRouter } from 'next/router';

const Editor: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('user') == null) router.push('/');
  }, []);
  //  const [val,setVal]=useState({"email":"","password":""})
  //  let inc=(e)=>{
  //    setVal({...val,[e.target.name]:e.target.value})
  //  }
  return (
    <FlexHC>
      <Head>
        <title>Resume Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LeftNav />
      <Resume />
      <Sidebar />
    </FlexHC>
  );
};

export default Editor;

{
  /* <FlexHC>
      <Head>
        <title>Resume Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftNav />
    
      <div style={{textAlign:'center'}}>
      <MainNav/>
      <div style={{display:"flex",justifyContent:"center"}}>  
      <div style={{marginRight:"5px"}}>
       
       New User? - Signup <br/>
       <input name="email" value={val.email} onChange={inc}/>
       <input name="password" value={val.password} onChange={inc} /> <br/>
       <button> Sign Up</button>
      </div>
      <div>
      Existing user? - SignIn <br/>
      <input/> <br/>
      <button> Fetch Data</button>
      </div>     
      
  
      
      </div>
      <Resume />
      </div>
      <Sidebar />
    </FlexHC> */
}
