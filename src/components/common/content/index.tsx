import React from "react"
import { ContentType } from "types/common"
import "./style.css"


export function Content(props: {children?: React.ReactNode, contentType?: ContentType}) {
    return (
        <div className="content">
            <div className={`container`}>
                {props.children}
            </div>
        </div>
    )
}