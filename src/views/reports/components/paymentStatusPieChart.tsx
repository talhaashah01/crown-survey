import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Title,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Title, ChartDataLabels);

const PaymentStatusPieChart = ({ bookings }) => {

    const [paymentData, setPaymentData] = useState({
        clearedAmount: 0,
        clearedPercentage: 0,
        pendingAmount: 0,
        pendingPercentage: 0,
        rejectedAmount: 0,
        rejectedPercentage: 0,
        totalAmount: 0,
    });


    useEffect(() => {
        if (bookings) {
            const sortedData = sortData()
            setPaymentData(sortedData)
        }
    }, [bookings])

    const sortData = () => {
        const clearedAmount = bookings.filter(booking => booking.status === "Cleared").reduce((acc, booking) => acc + booking.price, 0);
        const pendingAmount = bookings.filter(booking => booking.status === "Pending").reduce((acc, booking) => acc + booking.price, 0);
        const rejectedAmount = bookings.filter(booking => booking.status === "Rejected").reduce((acc, booking) => acc + booking.price, 0);

        const totalAmount = clearedAmount + pendingAmount + rejectedAmount;

        const clearedPercentage = parseFloat(((clearedAmount / totalAmount) * 100).toFixed(2));
        const pendingPercentage = parseFloat(((pendingAmount / totalAmount) * 100).toFixed(2));
        const rejectedPercentage = parseFloat(((rejectedAmount / totalAmount) * 100).toFixed(2));

        return {
            clearedAmount: clearedAmount,
            clearedPercentage: clearedPercentage,
            pendingAmount: pendingAmount,
            pendingPercentage: pendingPercentage,
            rejectedAmount: rejectedAmount,
            rejectedPercentage: rejectedPercentage,
            totalAmount: totalAmount,
        }
    }


    // Prepare data for the chart
    const data = {
        labels: [
            `Cleared`,
            `Rejected`,
            `Pending`,
        ],
        datasets: [
            {
                // label: "Amount(USD):",
                data: [paymentData.clearedAmount, paymentData.rejectedAmount, paymentData.pendingAmount],
                backgroundColor: ["#009922", "#e83535", "#cb6100"],
                hoverBackgroundColor: ["#009922", "#e83535", "#cb6100"],
                // hoverBackgroundColor: ["#cef2d6", "#ffd1d1", "#ffd9b6"],
            },
        ],
    };

    // Chart configuration options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "bottom" as const, // Position the legend at the top
            },
            title: {
                display: true,
                text: "Payment Status",
            },
            datalabels: {
                color: '#ffffff',
                display: true,
                formatter: (value, context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label} ($${value})`;
                },
                font: {
                    weight: "bold" as const,
                },
                align: "center"  as const,
                anchor: 'center'  as const,
            },
        },
    };

    return (
        <div>
            <Pie data={data} options={options} />
            <div className="total-amounts text-center">
                {/* <p>Total Cleared: {paymentData.clearedAmount} USD</p>
                <p>Total Rejected: {paymentData.rejectedAmount} USD</p>
                <p>Total Pending: {paymentData.pendingAmount} USD</p> */}
                <p className="paragraph-6"><span className="title-6">Total Amount: </span>${paymentData.totalAmount}USD</p>
            </div>
        </div>
    );
};

export default PaymentStatusPieChart;
