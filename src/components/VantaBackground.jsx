// src/components/VantaDotsBackground.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VantaDotsBackground = () => {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        window.THREE = THREE;
        let vantaInstance = null;

        import("vanta/dist/vanta.dots.min").then((VANTA) => {
            if (!vantaEffect.current) {
                vantaInstance = VANTA.default({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    size: 10.0,
                    spacing: 100.0,
                    showLines: false,
                    color: 0x007ACC,
                    backgroundColor: 0xffffff,
                });
                vantaEffect.current = vantaInstance;
            }
        });

        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy();
            vantaEffect.current = null;
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                top: 0,
                left: 0,
            }}
        />
    );
};

export default VantaDotsBackground;