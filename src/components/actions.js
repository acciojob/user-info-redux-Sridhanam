import React from "react";
export const UpdateValues = (name,email) =>{
    return {
        type:"input",
        payload:{name,email}
    };
};
