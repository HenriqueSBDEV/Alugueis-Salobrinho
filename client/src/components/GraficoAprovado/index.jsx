import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Registra todos os componentes necessários
Chart.register(...registerables);

const StatusAluguel = () => {
  const data = {
    labels: ["Aprovados", "Pendentes"],
    datasets: [
      {
        label: "Imóveis",
        data: [450, 50],
        backgroundColor: ["#3EB489", "#FF6384"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Status",
        },
      },
      y: {
        title: {
          display: true,
          text: "Número de Imóveis",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatusAluguel;
