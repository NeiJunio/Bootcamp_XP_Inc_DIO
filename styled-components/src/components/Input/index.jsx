// import { Link } from "react-router-dom";

import {InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, ...rest }) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
               <InputText {...rest} />
            </InputContainer>
        </>
    )
}

export default Input;