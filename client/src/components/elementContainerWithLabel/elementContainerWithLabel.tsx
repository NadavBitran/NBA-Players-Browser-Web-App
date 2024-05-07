import React from 'react';

import './elementContainerWithLabel.scss';

interface ElementContainerWithLabelProps {
    label: string;
    children: React.ReactNode;
}

const ElementContainerWithLabel: React.FC<ElementContainerWithLabelProps> = ({ label, children }) => {
    return (
        <div className="element-container">
            <label className='element-container__label'>{label}</label>
            <div className="element-container__content">{children}</div>
        </div>
    );
};

export default ElementContainerWithLabel;