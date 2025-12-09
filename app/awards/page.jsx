"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import {
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaPaperclip,
  FaFilePdf,
  FaImage,
} from "react-icons/fa";

const AwardsPage = () => {
  // Awards data with pdfAvailable and imageAvailable flags
  const awards = [
    {
      id: 1,
      title: "Best Paper Award",
      category: "paper presentation",
      description:
        "Presented paper on Online Blood Bank for social impact through the technology use",
      achievement:
        "Received top honors among 150+ submissions for innovative approach to help the social problems",
      logo: "🏆",
      pdfAvailable: false,
      pdfUrl: [],
      imageAvailable: true,
      imageName: ["Best Paper Award"],
      imageUrl: [
        "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view",
      ],
    },
    {
      id: 2,
      title: "Digital Mental Health Interventions and Wellness",
      category: "project",
      description:
        "Developed a digital platform for user to provide resources for mental wellness",
      achievement:
        "Led a team of 4 to create prototype that can attract mental illness users to be able to use resources and get help from it",
      logo: "💡",
      pdfAvailable: true,
      pdfName: ["Research Paper on DMHIW"],
      pdfUrl: ["https://ijnrd.org/papers/IJNRD2504330.pdf"],
      imageAvailable: true,
      imageName: [
        "Certificate of Project Presentation",
        "Certificate of Research Paper on DMHIW",
      ],
      imageUrl: [
        "https://drive.google.com/file/d/1HhwRV5D7yyQkSlHOH0i8MLZlHMBtQ-Pa/view",
        "https://drive.google.com/file/d/1zv1D2VFzooq20bCNfbRb-_SaT_kkO1dl/view",
      ],
    },
    {
      id: 3,
      title: "IEEE Summit",
      category: "participation",
      description:
        "Attended two days IEEE Women in Engineering (WIE) International Leadership Summit (ILS) 2023",
      achievement:
        "Participated as a participants as well as volunteered for managing the guests",
      logo: "🚀",
      pdfAvailable: false,
      pdfName: [],
      pdfUrl: [],
      imageAvailable: true,
      imageName: ["IEE Summit"],
      imageUrl: [
        "https://drive.google.com/file/d/1aIfmrcdkMM4ZXiwUiQqhOTgSn0_UtqI_/view",
      ],
    },
    {
      id: 4,
      title:
        "The Development of the Junior Shopping Site Based on the Ecommerce Technologies Online Web Application for the Retailer",
      category: "project",
      description: "Developed an e-commerce platform for the retailers",
      achievement:
        "Led a team of 4 to create prototype that can be used by the retailers in the rural areas to provide ecommerce services to the local people",
      logo: "💡",
      pdfAvailable: true,
      pdfName: ["Research Paper on Junior Shopping Site"],
      pdfUrl: ["https://ijnrd.org/papers/IJNRD2410215.pdf"],
      imageAvailable: true,
      imageName: ["Certificate of Research Paper on Junior Shopping Site"],
      imageUrl: [
        "https://drive.google.com/file/d/16RZDk2nhgICRg32MGsoUFwWrtIIkjVhk/view",
      ],
    },
    {
      id: 5,
      title: "KU HACKATHON - 2025",
      category: "participation",
      description:
        "Attended two days hackathon with two members of Dark Nova Coders Team",
      achievement: "Developed a security system based on Blockchain Technology",
      logo: "🚀",
      pdfAvailable: false,
      pdfName: [],
      pdfUrl: [],
      imageAvailable: true,
      imageName: ["KU Hackathon 2025"],
      imageUrl: [
        "https://drive.google.com/file/d/1nUyw3zmcjyyH0FfkqAi-9s9kgy-DrZcN/view",
      ],
    },
    {
      id: 6,
      title: "Technorollix - A National Level Techno-Cultural Fest 2023",
      category: "project",
      description:
        "Attended three days Techno-Cultural Fest with the team of two to demonstrate the tech project",
      achievement:
        "Got the 3rd place in the non-working by building a self power generating system based on transformer model",
      logo: "💡",
      pdfAvailable: false,
      pdfName: [],
      pdfUrl: [],
      imageAvailable: true,
      imageName: [
        "Certificate of Merit - 3rd place",
        "Certificate of Participation",
      ],
      imageUrl: [
        "https://drive.google.com/file/d/1ZDgCh6qAyGpH0lCPaYdptox8YoA3d5hD/view",
        "https://drive.google.com/file/d/1mlV2gD92Q7zuJt6yylyKYmlZLSFdfpM2/view",
      ],
    },
    // {
    //   id: 7,
    //   title: "Excellence in Research",
    //   category: "paper presentation",
    //   description:
    //     "Published paper on machine learning algorithms in Journal of AI Research",
    //   achievement: "Paper cited by 50+ researchers in the field",
    //   logo: "📚",
    //   pdfAvailable: false,
    //   pdfUrl: [],
    //   imageAvailable: false,
    //   imageUrl: [
    //     "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view?usp=drive_link",
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Community Impact Award",
    //   category: "project",
    //   description: "Developed community outreach program for STEM education",
    //   achievement: "Program reached over 500 students across 10 schools",
    //   logo: "🤝",
    //   pdfAvailable: false,
    //   imageAvailable: false,
    //   imageUrl: [
    //     "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view?usp=drive_link",
    //   ],
    //   pdfUrl: [],
    // },
  ];

  // Category icons mapping
  const categoryIcons = {
    "paper presentation": <FaPaperclip className="text-blue-500" />,
    project: <FaMedal className="text-green-500" />,
    participation: <FaCertificate className="text-purple-500" />,
  };

  const categoryColors = {
    "paper presentation": "bg-blue-100 text-blue-800",
    project: "bg-green-100 text-green-800",
    participation: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        <NavBar />
        {/* Header */}
        <div className="p-6 border-b rounded-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-500 rounded-sm">
              <FaTrophy className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black dark:text-white">
                Awards & Recognitions
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Professional achievements and honors
              </p>
            </div>
          </div>
        </div>

        {/* Awards List */}
        <div className="p-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="mb-8 pb-8 border-b border-gray-200 last:border-b-0 last:mb-0"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl bg-gradient-to-br from-yellow-100 to-yellow-50 p-3 rounded-xl">
                    {award.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-1">
                      {award.title}
                    </h3>

                    <div className="flex items-center space-x-3 mb-3">
                      <span
                        className={`px-3 py-1 rounded-sm text-sm font-medium ${
                          categoryColors[award.category]
                        } flex items-center space-x-2`}
                      >
                        {categoryIcons[award.category]}
                        <span className="ml-1 capitalize">
                          {award.category}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description and Achievement */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-600 dark:text-white mb-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-sm mr-2"></span>
                    About the Award
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 pl-4">
                    {award.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-600 dark:text-white mb-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-sm mr-2"></span>
                    My Contribution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 pl-4">
                    {award.achievement}
                  </p>
                </div>
              </div>

              {/* PDF and Image Availability Indicators */}
              <div className="mt-2 flex items-center space-x-4">
                {/* PDF Available Indicators - Dynamic for multiple PDFs */}
                {/* PDF and Image Availability Indicators */}
                <div className="">
                  {/* Availability Labels Row */}
                  <div className="flex items-center space-x-4 mb-3">
                    {/* PDF Availability Label */}
                    {award.pdfAvailable && (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          PDF Available
                          {award.pdfUrl &&
                            award.pdfUrl.length > 1 &&
                            ` (${award.pdfUrl.length})`}
                        </span>
                      </div>
                    )}

                    {/* Image Availability Label */}
                    {award.imageAvailable && (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Images Available
                          {award.imageUrl &&
                            award.imageUrl.length > 1 &&
                            ` (${award.imageUrl.length})`}
                        </span>
                      </div>
                    )}

                    {/* No files indicator */}
                    {!award.pdfAvailable && !award.imageAvailable && (
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                          No digital files available
                        </span>
                      </div>
                    )}
                  </div>

                  {/* PDF Icons Row */}
                  {award.pdfAvailable && award.pdfUrl && (
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {award.pdfUrl.map((url, index) => (
                        <div key={index} className="relative group">
                          <Link href={url} target="_blank" className="block">
                            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200 hover:scale-102 cursor-pointer shadow-sm hover:shadow-md">
                              <div className="flex items-center space-x-2">
                                <FaFilePdf className="text-red-600 dark:text-red-400 text-xl" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {award.pdfName && award.pdfName[index]
                                    ? award.pdfName[index]
                                    : `PDF Document ${index + 1}`}
                                </span>
                              </div>
                            </div>
                          </Link>

                          {/* Hover Tooltip with custom name */}
                          {/* <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg min-w-[120px] text-center">
                            {award.pdfName && award.pdfName[index]
                              ? award.pdfName[index]
                              : `PDF Document ${index + 1}`}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-2 h-2 bg-gray-800 dark:bg-gray-900 rotate-45"></div>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Image Icons Row */}
                  {award.imageAvailable && award.imageUrl && (
                    <div className="flex flex-wrap items-center gap-3">
                      {award.imageUrl.map((url, index) => (
                        <div key={index} className="relative group">
                          <Link href={url} target="_blank" className="block">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 hover:scale-102 cursor-pointer shadow-sm hover:shadow-md">
                              <div className="flex items-center space-x-2">
                                <FaImage className="text-blue-600 dark:text-blue-400 text-xl" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {award.imageName && award.imageName[index]
                                    ? award.imageName[index]
                                    : `Image ${index + 1}`}
                                </span>
                              </div>
                            </div>
                          </Link>

                          {/* Hover Tooltip with custom name */}
                          {/* <div className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg min-w-[120px] text-center">
                            {award.imageName && award.imageName[index]
                              ? award.imageName[index]
                              : `Image ${index + 1}`}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                              <div className="w-2 h-2 bg-gray-800 dark:bg-gray-900 rotate-45"></div>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Attachment List (if PDF is available) */}
              {award.pdfAvailable &&
                award.attachments &&
                award.attachments.length > 0 && (
                  <div className="mt-4 pl-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaPaperclip className="text-gray-500" />
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        Available Documents:
                      </span>
                    </div>
                    <div className="space-y-1 pl-6">
                      {award.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {attachment}
                          </span>
                          <button
                            onClick={() =>
                              handleViewPDF(award.title, attachment)
                            }
                            className="text-blue-600 hover:text-blue-800 text-xs font-medium ml-2"
                          >
                            [view]
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Footer Summary */}
        <div className="p-6 border-t border-b">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-sm border">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                {awards.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Total Awards
              </div>
            </div>
            <div className="p-3 rounded-sm border">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                {awards.filter((a) => a.pdfAvailable).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                With PDFs
              </div>
            </div>
            <div className="p-3 rounded-sm border">
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                {awards.filter((a) => a.imageAvailable).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                With Images
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-300 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Awards are displayed based on availability of supporting documents
            </p>
          </div>
        </div>

        {/* main footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AwardsPage;
