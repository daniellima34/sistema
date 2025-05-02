import { Link } from "react-router-dom"
import svg from "/public/mobile login-bro.svg"

export default function LoginPage(){
    return (
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center">
                <Link to="/cadastro">cadastrar</Link>
            </div>
            <div className="w-[60%] h-full bg-[#6366EE] flex items-center justify-center rounded-l-lg flex-col">
                <img width={600} src={svg} all="imagem animada" />
                <p className="text-white font-bold w-[300px] text-[20px] text-center " A melhor experiencia de login que você já teve na sua vida></p>
            </div>
        </div>
    ) 
}