import { Blogs } from '@/components/components/Blogs';
import { Pletforms } from '@/components/components/Pletforms';
import Image from 'next/image';
import { FaTools } from 'react-icons/fa'
export const ToolCRM = () => {
  const platforms = [
    {
      id: 1,
      name: "wordpress",
      logo: "/WordPress.png",
      link: "https://wordpress.com/",
    },
    {
      id: 2,
      name: "shopify",
      logo: "/platforms/shopify.png",
      link: "https://www.shopify.com/",
    },
    { id: 3, name: "Wix", logo: "/Wix.png", link: "www.wix.com" },
    {
      id: 4,
      name: "Weebly",
      logo: "/pngegg.png",
      link: "https://www.weebly.com/",
    },
  ];
        const blogs = [
            {
              id: 1,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 2,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 3,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
            {
              id: 4,
              name: "Blog",
              logo: "blog.webp",
              link: "#",
            },
          ];
  return (
    <>
    <div className="dashboard container">
      <div className="content">
        <h1 id="heading">
        <FaTools /> Business Tools
        </h1>
        <div className='ml-8'>

        <h2 className="subheading text-lg mb-6 text-gray-600">
            Maximize Customer Engagement and Drive Growth
          </h2>
          <p className="description text-left text-6xl mb-6 text-gray-700">
            The Strategic Advantage of CRM for Your Business Idea
          </p>
          <div className='relative w-full '>
            <div className='relative'>
              <Image width={400} height={300} src="/dashboard/bussiness-tools/crm/image1.png" alt="" />
              <div className='absolute -bottom-10 left-96'>
                <Image width={300} height={400} src="/dashboard/bussiness-tools/crm/image2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <form className='form' action="">
            <Pletforms platforms={platforms} title="Platforms" />
            <Blogs blogs={blogs} title='Blogs'/>
            
        </form>
        <div className='ml-8'>
          <h2 className="subheading text-lg mb-6 text-gray-600">
            CRM Tools
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="card">
              <div className="card-header">
                <Image width={300} height={200} src="/dashboard/bussiness-tools/crm/image3.png" alt="" />
              </div>
              <div className="card-body">
                <h2 className="text-2xl text-gray-700 mb-4">
                  HubSpot CRM
                </h2>
                <p className="text-gray-600 text-left mb-4">
                  HubSpot CRM is a free, easy-to-use CRM tool that helps you
                  manage your sales pipeline and grow better.
                </p>
                <a
                  href="https://www.hubspot.com/products/crm"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <Image width={300} height={200} src="/dashboard/bussiness-tools/crm/image4.png" alt="" />
              </div>
              <div className="card-body">
                <h2 className="text-2xl text-gray-700 mb-4">
                  Salesforce
                </h2>
                <p className="text-gray-600 text-left mb-4">
                  Salesforce is the world's #1 customer relationship management
                  (CRM) platform.
                </p>
                <a
                  href="https://www.salesforce.com/"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <Image width={300} height={200} src="/dashboard/bussiness-tools/crm/image5.png" alt="" />
              </div>
              <div className="card-body">
                <h2 className="text-2xl text-gray-700 mb-4">
                  Zoho CRM
                </h2>
                <p className="text-gray-600 text-left mb-4">
                  Zoho CRM is an online customer relationship management (CRM)
                  software for managing your sales, marketing & support in a
                  single system.
                </p>
                <a
                  href="https://www.zoho.com/crm/"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
