import React, { FC } from "react";
import Header from "../components/Header";
import SendToSantaClaus from "../components/SendToSantaClaus"
import "../src/App.css"
import "../src/style2.css"
const SendToSanta:FC = ()=> {
    return (
        <>
        <Header>Отправь письмо Деду Морозу</Header>
        <SendToSantaClaus />
        </>
    )
}
export default SendToSanta;
React