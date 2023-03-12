import React from "react"

export default function Die(props) {
    let bgcolor = props.isHeld ? "#59E391" : "#FFFFFF"
    const styles = {
        backgroundColor: bgcolor
    }
    function dots(){
        let dot
        dot = []
        for (let i = 0; i < props.value; i++){
            dot.push(".")
        }
        return dot
    }
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }
    

    return (
        <div 
            style={styles} 
            className="die"
            onClick={props.hold}
        >
            <h2 className="top">
                {sliceIntoChunks(dots(), 3)[0]}
            </h2>
            <h2 className="lowera">
                {sliceIntoChunks(dots(), 3)[1]}
            </h2>
        </div>
    )
}
