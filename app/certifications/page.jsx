"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { FaImage, FaExternalLinkAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const CertificationsPage = () => {
  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "Artificial Intelligence and Machine Learning",
      issuer: "Kalinga University",
      category: "AIML",
      description: "Validates expertise in training and making AIML model",
      achievement:
        "Demonstrated ability to design the different types of AIML model such as recommendation , prediction",
      logo: "🤖",
      date: "July 2023",
      validity: "No expiry",
      certificateAvailable: true,
      certificateName: [
        "Artifical Intelligence and Machine Learning Certificate",
      ],
      certificateUrl: [
        "https://drive.google.com/file/d/1wPdWO1HeKED38RpD9Ll8MpeEVqqtb08K/view",
      ],
    },
    {
      id: 2,
      title: "Front-end for Beginners",
      issuer: "Sololearn",
      category: "web",
      description:
        "Advanced Angular development certification covering hooks, state management, and performance",
      achievement:
        "Built multiple beginner friendly applications as part of certification requirements",
      logo: "🅰️",
      date: "January 2024",
      validity: "Lifetime",
      certificateAvailable: true,
      certificateName: ["Front-end for Beginners"],
      certificateUrl: ["https://www.sololearn.com/certificates/CC-COU1CXBM"],
    },
    {
      id: 3,
      title: "Digital Marketing",
      issuer: "Kalinga University",
      category: "Digital_Marketing",
      description:
        "Professional certification covering digital marketing fundamentals, SEO, SEM, social media marketing, email marketing, and e-commerce strategies",
      achievement:
        "Completed hands-on projects including creating digital marketing campaigns, analyzing campaign performance, and developing e-commerce strategies",
      logo: "📱",
      date: "April 2022",
      validity: "No expiry",
      certificateAvailable: true,
      certificateName: ["Digital Marketing"],
      certificateUrl: [
        "https://drive.google.com/file/d/1ya2XDgY1bcgRQb_ldhIlyThn8n4dE5kl/",
      ],
    },
    {
      id: 4,
      title: "Machine Learning with Python",
      issuer: "Kalinga University",
      category: "AIML",
      description:
        "Validates expertise in basic of machine learning with python",
      achievement:
        "Learnt basic machine learning with python and worked on number guessing application",
      logo: "🤖",
      date: "May 2023",
      validity: "No expiry",
      certificateAvailable: true,
      certificateName: ["Machine Learning with Python"],
      certificateUrl: [
        "https://drive.google.com/file/d/1LpgrF0KwaG_rOWcOHJZ3iyBucCKW54x-/view",
      ],
    },
    {
      id: 5,
      title: "On the Job (OJT) Training",
      issuer: "Micro World Educational Hub Pvt. Ltd",
      category: "web",
      description:
        "Basic training on web development after the junior high school",
      achievement:
        "Learn and Developed multiple static websites using html,css and js",
      logo: "🌐",
      date: "April 2019",
      validity: "No expiry",
      certificateAvailable: true,
      certificateName: ["On the job (OJT)"],
      certificateUrl: [
        "https://drive.google.com/file/d/1dx42bm-tMARUpcDPicJ0Et78anz3eTH7/view?usp=sharing",
      ],
    },

    {
      id: 6,
      title: "JavaScript and Game Development with JS",
      issuer: "Sololearn",
      category: "web",
      description:
        "JavaScript covering the ES6 and game developement with canvas,game loops,frame rate as well as collision detection",
      achievement:
        "Built basic and medium applications and games as part of certification requirements",
      logo: "JS",
      date: "March 2023",
      validity: "Lifetime",
      certificateAvailable: true,
      certificateName: [
        "JavaScript",
        "JavaScript Intermediate",
        "Game Development with JS",
      ],
      certificateUrl: [
        "https://www.sololearn.com/certificates/CT-DJSBIIO2",
        "https://www.sololearn.com/certificates/CC-GLIVZBQ0",
        "https://www.sololearn.com/certificates/CC-FPKWN7ZM",
      ],
    },

    {
      id: 7,
      title: "React + Redux",
      issuer: "Sololearn",
      category: "web",
      description:
        "Advanced React development certification covering hooks, state management, and performance",
      achievement:
        "Built multiple complex applications as part of certification requirements",
      logo: "⚛️",
      date: "January 2025",
      validity: "Lifetime",
      certificateAvailable: true,
      certificateName: ["React and Redux Certificate"],
      certificateUrl: ["https://www.sololearn.com/certificates/CC-6VHEFJEA"],
    },

    {
      id: 8,
      title: "Legacy Responsive Web Design V8",
      issuer: "FreeCodeCamp and Sololearn",
      category: "web",
      description:
        "Professional certificate for responsive web design covering advanced concepts",
      achievement:
        "Demonstrated expertise in html and css for good responsiveness of the websites",
      logo: "📐",
      date: "July 2022",
      validity: "Lifetime",
      certificateAvailable: true,
      certificateName: [
        "Legacy Responsive Web Design",
        "Responsive Web Design",
      ],
      certificateUrl: [
        "https://www.freecodecamp.org/certification/pankaj_koree/responsive-web-design",
        "https://www.sololearn.com/certificates/CT-UFIXOYYD",
      ],
    },
    {
      id: 9,
      title: "SQL Certificate",
      issuer: "Sololearn",
      category: "database",
      description:
        "Certification covering SQL fundamentals, database design, query optimization, stored procedures, and database administration",
      achievement:
        "Demonstrated expertise in writing complex SQL queries, database normalization, performance tuning, and data management",
      logo: "🗄️",
      date: "June 2022",
      validity: "Lifetime",
      certificateAvailable: true,
      certificateName: ["SQL", "SQL Intermediate"],
      certificateUrl: [
        "https://www.sololearn.com/certificates/CT-CALK708A",
        "https://www.sololearn.com/certificates/CC-F9OUSMWV",
      ],
    },
  ];

  // Category colors and icons
  const categoryColors = {
    Digital_Marketing: "bg-gray-50 text-gray-800 border-gray-200",
    AIML: "bg-yellow-50 text-yellow-800 border-yellow-200",
    web: "bg-purple-100 text-purple-800 border-purple-200",
    database: "bg-green-100 text-green-800 border-green-200",
  };

  const categoryIcons = {
    AIML: "🤖",
    Digital_Marketing: "📱",
    web: "🌐",
    database: "🗄️",
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        <NavBar />

        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
              <TbCertificate className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Certifications
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Industry-recognized credentials and technical certifications
              </p>
            </div>
          </div>
        </div>

        {/* Certifications List */}
        <div className="p-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:mb-0"
            >
              {/* Header with Logo, Title, and Issuer */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-3 rounded-lg shadow-sm">
                    {cert.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {cert.issuer}
                    </p>

                    {/* Category and Date Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`px-3 py-1 rounded-md text-sm font-medium ${
                          categoryColors[cert.category]
                        } border flex items-center space-x-2`}
                      >
                        <span>{categoryIcons[cert.category]}</span>
                        <span className="capitalize">{cert.category}</span>
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border">
                        📅 {cert.date}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border">
                        ⏳ {cert.validity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description and Achievement */}
              <div className="space-y-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Certification Overview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 pl-4">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Key Achievements
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 pl-4">
                    {cert.achievement}
                  </p>
                </div>
              </div>

              {/* Certificate Availability and Links */}
              <div className="mt-6">
                {/* Availability Label and Verification Link */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Certificate Available
                      {cert.certificateUrl &&
                        cert.certificateUrl.length > 1 &&
                        ` (${cert.certificateUrl.length} files)`}
                    </span>
                  </div>
                </div>

                {/* Certificate Files Grid */}
                {cert.certificateAvailable && cert.certificateUrl && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cert.certificateUrl.map((url, index) => (
                      <div key={index} className="group">
                        <Link href={url} target="_blank" className="block">
                          <div className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 hover:shadow-md cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                                <FaImage className="text-blue-600 dark:text-blue-400 text-lg" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-gray-700 dark:text-gray-300 truncate">
                                  {cert.certificateName &&
                                  cert.certificateName[index]
                                    ? cert.certificateName[index]
                                    : `Certificate ${index + 1}`}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}

                {/* No Certificate Indicator */}
                {!cert.certificateAvailable && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border text-center">
                    <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
                      <TbCertificate className="text-lg" />
                      <span>Certificate not available</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="p-3 border-t border-b">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-sm border shadow-sm">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {certifications.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Total Certifications
              </div>
            </div>
            <div className="p-3 rounded-sm border shadow-sm">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {new Set(certifications.map((c) => c.category)).size}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Categories
              </div>
            </div>
            <div className="p-3 rounded-sm border shadow-sm">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {certifications.filter((c) => c.certificateAvailable).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                With Certificates
              </div>
            </div>
            <div className="p-3 rounded-sm border shadow-sm">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {new Set(certifications.map((c) => c.issuer)).size}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Issuing Orgs
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All certifications are verified and can be seen through
              the links provided
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CertificationsPage;
