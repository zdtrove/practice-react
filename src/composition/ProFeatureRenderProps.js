import React from "react";

export default function ProFeatureRenderProps(props) {
    if (props.pro) {
        return props.render();
    } else {
        return (
            <h5 className="bg-warning text-white text-center">
                This is a Pro Feature
            </h5>
        )
    }
}