import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import Michelle from "./Michelle";

export default function App() {
  const [action, setAction] = useState("TPose");
  return (
    <>
      <Canvas className="michelle">
        <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 2]} color="red" />
        <pointLight intensity={2} position={[2, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <Suspense fallback={null}>
          <Michelle action={action} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="controls">
        <button
          className="run"
          onClick={() => {
            setAction("RunForward");
          }}
        >
          {" "}
          Run!
        </button>
        <button
          className="death"
          onClick={() => {
            setAction("Death");
          }}
        >
          Death
        </button>
        <button
          onClick={() => {
            setAction("DrawArrow");
          }}
        >
          Draw
        </button>

        <button
          className="idle"
          onClick={() => {
            setAction("StandingIdle");
          }}
        >
          {" "}
          Idle
        </button>
        <button
          onClick={() => {
            setAction("DiveForward");
          }}
        >
          {" "}
          Dive
        </button>
        <button
          onClick={() => {
            setAction("WalkDegree");
          }}
        >
          {" "}
          Turn
        </button>

        <button
          onClick={() => {
            setAction("Kick");
          }}
        >
          {" "}
          Kick
        </button>
      </div>
    </>
  );
}
