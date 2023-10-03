import React from 'react';
import {SelectOption} from '../../../../src/component/snippet';
import {Color} from '../../../../src/utils/color';

export const ResultRender = ({result}: {result: SelectOption | SelectOption[] | undefined}) => {
    return (
        <pre 
            style={{ 
            backgroundColor: Color.BLACK_LIGHT,
            color: Color.CYAN, 
            marginTop: '2rem',
            padding: '1rem',
        }}>
            <span style={{color: Color.GREY_DARK}}># Selected</span><br/>
            {JSON.stringify(result, null, 2)}
        </pre>
    )
}
        