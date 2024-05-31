import React from "react";

export default function CustomButton({variant, label, onClick}) {
    return (
        <div className={`inline-block cursor-pointer py-3 px-6 ${variant == 'dark' ? 'bg-black hover:bg-gray' : 'bg-airbnb'} text-white rounded-xl
            text-center flex-1`}
            onClick={onClick}
        >{label}</div>
    );
}
