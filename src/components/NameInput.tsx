interface NameInputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

function NameInput({name, onChange, onClick}: NameInputProps) {
  return (
    <div className="form-input">
      <input type="text" defaultValue={name} placeholder="Your Name" onChange={onChange}/>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default NameInput;