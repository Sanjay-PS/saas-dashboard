import { Status } from "../views/Orders/Orders"

export const topSellingProducts = {
    headers: ["Name", "Price", "Quantity", "Amount"],
    rows: [
        ["ASOS Ridley High Waist", "$79.49", "82", "$6,518.18"],
        ["Marco Lightweight Shirt", "$128.50", "37", "$4,754.50"],
        ["Half Sleeve  Shirt", "$39.99", "64", "$2,559.36"],
        ["Lightweight Jacket", "$20.00", "184", "$3,680.00"],
        ["Marco Shoes", "$79.49", "64", "$1,965.81"]
    ]
}

type OrdersType = {
    headers: string[],
    rows: {
        orderId: string,
        avatar: string,
        fullName: string,
        project: string,
        address: string,
        date: string,
        status: Status
    }[]
}
export const orders: OrdersType = {
    headers: ["Order ID", "User", "Project", "Address", "Date", "Status"],
    rows: [
        {
            orderId: "#CM9801",
            avatar: "./images/contact-01.png",
            fullName: "Natali Craig",
            project: "Landing Page",
            address: "Meadow Lane Oakland",
            date: "Just now",
            status: "in-progress"
        },
        {
            orderId: "#CM9802",
            avatar: "./images/contact-05.png",
            fullName: "CRM Admin pages",
            project: "Larry San Francisco",
            address: "Meadow Lane Oakland",
            date: "A minute ago",
            status: "completed"
        },
        {
            orderId: "#CM9803",
            avatar: "./images/contact-02.png",
            fullName: "Drew Cano",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "1 hour ago",
            status: "pending"
        },
        {
            orderId: "#CM9804",
            avatar: "./images/contact-03.png",
            fullName: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Washburn Baton Rouge",
            date: "Yesterday",
            status: "approved"
        },
        {
            orderId: "#CM9805",
            avatar: "./images/contact-04.png",
            fullName: "Andi Lane",
            project: "App Landing Page",
            address: "Nest Lane Olivette",
            date: "Feb 2, 2023",
            status: "rejected"
        },
        {
            orderId: "#CM9801",
            avatar: "./images/contact-01.png",
            fullName: "Natali Craig",
            project: "Landing Page",
            address: "Meadow Lane Oakland",
            date: "Just now",
            status: "in-progress"
        },
        {
            orderId: "#CM9802",
            avatar: "./images/contact-05.png",
            fullName: "CRM Admin pages",
            project: "Larry San Francisco",
            address: "Meadow Lane Oakland",
            date: "A minute ago",
            status: "completed"
        },
        {
            orderId: "#CM9803",
            avatar: "./images/contact-02.png",
            fullName: "Drew Cano",
            project: "Client Project",
            address: "Bagwell Avenue Ocala",
            date: "1 hour ago",
            status: "pending"
        },
        {
            orderId: "#CM9804",
            avatar: "./images/contact-03.png",
            fullName: "Orlando Diggs",
            project: "Admin Dashboard",
            address: "Washburn Baton Rouge",
            date: "Yesterday",
            status: "approved"
        },
        {
            orderId: "#CM9805",
            avatar: "./images/contact-04.png",
            fullName: "Andi Lane",
            project: "App Landing Page",
            address: "Nest Lane Olivette",
            date: "Feb 2, 2023",
            status: "rejected"
        }
    ]
}


export const revenueChart = {
    series: [{
        name: 'Previous Week',
        type: 'area',
        data: [10, 13, 19, 16, 12, 14, 22, 24]
    }, {
        name: 'Current Week',
        type: 'line',
        data: [15, 13, 10, 12, 18, 20, 21, 20]
    }],
    options: {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: ["#A8C5DA", "#1C1C1C"],
        stroke: {
            width: [3, 3],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        fill: {
            opacity: [0.1, 1],
            type: ['gradient', 'solid'],
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 50, 100],
                colorStops: []
            },
        },
        labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ''],
        legend: {
            show: false
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: -10,
                left: 0 // Remove internal padding around the grid area
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: "rgba(28,28,28,0.4)",
                }
            }
        },
        yaxis: {
            min: 0,
            max: 30,
            stepSize: 10,
            labels: {
                offsetX: -15,
                style: {
                    colors: "rgba(28,28,28,0.4)",
                },
                formatter: (value: number): string => { return `${value}M` }
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y: number) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + "M";
                    }
                    return y;

                }
            }
        }
    },
};


export const projectionChart = {
    series: [{
        name: 'PRODUCT A',
        data: [17, 21, 18, 23, 16, 21]
    }, {
        name: 'PRODUCT B',
        data: [5, 6, 5, 6, 4, 5]
    }],
    options: {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            height: 'auto',
            parentHeightOffset: 0,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                borderRadius: 4,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'last', // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: false
                    }
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#A8C5DA", "#A8C5DA99"],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        xaxis: {
            type: 'category',
            labels: {
                style: {
                    colors: "rgba(28,28,28,0.4)",
                }
            }
        },
        yaxis: {
            min: 0,
            max: 30,
            stepSize: 10,
            labels: {
                offsetX: -15,
                style: {
                    colors: "rgba(28,28,28,0.4)",
                },
                formatter: (value: number): string => { return `${value}M` }
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: -10,
                left: 0 // Remove internal padding around the grid area
            }
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1
        }
    },


};


export const salesChart = {
    series: [8, 24, 21, 47], // Values for the segments of the donut chart
    options: {
        chart: {
            type: 'donut', // Set chart type to donut
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            height: 100,
        },
        labels: ['E-mail', 'Sponsored', 'Affliate', 'Direct'], // Labels for the segments
        colors: ['#B1E3FF', '#95A4FC', '#1C1C1C', '#BAEDBD'],
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            lineCap: "round",
            width: 10,
            colors: [
                "transparent"
            ],
        },
        plotOptions: {
            pie: {
                startAngle: 20,
                donut: {
                    size: "72%"
                }
            }
        },
        grid: {
            padding: {
                top: -10,
                right: 0,
                bottom: 0,
                left: 0 // Remove internal padding around the grid area
            }
        },
    },
}