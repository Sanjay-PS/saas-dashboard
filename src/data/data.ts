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