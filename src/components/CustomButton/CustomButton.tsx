import React from 'react';

import './CustomButton.scss';

interface CustomButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    onSubmit?(event: React.FormEvent<HTMLButtonElement>) : void;
}
const CustomButton: React.FC<CustomButtonProps> = ({children, className, type, onSubmit}) => (
    <button className={className ? className : 'btn'} type={type ? type : "submit"} onSubmit={onSubmit}>
        {children}
    </button>
);

export default CustomButton;