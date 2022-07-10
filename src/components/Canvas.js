import React, { useRef, useEffect } from 'react';

const Canvas = ({ paperScript, style }) => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        paperScript(canvas);
    });

    return <canvas ref={canvasRef} style={style} resize="true" />
}

export default Canvas;