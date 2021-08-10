import styled from "styled-components";

const InputForm = styled.div`
    label {
        font-size: 20px;
        color: red;
    }
    input {
        padding: 3px;
        margin-left: 17px;
        border: 2px solid red;
        border-radius: 5px;
        font-size: 17px;
    }
`;

const Input = ({ input, label }) => {
    return (
        <InputForm>
            <label htmlFor={input.id}>{label}</label>
            <input {...input}/>
        </InputForm>
    );
};

export default Input;