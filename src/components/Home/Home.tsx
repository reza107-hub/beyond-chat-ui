import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { features } from "@/utils/Features";
import FeatureCard from "../features/FeatureCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* hero section */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="relative">
            <Rocket className="h-12 w-12 mx-auto mb-6 text-blue-500 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Welcome to Beyond Chat
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Create your own AI-powered chatbot in minutes. Train it on your
            business data and provide instant support to your customers.
          </p>

          <div className="pt-4">
            <Link href="/setup-organisation">
              <Button
                size="lg"
                className="group hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Setup Organisation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features section */}

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
