"use client";
import React from 'react';

export default function NotFound() {
  return (
    <div className="h-screen w-screen  flex items-center justify-center"> {/* 添加 justify-center */}
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md text-center md:text-left">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal mt-4">
            Sorry, we couldn't find this page.
          </p>
          <p className="mb-8 mt-4">
            But don't worry, you can find plenty of other things on our homepage.
          </p>
          <button
            className="px-4 py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
            onClick={() => (window.location.href = '/')}
          >
            Back to Homepage
          </button>
        </div>
        <div className="max-w-lg mt-10 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2395 1800"
            width="400"
          >
            {/* 插入 SVG 的路径（保持与原始 SVG 一致） */}
            {/* 以下省略部分路径以缩短代码，实际应用中请保留完整 SVG */}
          </svg>
        </div>
      </div>
    </div>
  );
}