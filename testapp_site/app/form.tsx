interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;

} 



const Form: React.FC<FormProps> = (props) => {

const isPromptValid = props.prompt.length < props.characterLimit;
const isNoInput = props.prompt.length == 0;
const updatePromptValue = (text: string) => {
  if (text.length <= props.characterLimit) {
    props.setPrompt(text)
  }
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key == 'Enter') {
    {props.onSubmit()};
  }
}

  let statusColour = 'text-slate-500';
  let statusText = null
  if (!isPromptValid) {
    statusColour = "text-red-500";
    statusText = "You have hit the character limit dumbass!"
  } 

    return (
    <>
      <p className="mb-4">
        Give me a topic for a shitty joke! then ill give you 5 words that rhyme!
      </p>
        <div className="text-md mb-4">
          <input
          className="p-1 w-full rounded-md text-slate-950 font-semibold focus:outline-stone-800 " 
          type="text"
          placeholder="Bagels" 
          value={props.prompt} 
          onChange={(e) => updatePromptValue(e.currentTarget.value)}
          onKeyDown={handleKeyDown} />
            <div className={statusColour + " flex justify-between text-xs my-1"}>
              <div>
                {statusText}
              </div>
              <div>
              {props.prompt.length}/{props.characterLimit}
            </div>
          </div>
           
        </div>
        <div>
      <button  
      className="mt-10 text-3xl bg-gradient-to-bl from-slate-500 to-slate-800 rounded-lg border-2 border-black disabled:opacity-30 w-3/4 p-3"
      onClick= {props.onSubmit} disabled={props.isLoading || !isPromptValid || isNoInput} >Submit
      
      </button>
      </div>
    </>
    )
}

export default Form;