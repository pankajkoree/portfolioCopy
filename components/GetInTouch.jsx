import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const GetInTouch = () => {
  return (
    <div className="px-6 py-4">
          <Link href="/contacts">
            <Button variant="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              Get in touch
            </Button>
          </Link>
        </div>
  )
}

export default GetInTouch
