
interface ResultsProps{
    message: string;
    keywords: any;
    onBack: any;
    prompt: string;

}


const Results: React.FC<ResultsProps> = (props) => {
const keywordElement = [];
    for (let i = 0; i < props.keywords.length; i++) {
    const element = <div key={i}>{props.prompt} rhymes with <b>{props.keywords[i]}</b></div>;
    keywordElement.push(element)
    }

    return <>

    <div>
      <div>
        <div><b>Prompt:</b></div>
        <div>{props.prompt}</div>
        <div><b>Joke:</b></div>
        <div> {props.message}</div>
      </div>
      <div><b>Rhymes</b>:</div>
      <div> {keywordElement}</div>
    </div>
    <div>Didnt work? well <b>fuck</b> eh?</div>
    <button onClick={props.onBack}>Back</button>
    </>
}

export default Results;