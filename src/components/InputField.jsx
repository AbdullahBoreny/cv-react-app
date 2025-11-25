

export default function InputField({label, name, value, onChange}) {

    return (
        <>
        <label >{label}</label>
        <input
        name={name}
        value={value}
        onChange={onChange}
        required
        />
        </>
    )

}