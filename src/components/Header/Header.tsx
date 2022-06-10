import React, {FC} from 'react';
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderMiddle} from "./HeaderMiddle/HeaderMiddle";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";

export const Header: FC = () => {
    return (
        <>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </>
    );
};