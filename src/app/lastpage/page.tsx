'use client'
import Image from "next/image";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Car, Calendar, BarChart2, RefreshCcw, MessageSquare, Settings, HelpCircle, LogOut, Moon, MoreVertical, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Sport Car", value: 17439, color: "#003f5c" },
  { name: "SUV", value: 9478, color: "#2f4b7c" },
  { name: "Coupe", value: 18197, color: "#665191" },
  { name: "Hatchback", value: 12510, color: "#a05195" },
  { name: "MPV", value: 14406, color: "#d45087" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility on mobile screens
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hamburger Button (Only on Mobile) */}
      <div className="lg:hidden p-4">
        <Button variant="ghost" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Left Sidebar */}
      <aside
  className={`fixed left-0 top-0 z-30 h-screen w-64 border-r bg-background transition-transform transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 overflow-y-auto`} // Added overflow-y-auto for scrolling
>
  <div className="flex h-full flex-col">
    <div className="p-6 flex justify-between items-center">
      <h2 className="text-lg font-semibold mb-6 text-muted-foreground">MAIN MENU</h2>
      {/* Close Button (on Mobile) */}
      <Button
        variant="ghost"
        onClick={toggleSidebar}
        className="absolute top-4 right-4 lg:hidden"
      >
        <X className="h-6 w-6 text-muted-foreground" />
      </Button>
    </div>
    <nav className="space-y-2">
      <div className="flex items-center space-x-2 w-full">
        <Button variant="default" className="bg-blue-600 w-full justify-start" size="lg">
          <Car className="mr-2  h-4 w-4" />
          Dashboard
        </Button>
      </div>
      <Button variant="ghost" className="w-full justify-start" size="lg">
        <Car className="mr-2 h-4 w-4" />
        Car Rent
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="lg">
        <BarChart2 className="mr-2 h-4 w-4" />
        Insight
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="lg">
        <RefreshCcw className="mr-2 h-4 w-4" />
        Reimburse
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="lg">
        <MessageSquare className="mr-2 h-4 w-4" />
        Inbox
      </Button>
      <Button variant="ghost" className="w-full justify-start" size="lg">
        <Calendar className="mr-2 h-4 w-4" />
        Calendar
      </Button>
    </nav>
    <div className="mt-auto p-6">
      <h2 className="text-lg font-semibold mb-6 text-muted-foreground">PREFERENCES</h2>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" size="lg">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="lg">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help & Center
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="lg">
          <Moon className="mr-2 h-4 w-4" />
          Dark Mode
        </Button>
        <Button variant="ghost" className="w-full justify-start text-red-500" size="lg">
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </nav>
    </div>
  </div>
</aside>


      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:pl-64 md:pl-4`}>
        <div className="grid lg:grid-cols-[1fr_400px] md:grid-cols-1 gap-6 p-6">
          <div className="space-y-6">
            
            <Card >
          <CardContent className="p-6  " >
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Rental Summary</h2>
                <p className="text-sm text-muted-foreground">
                  Prices may change depending on the length of the rental and the price of your rental car.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-24 h-24 bg-primary/10 rounded-lg overflow-hidden">
                  <Image
                    src="/asset/car2.png"
                    alt="Nissan GT-R"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Nissan GT - R</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                    <Star className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <span className="text-sm text-muted-foreground">440+ Reviewer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$80.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex-1">
                    <Input placeholder="Apply promo code" className="rounded-r-none" />
                  </div>
                  <Button variant="secondary" className="rounded-l-none">
                    Apply now
                  </Button>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total Rental Price</span>
                    <span className="font-semibold">$80.00</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Overall price and includes rental discount
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
          </div>

         
          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Top 5 Car Rental</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                {/* Wrapper for chart and stats */}
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                  {/* Donut Chart Section (Left Side) */}
                  <div className="relative w-full lg:w-2/3">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey="value"
                          nameKey="name"
                          innerRadius="60%"
                          outerRadius="85%"
                          paddingAngle={5}
                          startAngle={90}
                          endAngle={450}
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>

                    {/* Total at the center of the donut chart */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold">{total.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section (Right Side) */}
                  <div className="w-full lg:w-1/3">
                    <ul className="space-y-4">
                      {data.map((item) => (
                        <li key={item.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span>{item.name}</span>
                          </div>
                          <span>{item.value.toLocaleString()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
