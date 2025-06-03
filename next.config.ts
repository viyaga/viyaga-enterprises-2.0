import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', "viyaga-web-forge.s3.ap-southeast-1.amazonaws.com"],
  },
};

export default withPayload(nextConfig);
