'use client'

import { TFeatureCardProps } from "@/utils/Type";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import * as Icons from "lucide-react";

const FeatureCard = ({ icon, title, description }: TFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

   const Icon = Icons[icon as keyof typeof Icons] as React.ElementType;
  return (
    <div>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transform transition-all duration-300 hover:shadow-xl cursor-pointer hover:scale-105"
      >
        <CardContent className="p-6">
          <div
            className={`
          w-12 h-12 rounded-full flex items-center justify-center mb-4
          ${isHovered ? "text-blue-500 animate-bounce" : "text-gray-600"}
          transition-colors duration-300
        `}
          >
            {Icon && <Icon className="h-6 w-6" />}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCard
