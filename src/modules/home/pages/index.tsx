// import {
//     AlertCircle,
//     BarChart3,
//     DollarSign,
//     Download,
//     Edit,
//     Eye,
//     Package,
//     Plus,
//     Search,
//     ShoppingCart,
//     Trash2,
//     TrendingUp,
//     Users
// } from "lucide-react";
// import { useState } from "react";
// import {
//     Area,
//     AreaChart,
//     Bar,
//     BarChart,
//     CartesianGrid,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis
// } from "recharts";
// export default function Home() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("all");

import RecentOrderTable from "../ui/components/recent-order";
import { RevenueOrderChart } from "../ui/components/revenue-order";
import Stats from "../ui/components/stats";
import TypeChart from "../ui/components/type-chart";

//   // Mock data
//   const [stats] = useState({
//     totalRevenue: 125430,
//     totalOrders: 1854,
//     totalUsers: 12543,
//     totalProducts: 856,
//     revenueGrowth: 12.5,
//     ordersGrowth: 8.3,
//     usersGrowth: 15.2,
//     productsGrowth: 5.7,
//   });

//   const [recentOrders] = useState([
//     {
//       id: "#12345",
//       customer: "John Doe",
//       product: "Wireless Headphones",
//       amount: 89.99,
//       status: "completed",
//       date: "2025-01-25",
//     },
//     {
//       id: "#12346",
//       customer: "Jane Smith",
//       product: "Smart Watch",
//       amount: 299.99,
//       status: "pending",
//       date: "2025-01-25",
//     },
//     {
//       id: "#12347",
//       customer: "Mike Johnson",
//       product: "Laptop Stand",
//       amount: 45.0,
//       status: "shipped",
//       date: "2025-01-24",
//     },
//     {
//       id: "#12348",
//       customer: "Sarah Wilson",
//       product: "Phone Case",
//       amount: 19.99,
//       status: "cancelled",
//       date: "2025-01-24",
//     },
//     {
//       id: "#12349",
//       customer: "David Brown",
//       product: "Bluetooth Speaker",
//       amount: 79.99,
//       status: "completed",
//       date: "2025-01-23",
//     },
//   ]);

//   const [users] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       role: "Customer",
//       status: "active",
//       joinDate: "2024-12-15",
//       orders: 12,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       role: "Vendor",
//       status: "active",
//       joinDate: "2024-11-20",
//       orders: 45,
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       email: "mike@example.com",
//       role: "Customer",
//       status: "inactive",
//       joinDate: "2024-10-10",
//       orders: 3,
//     },
//     {
//       id: 4,
//       name: "Sarah Wilson",
//       email: "sarah@example.com",
//       role: "Customer",
//       status: "active",
//       joinDate: "2024-12-01",
//       orders: 8,
//     },
//     {
//       id: 5,
//       name: "David Brown",
//       email: "david@example.com",
//       role: "Vendor",
//       status: "pending",
//       joinDate: "2025-01-20",
//       orders: 0,
//     },
//   ]);

//   const [products] = useState([
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       category: "Electronics",
//       price: 89.99,
//       stock: 24,
//       status: "active",
//       vendor: "TechCorp",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       category: "Electronics",
//       price: 299.99,
//       stock: 12,
//       status: "active",
//       vendor: "GadgetPro",
//     },
//     {
//       id: 3,
//       name: "Laptop Stand",
//       category: "Accessories",
//       price: 45.0,
//       stock: 0,
//       status: "out_of_stock",
//       vendor: "OfficeMax",
//     },
//     {
//       id: 4,
//       name: "Phone Case",
//       category: "Accessories",
//       price: 19.99,
//       stock: 156,
//       status: "active",
//       vendor: "CaseMaster",
//     },
//     {
//       id: 5,
//       name: "Bluetooth Speaker",
//       category: "Electronics",
//       price: 79.99,
//       stock: 8,
//       status: "low_stock",
//       vendor: "AudioTech",
//     },
//   ]);

//   // Chart data
//   const [revenueData] = useState([
//     { month: "Jan", revenue: 65000, orders: 820 },
//     { month: "Feb", revenue: 72000, orders: 890 },
//     { month: "Mar", revenue: 68000, orders: 850 },
//     { month: "Apr", revenue: 85000, orders: 1020 },
//     { month: "May", revenue: 92000, orders: 1150 },
//     { month: "Jun", revenue: 88000, orders: 1080 },
//     { month: "Jul", revenue: 125430, orders: 1540 },
//   ]);

//   const [categoryData] = useState([
//     { name: "Electronics", value: 45, color: "#3B82F6" },
//     { name: "Accessories", value: 30, color: "#10B981" },
//     { name: "Clothing", value: 15, color: "#F59E0B" },
//     { name: "Home & Garden", value: 10, color: "#EF4444" },
//   ]);

//   const [topProductsData] = useState([
//     { name: "Wireless Headphones", sales: 245 },
//     { name: "Smart Watch", sales: 189 },
//     { name: "Phone Case", sales: 167 },
//     { name: "Bluetooth Speaker", sales: 142 },
//     { name: "Laptop Stand", sales: 98 },
//   ]);

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "completed":
//       case "active":
//         return "text-green-600 bg-green-100";
//       case "pending":
//       case "low_stock":
//         return "text-yellow-600 bg-yellow-100";
//       case "shipped":
//         return "text-blue-600 bg-blue-100";
//       case "cancelled":
//       case "inactive":
//       case "out_of_stock":
//         return "text-red-600 bg-red-100";
//       default:
//         return "text-gray-600 bg-gray-100";
//     }
//   };

//   type StatCardProps = {
//     title: string;
//     value: string | number;
//     growth: number;
//     icon: React.ElementType;
//     color: string;
//   };

//   const StatCard = ({ title, value, growth, icon: Icon, color }: StatCardProps) => (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
//           <p className="text-2xl font-bold text-gray-900">{value}</p>
//           <div className="flex items-center mt-2">
//             <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//             <span className="text-sm text-green-600 font-medium">
//               +{growth}%
//             </span>
//             <span className="text-sm text-gray-500 ml-1">vs last month</span>
//           </div>
//         </div>
//         <div className={`p-3 rounded-lg ${color}`}>
//           <Icon className="w-6 h-6 text-white" />
//         </div>
//       </div>
//     </div>
//   );

//   const OverviewTab = () => (
//     <div className="space-y-6">
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           title="Total Revenue"
//           value={`${stats.totalRevenue.toLocaleString()}`}
//           growth={stats.revenueGrowth}
//           icon={DollarSign}
//           color="bg-green-500"
//         />
//         <StatCard
//           title="Total Orders"
//           value={stats.totalOrders.toLocaleString()}
//           growth={stats.ordersGrowth}
//           icon={ShoppingCart}
//           color="bg-blue-500"
//         />
//         <StatCard
//           title="Total Users"
//           value={stats.totalUsers.toLocaleString()}
//           growth={stats.usersGrowth}
//           icon={Users}
//           color="bg-purple-500"
//         />
//         <StatCard
//           title="Total Products"
//           value={stats.totalProducts.toLocaleString()}
//           growth={stats.productsGrowth}
//           icon={Package}
//           color="bg-orange-500"
//         />
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Revenue Chart */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Revenue & Orders
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Monthly performance overview
//               </p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                 <span className="text-sm text-gray-600">Revenue</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                 <span className="text-sm text-gray-600">Orders</span>
//               </div>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <AreaChart data={revenueData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
//               <YAxis stroke="#6b7280" fontSize={12} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "white",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                 }}
//                 formatter={(value, name) => [
//                   name === "revenue"
//                     ? `${value.toLocaleString()}`
//                     : value.toLocaleString(),
//                   name === "revenue" ? "Revenue" : "Orders",
//                 ]}
//               />
//               <Area
//                 type="monotone"
//                 dataKey="revenue"
//                 stroke="#3B82F6"
//                 fill="#3B82F6"
//                 fillOpacity={0.1}
//                 strokeWidth={2}
//               />
//               <Area
//                 type="monotone"
//                 dataKey="orders"
//                 stroke="#10B981"
//                 fill="#10B981"
//                 fillOpacity={0.1}
//                 strokeWidth={2}
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Category Distribution */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Sales by Category
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Product category distribution
//               </p>
//             </div>
//           </div>
//           <div className="space-y-4">
//             {categoryData.map((category) => (
//               <div
//                 key={category.name}
//                 className="flex items-center justify-between"
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`w-4 h-4 rounded-full mr-3`}
//                     style={{ backgroundColor: category.color }}
//                   ></div>
//                   <span className="text-sm font-medium text-gray-900">
//                     {category.name}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-32 bg-gray-200 rounded-full h-2">
//                     <div
//                       className="h-2 rounded-full transition-all duration-300"
//                       style={{
//                         width: `${category.value}%`,
//                         backgroundColor: category.color,
//                       }}
//                     ></div>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-900 w-10">
//                     {category.value}%
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <div className="grid grid-cols-2 gap-4 text-center">
//               <div>
//                 <p className="text-2xl font-bold text-gray-900">4</p>
//                 <p className="text-sm text-gray-500">Categories</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-900">100%</p>
//                 <p className="text-sm text-gray-500">Coverage</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Charts Row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Top Products Chart */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Top Products
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Best performing products this month
//               </p>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={topProductsData} layout="horizontal">
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//               <XAxis type="number" stroke="#6b7280" fontSize={12} />
//               <YAxis
//                 dataKey="name"
//                 type="category"
//                 stroke="#6b7280"
//                 fontSize={12}
//                 width={120}
//               />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "white",
//                   border: "1px solid #e5e7eb",
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//                 }}
//                 formatter={(value) => [value, "Sales"]}
//               />
//               <Bar dataKey="sales" fill="#3B82F6" radius={[0, 4, 4, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Quick Stats */}
//         <div className="space-y-6">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">
//                   Conversion Rate
//                 </p>
//                 <p className="text-2xl font-bold text-gray-900">3.2%</p>
//                 <div className="flex items-center mt-2">
//                   <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//                   <span className="text-sm text-green-600 font-medium">
//                     +0.5%
//                   </span>
//                 </div>
//               </div>
//               <div className="p-3 rounded-lg bg-blue-100">
//                 <BarChart3 className="w-6 h-6 text-blue-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">
//                   Avg Order Value
//                 </p>
//                 <p className="text-2xl font-bold text-gray-900">$67.50</p>
//                 <div className="flex items-center mt-2">
//                   <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//                   <span className="text-sm text-green-600 font-medium">
//                     +$3.20
//                   </span>
//                 </div>
//               </div>
//               <div className="p-3 rounded-lg bg-green-100">
//                 <DollarSign className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Recent Orders
//             </h3>
//             <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//               View All
//             </button>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Customer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Amount
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentOrders.map((order) => (
//                 <tr key={order.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {order.id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {order.customer}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {order.product}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ${order.amount}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
//                         order.status
//                       )}`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {order.date}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-700">
//                         <Eye className="w-4 h-4" />
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-700">
//                         <Edit className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const UsersTab = () => (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//         <div className="flex gap-4 flex-1">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <select
//             className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             value={selectedFilter}
//             onChange={(e) => setSelectedFilter(e.target.value)}
//           >
//             <option value="all">All Roles</option>
//             <option value="customer">Customer</option>
//             <option value="vendor">Vendor</option>
//           </select>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//             <Download className="w-4 h-4" />
//             Export
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             <Plus className="w-4 h-4" />
//             Add User
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   User
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Join Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Orders
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {users.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
//                         <span className="text-sm font-medium text-gray-700">
//                           {user.name.charAt(0)}
//                         </span>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">
//                           {user.name}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {user.email}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {user.role}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
//                         user.status
//                       )}`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {user.joinDate}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {user.orders}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-700">
//                         <Eye className="w-4 h-4" />
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-700">
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-700">
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const ProductsTab = () => (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//         <div className="flex gap-4 flex-1">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
//             />
//           </div>
//           <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//             <option value="all">All Categories</option>
//             <option value="electronics">Electronics</option>
//             <option value="accessories">Accessories</option>
//           </select>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//             <Download className="w-4 h-4" />
//             Export
//           </button>
//           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             <Plus className="w-4 h-4" />
//             Add Product
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Product
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Category
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Stock
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Vendor
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {products.map((product) => (
//                 <tr key={product.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
//                         <Package className="w-5 h-5 text-gray-500" />
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">
//                           {product.name}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.category}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     ${product.price}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.stock}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
//                         product.status
//                       )}`}
//                     >
//                       {product.status.replace("_", " ")}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {product.vendor}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-700">
//                         <Eye className="w-4 h-4" />
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-700">
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button className="text-red-600 hover:text-red-700">
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Marketplace Admin
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="relative p-2 text-gray-600 hover:text-gray-900">
//                 <AlertCircle className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//                 <span className="text-sm font-medium text-gray-700">A</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8">
//             {[
//               { id: "overview", label: "Overview", icon: TrendingUp },
//               { id: "users", label: "Users", icon: Users },
//               { id: "products", label: "Products", icon: Package },
//               { id: "orders", label: "Orders", icon: ShoppingCart },
//             ].map(({ id, label, icon: Icon }) => (
//               <button
//                 key={id}
//                 onClick={() => setActiveTab(id)}
//                 className={`flex items-center space-x-2 px-3 py-4 border-b-2 font-medium text-sm ${
//                   activeTab === id
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 <span>{label}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {activeTab === "overview" && <OverviewTab />}
//         {activeTab === "users" && <UsersTab />}
//         {activeTab === "products" && <ProductsTab />}
//         {activeTab === "orders" && (
//           <div className="text-center py-12">
//             <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">
//               Orders Management
//             </h3>
//             <p className="text-gray-500">
//               Detailed order management interface coming soon...
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Stats />
      <div className="grid  grid-cols-2 gap-4">
        <RevenueOrderChart />
        <TypeChart/>
      </div>
      <RecentOrderTable/>
    </div>
  );
}
