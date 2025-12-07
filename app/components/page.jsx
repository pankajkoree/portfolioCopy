"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const ComponentsDemo = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("basic");
  const [rating, setRating] = useState(3);
  const [toast, setToast] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState([true, false, false]);

  // Simplified Components for compact view
  const Button = ({
    children,
    variant = "primary",
    size = "sm",
    className = "",
    ...props
  }) => {
    const baseClasses =
      "font-medium rounded-sm transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1";
    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 hover:cursor-pointer",
      secondary:
        "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 hover:cursor-pointer",
      outline:
        "border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white hover:text-black text-gray-700 focus:ring-blue-500 hover:cursor-pointer",
    };
    const sizes = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  const Card = ({ children, className = "", ...props }) => (
    <div
      className={`bg-gradient-to-r from-[#c5d6d6] via-[#9fa3a3] to-[#bdc7c7] dark:bg-gradient-to-r dark:from-[#2a2b2b] dark:via-[#2a2c2c] dark:to-[#0f0e0e] dark:text-white rounded-sm border p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );

  const Input = ({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
    ...props
  }) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-1.5 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-sm max-w-sm w-full mx-4">
          <div className="p-4 border-b">
            <h3 className="font-medium text-sm">{title}</h3>
          </div>
          <div className="p-4 text-sm">{children}</div>
          <div className="p-4 border-t flex justify-end">
            <Button onClick={onClose} size="sm">
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const Alert = ({ children, variant = "info", className = "" }) => {
    const variants = {
      success: "bg-green-50 text-green-700 border-green-200",
      danger: "bg-red-50 text-red-700 border-red-200",
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
      info: "bg-blue-50 text-blue-700 border-blue-200",
    };

    return (
      <div
        className={`p-2 rounded-sm border text-xs ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  };

  const Badge = ({ children, variant = "primary", className = "" }) => {
    const variants = {
      primary: "bg-blue-100 text-blue-700",
      secondary: "bg-gray-100 text-gray-700",
      success: "bg-green-100 text-green-700",
      danger: "bg-red-100 text-red-700",
      warning: "bg-yellow-100 text-yellow-700",
      info: "bg-indigo-100 text-indigo-700",
    };

    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium ${variants[variant]} ${className}`}
      >
        {children}
      </span>
    );
  };

  const Spinner = ({ size = "sm" }) => {
    const sizes = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
    };

    return (
      <div className="flex justify-center items-center">
        <svg
          className={`animate-spin ${sizes[size]} text-blue-600`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  };

  const Tooltip = ({ children, content }) => {
    const [show, setShow] = useState(false);

    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
        {show && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded-sm shadow-sm">
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </div>
    );
  };

  const Avatar = ({ src, initials, size = "sm" }) => {
    const sizes = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10",
    };

    return src ? (
      <img className={`${sizes[size]} rounded-sm`} src={src} alt="Avatar" />
    ) : (
      <div
        className={`${sizes[size]} rounded-sm bg-blue-600 flex items-center justify-center text-white font-medium`}
      >
        {initials}
      </div>
    );
  };

  const Dropdown = ({ label }) => (
    <div className="relative">
      <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)} size="sm">
        {label}
      </Button>
      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-32 bg-white rounded-sm border shadow-sm">
          <div className="py-1">
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-3 py-1 text-xs hover:bg-gray-50 dark:bg-gray-700 dark:text-white"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );

  const Tabs = ({ activeTab, onTabChange, children }) => {
    const tabs = React.Children.toArray(children).filter(
      (child) => child.type === Tab
    );

    return (
      <div>
        <div className="border-b">
          <nav className="flex -mb-px space-x-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => onTabChange(tab.props.value)}
                className={`px-3 py-1.5 text-xs font-medium border-b-2 ${
                  activeTab === tab.props.value
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-white hover:dark:text-gray-300"
                }`}
              >
                {tab.props.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-3">
          {tabs.find((tab) => tab.props.value === activeTab)}
        </div>
      </div>
    );
  };

  const Tab = ({ children, value }) => <div>{children}</div>;

  const ProgressBar = ({ value, variant = "primary" }) => {
    const variants = {
      primary: "bg-blue-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600",
    };

    return (
      <div className="w-full bg-gray-200 rounded-sm h-1.5">
        <div
          className={`h-1.5 rounded-sm ${variants[variant]}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };

  const Toast = ({ message, variant, onClose }) => {
    const variants = {
      success: "bg-green-100 border-green-200 text-green-700",
      error: "bg-red-100 border-red-200 text-red-700",
      info: "bg-blue-100 border-blue-200 text-blue-700",
    };

    return (
      <div
        className={`fixed top-2 right-2 p-2 rounded-sm border text-xs ${variants[variant]} shadow z-50`}
      >
        <div className="flex items-center">
          <span>{message}</span>
          <button onClick={onClose} className="ml-2 text-sm">
            ×
          </button>
        </div>
      </div>
    );
  };

  const Pagination = ({ currentPage, onPageChange }) => (
    <div className="flex items-center space-x-1">
      <Button
        size="xs"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ←
      </Button>
      <span className="text-xs px-2">Page {currentPage}</span>
      <Button size="xs" onClick={() => onPageChange(currentPage + 1)}>
        →
      </Button>
    </div>
  );

  const ListGroup = ({ children }) => (
    <div className="border rounded-sm divide-y text-sm">{children}</div>
  );

  const ListGroupItem = ({ children, active }) => (
    <div
      className={`px-3 py-2 ${
        active
          ? "bg-blue-50 dark:bg-[#0b0d16] text-blue-700 rounded-tl-sm rounded-tr-sm"
          : ""
      }`}
    >
      {children}
    </div>
  );

  const showToast = (message, variant) => {
    setToast({ message, variant });
    setTimeout(() => setToast(null), 2000);
  };

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Compact component categories
  const components = {
    basic: [
      { name: "Button", description: "Interactive buttons" },
      { name: "Input", description: "Form input fields" },
      { name: "Card", description: "Content containers" },
    ],
    feedback: [
      { name: "Alert", description: "Status messages" },
      { name: "Modal", description: "Dialog popups" },
      { name: "Spinner", description: "Loading indicators" },
    ],
    data: [
      { name: "Table", description: "Data tables" },
      { name: "Badge", description: "Status badges" },
      { name: "Tooltip", description: "Hover tooltips" },
    ],
    media: [
      { name: "Avatar", description: "User avatars" },
      { name: "Dropdown", description: "Select menus" },
      { name: "Pagination", description: "Page navigation" },
    ],
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] border">
        <NavBar />
        <div className="w-full p-4 border-b">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              PKUI Components
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              30+ reusable React components
            </p>
            <div className="flex justify-center gap-2 mt-3">
              <Badge variant="primary">v1.0.8</Badge>
              <Badge variant="success">30+ Components</Badge>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
            <Tab label="Basic" value="basic">
              <div className="space-y-4 mt-3">
                {components.basic.map((comp, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {comp.name}
                        </h3>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      {comp.name === "Button" && (
                        <div className="flex flex-wrap gap-2">
                          <Button variant="primary" size="sm">
                            Primary
                          </Button>
                          <Button variant="secondary" size="sm">
                            Secondary
                          </Button>
                          <Button variant="outline" size="sm">
                            Outline
                          </Button>
                        </div>
                      )}
                      {comp.name === "Input" && (
                        <div className="space-y-2">
                          <Input
                            placeholder="Enter text..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                          />
                          <Input type="password" placeholder="Password" />
                        </div>
                      )}
                      {comp.name === "Card" && (
                        <Card className="p-3 border">
                          <h4 className="font-medium text-sm">Card Title</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            Card content example
                          </p>
                          <Button size="xs" className="mt-2">
                            Action
                          </Button>
                        </Card>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Tab>

            <Tab label="Feedback" value="feedback">
              <div className="space-y-4 mt-3">
                {components.feedback.map((comp, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {comp.name}
                        </h3>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      {comp.name === "Alert" && (
                        <div className="space-y-2">
                          <Alert variant="success">Success message</Alert>
                          <Alert variant="warning">Warning message</Alert>
                          <Alert variant="danger">Error message</Alert>
                        </div>
                      )}
                      {comp.name === "Modal" && (
                        <div>
                          <Button onClick={() => setShowModal(true)} size="sm">
                            Open Modal
                          </Button>
                          <Modal
                            show={showModal}
                            onClose={() => setShowModal(false)}
                            title="Modal Example"
                          >
                            <p className="text-xs text-gray-600 mb-3">
                              This is a modal dialog.
                            </p>
                            <Button
                              size="sm"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </Button>
                          </Modal>
                        </div>
                      )}
                      {comp.name === "Spinner" && (
                        <div className="flex items-center space-x-4">
                          <Spinner size="xs" />
                          <span className="text-xs">Loading...</span>
                          <Spinner size="sm" />
                          <Spinner size="md" />
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Tab>

            <Tab label="Data" value="data">
              <div className="space-y-4 mt-3">
                {components.data.map((comp, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {comp.name}
                        </h3>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      {comp.name === "Table" && (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 text-xs">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-[#0b0d16] dark:text-white">
                                <th className="px-3 py-2 text-left">Name</th>
                                <th className="px-3 py-2 text-left">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-3 py-2">John Doe</td>
                                <td className="px-3 py-2">
                                  <Badge variant="success">Active</Badge>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2">Jane Smith</td>
                                <td className="px-3 py-2">
                                  <Badge variant="warning">Pending</Badge>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                      {comp.name === "Badge" && (
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="primary">Primary</Badge>
                          <Badge variant="success">Success</Badge>
                          <Badge variant="danger">Danger</Badge>
                          <Badge variant="warning">Warning</Badge>
                          <Badge variant="info">Info</Badge>
                        </div>
                      )}
                      {comp.name === "Tooltip" && (
                        <div className="flex space-x-2">
                          <Tooltip content="This is a tooltip">
                            <Button size="sm">Hover me</Button>
                          </Tooltip>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Tab>

            <Tab label="Media" value="media">
              <div className="space-y-4 mt-3">
                {components.media.map((comp, index) => (
                  <Card key={index}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                          {comp.name}
                        </h3>
                        <p className="text-xs text-gray-700 dark:text-gray-300 mt-0.5">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      {comp.name === "Avatar" && (
                        <div className="flex items-center space-x-3">
                          <Avatar
                            size="xs"
                            src="https://i.pravatar.cc/150?img=1"
                          />
                          <Avatar
                            size="sm"
                            src="https://i.pravatar.cc/150?img=2"
                          />
                          <Avatar
                            size="md"
                            src="https://i.pravatar.cc/150?img=3"
                          />
                          <Avatar initials="PK" />
                        </div>
                      )}
                      {comp.name === "Dropdown" && (
                        <div>
                          <Dropdown label="Options" />
                          {isDropdownOpen && (
                            <div className="mt-2 text-xs text-gray-500">
                              Dropdown is open
                            </div>
                          )}
                        </div>
                      )}
                      {comp.name === "Pagination" && (
                        <div>
                          <Pagination
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            Current page: {currentPage}
                          </p>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </Tab>
          </Tabs>

          {/* Quick Examples */}
          <Card className="mt-6">
            <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-3">
              Quick Examples
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    size="xs"
                    onClick={() => showToast("Success!", "success")}
                  >
                    Show Toast
                  </Button>
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={() => showToast("Error!", "error")}
                  >
                    Show Error
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <ProgressBar value={25} className="w-20" />
                  <ProgressBar value={75} variant="success" className="w-20" />
                </div>
              </div>

              <ListGroup>
                <ListGroupItem active>Active item</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>Item 3</ListGroupItem>
              </ListGroup>
            </div>
          </Card>

          {/* Installation */}
          <Card className="mt-6 bg-gray-50 dark:bg-[#0b0d16] dark:text-white">
            <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-2">
              Installation
            </h3>
            <div className="bg-gray-900 rounded-sm p-3 mb-3">
              <div className="flex items-center justify-between">
                <code className="text-green-400 text-xs">
                  npm install @pankaj.koree/pkui
                </code>
                <Button
                  size="xs"
                  variant="outline"
                  className="border-gray-700 text-white text-xs"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "npm install @pankaj.koree/pkui"
                    )
                  }
                >
                  Copy
                </Button>
              </div>
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-sm mr-2"></span>{" "}
                30+ Components
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-sm mr-2"></span>{" "}
                TypeScript Support
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-sm mr-2"></span>{" "}
                Zero Dependencies
              </p>
            </div>
          </Card>

          {/* Usage */}
          <Card className="mt-6">
            <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-2">
              Quick Usage
            </h3>
            <pre className="bg-gray-900 text-gray-200 p-3 rounded-sm text-xs overflow-x-auto">
              {`import { Button, Card } from '@pankaj.koree/pkui';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}`}
            </pre>
            <Button
              size="xs"
              variant="outline"
              className="mt-2"
              onClick={() =>
                navigator.clipboard.writeText(
                  `import { Button, Card } from '@pankaj.koree/pkui';`
                )
              }
            >
              Copy Code
            </Button>
          </Card>

          {/* Links */}
          <div className="mt-6 flex justify-center space-x-3">
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  "https://www.npmjs.com/package/@pankaj.koree/pkui",
                  "_blank"
                )
              }
            >
              View on NPM
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                window.open("https://github.com/pankajkoree/pkui", "_blank")
              }
            >
              GitHub
            </Button>
          </div>

          {/* Toast Display */}
          {toast && (
            <Toast
              message={toast.message}
              variant={toast.variant}
              onClose={() => setToast(null)}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ComponentsDemo;
