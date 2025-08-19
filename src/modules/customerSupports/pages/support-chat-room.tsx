import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSocket } from "@/hooks/use-socket";
import { useAuthStore } from "@/modules/auth/store/index.store";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useSupportChatStore } from "../store/index.store";
import { useGetAllMessagesQuery } from "../hooks/queries";
import BreadCrumps from "@/components/ui/breadcrumbs";

export default function SupportChatRoom() {
  const { id: customerId } = useParams(); // recipient user id from route
  const { messages, addMessage, selectedUsername } = useSupportChatStore(
    (s) => s
  );
  const { user } = useAuthStore((s) => s);
  const [input, setInput] = useState("");
  const { socket } = useSocket();
  const { data, isFetched, isLoading } = useGetAllMessagesQuery(
    customerId ?? ""
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFetched && data?.data) {
      data?.data.map((msg) => {
        console.log(msg);

        addMessage({
          sender: msg.sender === customerId ? "customer" : "user",
          message: msg.message,
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetched]);

  console.log("Fetched messages:", messages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, user?.id]);

  useEffect(() => {
    if (!socket) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onReceive = (msg: any) => {
      console.log("Received message:", msg);

      // Ignore if the message originated from me
      const senderId = String(msg?.sender?._id ?? msg?.sender ?? "");
      if (senderId === String(user?.id ?? "")) return;

      addMessage({
        sender: "customer", // your UI schema
        message: msg.message,
      });
    };

    socket.on("receiveMessage", onReceive);
    return () => {
      socket.off("receiveMessage", onReceive);
    };
  }, [socket, user?.id, addMessage]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || !socket || !user?.id || !customerId) return;

    // Optimistic update for my bubble
    addMessage({ sender: "user", message: trimmed });

    const payload = {
      message: trimmed,
      sender: String(user.id),
      recipient: String(customerId), // ✅ correct key + from route
      messageType: "text",
    };

    console.log("Sending message:", payload);
    socket.emit("sendMessage", payload);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BreadCrumps
        breadcrumbs={[
          { label: "Customers Support", href: "/dashboard/customers-support" },
          {
            label: "Chat Room",
            href: `/dashboard/customers-support/${customerId}`,
          },
        ]}
      />
      <div className="flex items-center justify-center flex-1 p-4 mt-10">
        <Card className="w-full max-w-2xl shadow-xl border rounded-2xl p-0">
          <CardHeader className="bg-blue-600 text-white rounded-t-2xl pt-3">
            <CardTitle className="text-lg">{selectedUsername}</CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-[65vh] overflow-y-scroll">
            {isLoading && (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Loading messages...</p>
              </div>
            )}
            <ScrollArea className="flex-1 p-4 space-y-6">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex mb-1 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow-md break-words whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>

          <CardFooter className="w-full">
            <div className="p-4 border-t flex gap-2 w-full">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
