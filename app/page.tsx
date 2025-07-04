"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  MessageSquare,
  Target,
  Settings,
  Clock,
  Menu,
  X,
  Phone,
  Mail,
  Star,
  Sparkles,
  TrendingUp,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dco4unkt3/image/upload/v1751552116/sharksense_final_logo-01_pviv2q.png"
                alt="Sharksense Logo"
                className="w-40 h-20 object-contain -my-5"
              />
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4 text-purple-500" />
                  <a href="tel:+919810863495" className="text-sm font-medium hover:text-purple-700 transition-colors">
                    +91 9810863495
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">info@sharksense.in</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4 text-purple-500" />
                  <a href="tel:+919810863495" className="text-sm font-medium hover:text-purple-700 transition-colors">
                    +91 9810863495
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">info@sharksense.in</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl opacity-10 rotate-12"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-10"
          />
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-purple-300 to-purple-400 rounded-xl opacity-10 rotate-45"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-8 shadow-lg">
              <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Talent Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Save{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                60%
              </span>{" "}
              on Hiring Costs.
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                Double
              </span>{" "}
              Your Productivity.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600"
          >
            Get AI-enabled experts across domains, ready to plug into your workflow —
            <span className="font-semibold text-purple-700"> no hiring, no firing, no downtime.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: "60%", label: "Cost Reduction" },
              { number: "2x", label: "Productivity Boost" },
              { number: "500+", label: "Expert Professionals" },
              { number: "24/7", label: "APAC Coverage" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Sharksense Edge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Star className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Our Competitive Advantage</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              The{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Sharksense
              </span>{" "}
              Edge
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Top Talent, On-Demand",
                description: "Access pre-vetted, AI-supported professionals across marketing, tech, ops & more.",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                icon: Zap,
                title: "Zero Overhead",
                description: "No payrolls. No benefits. No HR drama. We handle it all.",
                gradient: "from-gray-500 to-gray-600",
              },
              {
                icon: Shield,
                title: "Continuity Guaranteed",
                description: "Your expert's on leave? We plug in a trained replacement. Productivity never dips.",
                gradient: "from-purple-400 to-purple-500",
              },
              {
                icon: Globe,
                title: "APAC Powerhouse",
                description: "A deep bench of domain experts across Asia-Pacific, ready to work across time zones.",
                gradient: "from-gray-400 to-gray-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 h-full group shadow-lg hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div
                        className={`p-4 bg-gradient-to-r ${feature.gradient} rounded-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6">
              <Settings className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Tell us your need",
                icon: MessageSquare,
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "2",
                title: "We match you with AI-enabled domain experts",
                icon: Target,
                color: "from-gray-500 to-gray-600",
              },
              {
                step: "3",
                title: "They integrate seamlessly into your team – remotely",
                icon: Settings,
                color: "from-purple-400 to-purple-500",
              },
              {
                step: "4",
                title: "We handle everything else",
                icon: Clock,
                color: "from-gray-400 to-gray-500",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center relative">
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent z-0" />
                  )}

                  <div className="relative z-10 mb-8 flex justify-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-xl`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-100 shadow-lg">
                      <step.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Client Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Success
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-gray-600">See how we've transformed businesses across industries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex space-x-8"
                style={{ width: "calc(200% + 32px)" }}
              >
                {/* First set of images */}
                {[
                  {
                    src: "/images/productivity.jpg",
                    title: "Marketing Team Success",
                    description: "60% cost reduction in content marketing",
                    metric: "60% Cost Reduction",
                  },
                  {
                    src: "/images/tec.jpg",
                    title: "Tech Squad Integration",
                    description: "Seamless remote development team",
                    metric: "2x Faster Delivery",
                  },
                  {
                    src: "/images/CRM.jpg",
                    title: "Sales Operations",
                    description: "Automated CRM and lead management",
                    metric: "150% ROI Increase",
                  },
                  {
                    src: "/images/apac expansion.jpg",
                    title: "APAC Expansion",
                    description: "24/7 support across time zones",
                    metric: "24/7 Coverage",
                  },
                  {
                    src: "/images/productivity.jpg",
                    title: "Productivity Boost",
                    description: "Double output with AI-enabled experts",
                    metric: "200% Productivity",
                  },
                ].map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-96">
                    <Card className="bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-sm font-bold text-purple-700">{image.metric}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                          <p className="text-sm opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {[
                  {
                    src: "/images/productivity.jpg",
                    title: "Marketing Team Success",
                    description: "60% cost reduction in content marketing",
                    metric: "60% Cost Reduction",
                  },
                  {
                    src: "/images/tec.jpg",
                    title: "Tech Squad Integration",
                    description: "Seamless remote development team",
                    metric: "2x Faster Delivery",
                  },
                  {
                    src: "/images/CRM.jpg",
                    title: "Sales Operations",
                    description: "Automated CRM and lead management",
                    metric: "150% ROI Increase",
                  },
                  {
                    src: "/images/apac expansion.jpg",
                    title: "APAC Expansion",
                    description: "24/7 support across time zones",
                    metric: "24/7 Coverage",
                  },
                  {
                    src: "/images/productivity.jpg",
                    title: "Productivity Boost",
                    description: "Double output with AI-enabled experts",
                    metric: "200% Productivity",
                  },
                ].map((image, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-96">
                    <Card className="bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                      <div className="relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-sm font-bold text-purple-700">{image.metric}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                          <p className="text-sm opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg">
              Join <span className="font-bold text-purple-700">100+</span> companies that trust Sharksense for their
              talent needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6">
              <Target className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Use Cases</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Perfect For{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Every
              </span>{" "}
              Need
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              "Scaling content or performance marketing teams",
              "Setting up agile tech squads without hiring full-time",
              "Sales ops, automation, and CRM support",
              "Temporary talent during employee absence",
            ].map((useCase, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{useCase}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Mail className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Let's Talk{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Talent
              </span>
            </h2>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <p className="text-xl text-gray-600">Leave your details and we'll set up a quick discovery call.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <form action="mailto:info@sharksense.in" method="post" encType="text/plain" className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Sharksense</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 1234567890"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What function are you hiring for? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your hiring needs, team size, and specific requirements..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                  >
                    Send Message to Sharksense
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                {/* Alternative Contact Methods */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">Prefer to contact us directly?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a
                        href="mailto:info@sharksense.in"
                        className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        info@sharksense.in
                      </a>
                      <a
                        href="tel:+919810863495"
                        className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        +91 9810863495
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6">
              <Star className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Why Companies{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">High-intent solutions for modern hiring challenges</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                headline: "Hire Experts Without Hiring",
                description: "Get top-tier, AI-supported professionals without the cost or burden of hiring.",
              },
              {
                headline: "Replace Employees with Smart Talent",
                description: "We plug in trained, productive talent while you stay focused on growth.",
              },
              {
                headline: "Remote Experts, Zero HR Hassle",
                description: "Scale smarter with Sharksense's APAC talent pool — fast, seamless, and HR-free.",
              },
              {
                headline: "AI-Enabled Talent, On Demand",
                description: "Access pre-vetted professionals ready to integrate into your workflow immediately.",
              },
              {
                headline: "No Hiring. Just Productivity.",
                description: "Skip the recruitment process and get straight to results with our expert talent.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 h-full group shadow-lg hover:shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">
                      {item.headline}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Stop Hiring. Start Growing.</h3>
              <p className="text-xl mb-8 opacity-90">AI-enabled experts across APAC. Zero overhead. Zero downtime.</p>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300"
              >
                📩 Book a Free Talent Match Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img
                src="https://res.cloudinary.com/dco4unkt3/image/upload/v1751552116/sharksense_final_logo-01_pviv2q.png"
                alt="Sharksense Logo"
                className="w-20 h-10 rounded-xl object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"></span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-2 w-4 text-purple-500" />
                <a href="tel:+919810863495" className="text-sm font-medium hover:text-purple-700 transition-colors">
                  +91 9810863495
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-2 w-2 text-purple-500" />
                <span className="text-sm font-medium">info@sharksense.in</span>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-200 pt-8">
            <p>&copy; 2024 Sharksense. All rights reserved. AI-enabled talent solutions for the modern enterprise.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
