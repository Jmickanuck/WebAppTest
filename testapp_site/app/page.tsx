"use client";
import { Snippet } from 'next/font/google';
import React from 'react';
import Form from './form';
import Results from './results';


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
    <>
    <h1>Test App!</h1>
      {displayedElement}
    </>
  );
  };

export default Home;
