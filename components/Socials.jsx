import React from "react";

const Socials = () => {
  return (
    <div className="flex flex-col px-6 py-4 gap-4">
      {/* x and github */}
      <div className="grid grid-cols-2 gap-4">
        {/* x */}
        <a
          href="https://x.com/iampankajkoree"
          target="_blank"
          className="hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]"
        >
          <div className="grid grid-cols-[20%_70%_10%] items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </div>
            <div>
              <p> X (formerly Twitter)</p>
              <p>@iampankajkoree</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(45deg)" }}
              fill="currentColor"
            >
              <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
            </svg>
          </div>
        </a>

        {/* github */}
        <a
          href="https://github.com/pankajkoree"
          target="_blank"
          className="hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]"
        >
          <div className="grid grid-cols-[20%_70%_10%] items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </div>
            <div>
              <p>Github</p>
              <p>pankajkoree</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(45deg)" }}
              fill="currentColor"
            >
              <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
            </svg>
          </div>
        </a>
      </div>

      {/* linkedin and youtube */}
      <div className="grid grid-cols-2 gap-4">
        {/* linkedIn */}
        <a
          href="https://www.linkedin.com/in/pankaj-koree/"
          target="_blank"
          className="hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]"
        >
          <div className="grid grid-cols-[20%_70%_10%] items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="#0A66C2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
              </svg>
            </div>
            <div>
              <p>LinkedIn</p>
              <p>pankaj-koree</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(45deg)" }}
              fill="currentColor"
            >
              <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
            </svg>
          </div>
        </a>

        {/* youtube */}
        <a
          href="https://www.youtube.com/@pankajkori"
          target="_blank"
          className="hover:bg-[#f7f4f4] dark:hover:bg-[#191c1f]"
        >
          <div className="grid grid-cols-[20%_70%_10%] items-center inset-shadow-sm inset-shadow-blue-200 shadow-sm shadow-gray-200 rounded-sm">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="#bd2e2e"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
              </svg>
            </div>
            <div>
              <p>Youtube</p>
              <p>@pankajkori</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(45deg)" }}
              fill="currentColor"
            >
              <polygon points="3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
