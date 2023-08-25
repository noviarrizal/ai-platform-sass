import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import React from "react";

type Props = {};

const ConversationPage = (props: Props) => {
  return (
    <Heading
      title="Conversation"
      description="Our most advanced conversation model"
      icon={MessageSquare}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
    />
  );
};

export default ConversationPage;