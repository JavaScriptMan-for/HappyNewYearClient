import  {FC} from "react"
import Send from '../components/Send';
import Header from "../components/Header"
import "../src/App.css"

const MainPage:FC = ()=> {
    return (
        <>
            <Header>Отправь сообщение с Новым годом</Header>
            <Send />
        </>
    )
}
export default MainPage;