
interface ResultsProps{
    message: string;
    keywords: any;
    onBack: any;
    prompt: string;

}


const Results: React.FC<ResultsProps> = (props) => {
const keywordElement = [];
    for (let i = 0; i < props.keywords.length; i++) {
      const element = (
        <div key={i}>
          <b>{props.keywords[i]}</b>&nbsp;
        </div>
      );
      
    keywordElement.push(element)
    }

    return <>

    <div>
      <div>
        <div className="  bg-slate-800 rounded-lg border-2 border-black border-opacity-50 w-auto m-auto ">
        <div className="font-light opacity-20 m-1 w-1 h-5">
          Prompt:
        </div>
        <div className="m-auto w-5/6 p-1 font-semibold text-2xl">
          {props.prompt}
          </div>
        </div>
        <div className="  bg-slate-800 rounded-lg border-2 border-black border-opacity-50 w-auto m-auto ">
        <div className="font-light opacity-20 m-1 w-1 h-5" >
            Joke:
        </div>
        <div className="m-auto w-5/6 p-2 font-semibold text-2xl" >
          {props.message}
        </div>
        </div>
      </div>
      <div className="  bg-slate-800 rounded-lg border-2 border-black border-opacity-50 w-auto m-auto ">
        <div className="font-light opacity-20 m-1 w-1 h-5">
            Rhymes
        </div>
      <div className=" m-auto w-1/2 p-2 text-2xl">
        <div>{keywordElement} </div>
        </div>
      </div>
    </div>
      <button
      className="mt-10 text-3xl bg-gradient-to-bl from-slate-500 to-slate-800 rounded-lg border-2 border-black disabled:opacity-30 w-3/4 p-3" 
      onClick={props.onBack}>
        Back
      </button>
    </>
}

export default Results;