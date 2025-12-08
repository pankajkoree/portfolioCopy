"use client";

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
      imageAvailable: true,
      imageUrl:
        "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view",
      pdfUrl: "",
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
      imageAvailable: true,
      imageUrl:
        "https://drive.google.com/file/d/1HhwRV5D7yyQkSlHOH0i8MLZlHMBtQ-Pa/view",
      pdfUrl: "https://ijnrd.org/papers/IJNRD2504330.pdf",
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
      imageAvailable: true,
      imageUrl:
        "https://drive.google.com/file/d/1aIfmrcdkMM4ZXiwUiQqhOTgSn0_UtqI_/view",
      pdfUrl: "",
    },
    {
      id: 4,
      title: "Excellence in Research",
      category: "paper presentation",
      description:
        "Published paper on machine learning algorithms in Journal of AI Research",
      achievement: "Paper cited by 50+ researchers in the field",
      logo: "📚",
      pdfAvailable: true,
      imageAvailable: false,
      imageUrl:
        "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view?usp=drive_link",
      pdfUrl: "",
    },
    {
      id: 5,
      title: "Community Impact Award",
      category: "project",
      description: "Developed community outreach program for STEM education",
      achievement: "Program reached over 500 students across 10 schools",
      logo: "🤝",
      pdfAvailable: false,
      imageAvailable: false,
      imageUrl:
        "https://drive.google.com/file/d/1E6s9uuhrc-YSZ_aMsqvc-pu2LWyh8MJa/view?usp=drive_link",
      pdfUrl: "",
    },
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
              <div className="mt-6 flex items-center space-x-4">
                {/* PDF Available Indicator */}
                {award.pdfAvailable && (
                  <div className="flex items-center space-x-2">
                    <div className="relative group">
                      <Link href={award.pdfUrl} target="_blank">
                        <div className="p-2 bg-red-50 rounded-sm group-hover:bg-red-100 transition cursor-pointer">
                          <FaFilePdf className="text-red-600 text-lg" />
                        </div>
                      </Link>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                        View PDF ({award.attachments?.length || 0} files)
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        PDF Available
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Published Paper
                      </p>
                    </div>
                  </div>
                )}

                {/* Image Available Indicator */}
                {award.imageAvailable && (
                  <div className="flex items-center space-x-2">
                    <div className="relative group">
                      <Link href={award.imageUrl} target="_blank">
                        <div className="p-2 bg-blue-50 rounded-sm group-hover:bg-blue-100 transition cursor-pointer">
                          <FaImage className="text-blue-600 text-lg" />
                        </div>
                      </Link>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                        View Images
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        Images Available
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Certificate photos
                      </p>
                    </div>
                  </div>
                )}

                {/* No attachments indicator */}
                {!award.pdfAvailable && !award.imageAvailable && (
                  <div
                    className={`text-gray-600 dark:text-gray-200 text-sm italic`}
                  >
                    No digital files available for this award
                  </div>
                )}
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
        <div className="p-6 border-t">
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
      </div>
    </div>
  );
};

export default AwardsPage;
