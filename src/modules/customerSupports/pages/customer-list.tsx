"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BreadCrumps from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Video } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetAllContactsQuery } from "../hooks/queries";

// interface Chat {
//   id: string;
//   name: string;
//   lastMessage: string;
//   timestamp: string;
//   avatar: string;
//   unreadCount: number;
//   isOnline: boolean;
// }

// const mockChats: Chat[] = [
//   {
//     id: "6888d157b50e11c8196701e0",
//     name: "Sarah Johnson",
//     lastMessage: "See you at the cafe! ☕",
//     timestamp: "10:45 AM",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 2,
//     isOnline: true,
//   },
//   {
//     id: "2",
//     name: "Mike Chen",
//     lastMessage: "The project looks great, thanks for your hard work!",
//     timestamp: "9:32 AM",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: true,
//   },
//   {
//     id: "3",
//     name: "Emma Wilson",
//     lastMessage: "Can we reschedule our meeting?",
//     timestamp: "Yesterday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 1,
//     isOnline: false,
//   },
//   {
//     id: "4",
//     name: "Team Design",
//     lastMessage: "Alex: New mockups are ready for review",
//     timestamp: "Yesterday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 5,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
//   {
//     id: "5",
//     name: "David Rodriguez",
//     lastMessage: "Thanks for the quick response!",
//     timestamp: "Tuesday",
//     avatar: "/placeholder.svg?height=40&width=40",
//     unreadCount: 0,
//     isOnline: false,
//   },
// ];

export default function CustomerSupportChatList() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const navigate = useNavigate();

  const {data} = useGetAllContactsQuery()

  const mockChats = data?.contacts ?? []

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <BreadCrumps
        breadcrumbs={[
          { label: "Customers Support", href: "/dashboard/products" },
        ]}
      />

      {/* Chat List */}
      <div className="max-w-xl mx-auto px-4 py-2 mt-10">
        {mockChats.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">
              Start a new chat to connect with friends!
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              New Chat
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            {mockChats.map((chat) => (
              <Card
                key={chat._id}
                className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] border-0 bg-white/70 backdrop-blur-sm ${
                  selectedChat === chat._id
                    ? "ring-2 ring-amber-500 bg-amber-50/80"
                    : ""
                }`}
                onClick={() => {
                  setSelectedChat(chat._id);
                  navigate(`/dashboard/customers-support/${chat._id}`);
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar with Online Status */}
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={chat.email || "/placeholder.svg"}
                        alt={chat.email}
                      />
                      <AvatarFallback className="bg-amber-100 text-amber-700 font-semibold">
                        {chat.email
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 truncate">
                        {chat.lastMessageTime}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {chat.lastMessageTime}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessageTime}
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-amber-600"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-amber-600"
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
