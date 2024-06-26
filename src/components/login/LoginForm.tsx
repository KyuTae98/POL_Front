'use client'
import { useState } from "react";
import Link from "next/link";

import LoginInput from "./LoginInput";
import SocialLogin from "../socialLogin/SocialLogin";

import { LoginInLocally } from "@/utils/loginUtils/LoginUtil";
import SuccessAlert from "../alert/SuccessAlert";

const LoginForm = () => {
    const [id,setId] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const handleCloseAlert = () => {
        setShowAlert(false);
        window.location.replace("/");
    };

    return (
        <main className="loginSignUp">
            {showAlert && (
                <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
                    <SuccessAlert
                        title="로그인 성공"
                        message={alertMessage}
                        onClose={handleCloseAlert}
                    />
                </div>
            )}
            <form onSubmit={e=>LoginInLocally(e, id, password, setShowAlert, setAlertMessage, setLoginFailed)}>
                {loginFailed && <p className="text-xs ml-2 mb-2 text-danger-500">아이디 또는 비밀번호를 다시 확인해주세요</p>}
                <LoginInput name="loginEmail" id="loginEmail" type="text" placeholder="이메일" onChange={setId}/>
                <LoginInput name="loginPassword" id="loginPassword" type="password" placeholder="비밀번호" onChange={setPassword}/>
                <div className="flex justify-center mt-6">
                    <Link href="./findpassword" className="pl-0 pr-8 border-r border-black text-center">비밀번호찾기</Link>
                    <Link href="/signup" className="pl-8 pr-0 text-center">회원가입하기</Link>
                </div>
                <button className="loginSignUpBtn font-normal mt-6 mb-2">시작하기</button>
                <SocialLogin />
            </form>
        </main>
    )
}


export default LoginForm;
