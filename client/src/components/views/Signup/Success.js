import React from 'react'
import { Link } from "react-router-dom";

function Success() {
    return (
        <section className>
            <div className="">
                <h1>
                    회원 가입을 축하 합니다.
                </h1>
                <Link to="/login">
                    Login 하러 가기
                </Link>
            </div>
        </section>
    )
}

export default Success
