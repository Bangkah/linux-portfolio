import React from "react";
import { Helmet } from "react-helmet-async";
import { PERSONAL_DATA } from "../config/personalData.config";

export const SEO: React.FC = () => {
  const siteTitle = `${PERSONAL_DATA.personalInfo.name} (${PERSONAL_DATA.personalInfo.uname}) | DevOps & Backend Engineer`;
  const description = PERSONAL_DATA.personalInfo.aboutDescription;
  const siteUrl = PERSONAL_DATA.personalInfo.website;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Muhammad Dhiyaul Atha, Bangkah, NetInfo CLI, ATHA Pacman, DevOps Engineer Indonesia, Backend Developer Aceh, Linux Enthusiast, Open Source Maintainer"
      />
      <meta name="author" content={PERSONAL_DATA.personalInfo.name} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/preload/photo1.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/preload/photo1.jpg`} />
    </Helmet>
  );
};

export default SEO;