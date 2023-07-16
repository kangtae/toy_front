
type Props= {
	key: string,
	inputType: string,
	placeholder: string,
	handleChange: (key: string, value: string) => void;
}


export default function commonInput(props: Props) {
	const {inputType,  placeholder, handleChange, key} = props;
	return <>
		<input type={inputType}
		       placeholder={placeholder}
		       onChange={(e)=>handleChange(key,e.target.value)}
		/>
	</>;
}
