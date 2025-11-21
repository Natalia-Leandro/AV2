import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)", // ajusta com o navbar
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
        padding: "0",
        margin: "0",
      }}
    >
      <div
        style={{
          width: "650px",       // CARD BEM GRANDE
          padding: "40px",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        {/* Ícone */}
        <div style={{ fontSize: "100px", marginBottom: "20px" }}>🎓</div>

        {/* Título */}
        <h1
          style={{
            fontSize: "34px",
            color: "#4a0072",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Bem-vindo ao CRUD de Alunos
        </h1>

        {/* Texto */}
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            marginBottom: "28px",
          }}
        >
          Gerencie seus alunos de forma simples, rápida e eficiente.
        </p>

        {/* Botão */}
        <Link
          to="/alunos"
          style={{
            display: "block",
            textDecoration: "none",
            background: "#4a0072",
            color: "white",
            fontWeight: "bold",
            padding: "14px",
            borderRadius: "12px",
            fontSize: "18px",
            width: "70%",
            margin: "0 auto",
          }}
        >
          📋 Ir para Lista de Alunos
        </Link>
      </div>
    </div>
  );
}
