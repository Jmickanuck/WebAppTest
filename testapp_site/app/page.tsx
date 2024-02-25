"use client";
import { Snippet } from 'next/font/google';
import React from 'react';
import Form from './form';
import Results from './results';
import Image from "next/image";
import logo from "../public/SUPACAT.png"


const Home: React.FC = () => {
  const CHAR_LIMIT: number = 32;
  const ENDPOINT: string = "https://z8xibfni3b.execute-api.us-east-1.amazonaws.com/prod/generate_both"

  const [prompt, setPrompt] = React.useState(""); // State initialization inside the component
  const [message, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`).then((response) => response.json()).then(onResult);
    };
  

  const onResult = (data: any) => {
    setSnippet(data.message);
    setKeywords(data.keywords);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setPrompt("");
    setHasResult(false);
    setIsLoading(false);
  };

  console.log(message);
  console.log(keywords);



  let displayedElement = null;
  if (hasResult) {
    displayedElement = <Results message={message} keywords={keywords} onBack={onReset} prompt={prompt} />;}
   else { displayedElement =  <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHAR_LIMIT} />;

    }

  

  return (
    <div className='h-screen flex w-screen'>
      <div className='w-full h-auto m-auto p-4'>
        <div className='bg-slate-900 p-1 rounded-xl border-4 border-slate-950 border-gredient-80'>
          <div className='text-center mb-8 text-orange-100'>
        <Image src={logo} alt="Logo" width={100} height={100} className='m-auto rounded-md'/>
          <h1 className=' text-3xl font-semibold' >Test App!</h1>
          <div className='text-xs'>The first of its kind!</div>
          </div>
          <div className='text-center'>{displayedElement}</div>
          
        </div>
      </div>
    </div>

  );
  };

export default Home;
