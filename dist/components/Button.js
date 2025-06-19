import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ text, onClick }) => {
    return (_jsx("button", { onClick: onClick, style: {
            background: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
        }, children: text }));
};
