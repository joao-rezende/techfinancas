import './style.css';

function Input(props) {
    const { value, setValue, type, text } = props;
    let id = props.id ?? 'input-' + parseInt(Math.random() * 10000);

    return (
        <div className='form-group'>
            <label htmlFor={id}>{text}</label>
            <input id={id} type={type} value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
}

export default Input;