import React from 'react';

import './CustomButton.scss';

interface CustomButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?(event: React.FormEvent<HTMLButtonElement>) : void;
}
const CustomButton: React.FC<CustomButtonProps> = ({children, className, type, onClick}) => (
    <button className={className ? className : 'btn'} type={type ? type : "submit"} onClick={onClick}>
        {children}
    </button>
);

export default CustomButton;