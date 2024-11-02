import React from "react";
import { Line } from "react-chartjs-2";

const CrescimentoGrafico = ({ labels, data }) => {
  const chartData = {
    labels: labels || ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total de Imóveis",
        data: data || [100, 150, 200, 250, 300, 400],
        fill: false,
        borderColor: "#3EB489",
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Meses"
        }
      },
      y: {
        title: {
          display: true,
          text: "Número de Imóveis"
        },
        beginAtZero: true,
      }
    }
  };

  return( 
    <div style={{ width: '600px', height: '400px' }}>
      <Line data={chartData} options={options} aria-label="Gráfico de Crescimento de Imóveis" />;
    </div>
  );
};

export default CrescimentoGrafico;
