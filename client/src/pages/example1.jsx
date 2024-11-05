import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const SocialShare = () => {
  // Use the actual ngrok or Localtunnel URL
  const jobUrl = "https://94be-103-182-68-143.ngrok-free.app/"; // Replace this with your actual ngrok URL
  const jobTitle = "Research & Investment Internship - Bingx - 0 to 2 years of experience";
  const jobDescription = "Job Description for Research & Investment Internship in Bingx for 0 to 2 years of experience. Apply Now!";
  
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <Helmet>
        <title>{jobTitle}</title>
        <meta property="og:url" content={jobUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={jobTitle} />
        <meta property="og:description" content={jobDescription} />
        <meta property="og:image" content="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
      </Helmet>

      <h2 className="text-2xl font-bold mb-4">{jobTitle}</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Job Highlights</h3>
        <p><strong>Education:</strong> Bachelor's or master's degree in finance, economics, or related fields.</p>
        <p><strong>Experience:</strong> 0 to 2 years of experience in research or investment roles.</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Key Responsibilities</h3>
        <ul className="list-disc pl-5">
          <li>Conducting research on market trends and financial investments.</li>
          <li>Analyzing investment opportunities and generating reports.</li>
          <li>Collaborating with the investment team to support strategic decisions.</li>
          <li>Preparing financial models and forecasts.</li>
          <li>Assisting in portfolio management and tracking performance.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Share this Job</h3>
        <div className="flex space-x-4 mt-2">
          <FacebookShareButton url={jobUrl} quote={jobDescription}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={jobUrl} title={jobDescription}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <LinkedinShareButton url={jobUrl} title={jobTitle} summary={jobDescription}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
