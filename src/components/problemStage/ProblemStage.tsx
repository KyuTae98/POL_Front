import React from "react";

import ProblemStageSelectContainer from "./problemStageSelect/ProblemStageSelectContainer"
import ProblemStageContainer from "./problemStageContainer/ProblemStageContainer"
import ProblemStageForm from "./ProblemStageForm";
import { cookies } from "next/headers";
import Spacing80 from "../spacing/Spacing80";
import Spacing24 from "../spacing/Spacing24";

const ProblemStage = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value
    
    return (
        <main className="w-full flex flex-col items-center justify-center bg-gray-50">
            <Spacing24></Spacing24>
            <ProblemStageForm/>
            <Spacing24></Spacing24>
            <ProblemStageSelectContainer/>
            <Spacing80></Spacing80>
            <ProblemStageContainer 
                accessToken={POL_ACCESS_TOKEN}
                refreshToken={POL_REFRESH_TOKEN}
            />
        </main>
    )
}


export default ProblemStage
