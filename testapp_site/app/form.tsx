interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;

} 



const Form: React.FC<FormProps> = (props) => {
const isPromptValid = props.prompt.length <= props.characterLimit;
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

    return (
    <>
      <p>
        Give me a topic for a shitty joke! then ill give you 5 words that rhyme!
      </p>
      <input
       type="text"
        placeholder="Bagels" 
        value={props.prompt} 
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
        onKeyDown={handleKeyDown} /> 
        <div>{props.prompt.length}/{props.characterLimit}
        </div>
      <button 
      onClick= {props.onSubmit} disabled={props.isLoading || !isPromptValid} >Submit
      </button>
    </>
    )
}

export default Form;