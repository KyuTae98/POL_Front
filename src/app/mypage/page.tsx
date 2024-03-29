import React from "react";

import MyPageSidebarForm from "@/components/mypagesidebar/MyPageSidebarForm";
import MyPageInfoForm from "@/components/mypageinfo/MyPageInfo";

const mypage = () => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="pl-36 pt-16">
                    <nav className="px-0 flex">
                        <MyPageSidebarForm />
                        <MyPageInfoForm />
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default mypage;