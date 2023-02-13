import './style.css';

function Select(props) {
    const { value, setValue, options, text } = props;
    let id = props.id ?? 'input-' + parseInt(Math.random() * 10000);

    return (
        <div className='form-group'>
            <label htmlFor={id}>{text}</label>
            <select id={id} value={value} onChange={e => setValue(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;