import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {/* Product 1 */}
        <div className="bg-background-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group">
          <div
            className="w-full h-48 bg-gray-200 bg-cover bg-center"
            data-alt="Abstract placeholder for an e-commerce platform thumbnail."
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdCvrDg5eWNFNXc2WRT-18bo-JUrLIcd1V-4y9P2VnmuoPc91tLTSlGqTcTTHoio20_s8es0JduUdCARNhlZKfZ1IEaUftxk6dJ-Y5Lv1kQ9lQbPpqEI-5AI1njGTpVjrMf9psvRSDaa-8sCke4I_wshhkS4F2aPbn6Nc7HEarQTNcdx08AZTwHm51e3ee1oZ83xujctX7-fsHIDfyUft3xYn7p4qk0n7_HOq3c0G_H8j4znF-D5RCU-S-yMfxcG2Zha1QPiLSe6A')`,
            }}
          ></div>

          <div className="p-5">
            <h3 className="text-lg font-bold truncate">Complete E-commerce Platform</h3>
            <p className="text-sm text-text-light-secondary mt-1">
              Website
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-black text-primary">$499</span>
              <Link href={"/product/01"} className="h-10 px-4 bg-primary/10 text-primary text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors flex justify-center items-center">
                <span>Live Demo</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-background-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group">
          <div
            className="w-full h-48 bg-gray-200 bg-cover bg-center"
            data-alt="Abstract placeholder for a social media API thumbnail."
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuArclalWNeWDupDl72x3qW0xh_szm7FnufFHsq0-33YBFPuGkI1XcV1CZUtGLS3C1HaP_zjkJ5Sxqi50XsQG7_dhleV7DEDdKqeq5eQY6pAsYiOMNQMhN0OOS_s9gIMyI1NoC8iqx0hDxdzFTvUezL_pCH8gA56a2DpZnmQjWVDYsmVBo9qHM_rMBAxZFToYhvpsD_XhASHUaaNLuycuQZfbnN1fiSTXxdYNgnsN9wp-d1Sd_J4d-pa9RoohZ-UviXBXKNZ38DmYEE')`,
            }}
          ></div>

          <div className="p-5">
            <h3 className="text-lg font-bold truncate">Social Media Automation API</h3>
            <p className="text-sm text-text-light-secondary mt-1">
              API
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-black text-primary">$79</span>
              <Link href={"/product/02"} className="h-10 px-4 bg-primary/10 text-primary text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors flex justify-center items-center">
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-background-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group">
          <div
            className="w-full h-48 bg-gray-200 bg-cover bg-center"
            data-alt="Abstract placeholder for an AI content generator thumbnail."
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqK9DJ1i0-98dWL-pdMaogGnAwh6Ro2kojN2gpWu7NiC-3hgxc3jPwFxqVJ5UmrvcB_WZ_xWSS4f7Ah9mbIthbvAMmc-LllqgXMmm0ACw5elyanU-vwYCIvupKG8-ZYqIsYDBbyKMyempb6tVPxLwzIlGsAMY1KB2Ztj0XqxRK0ypiPD9BSosgfg4zlpZ9Hm-4lOn6x_uK5Mv6S1RRz6CJZzJ2BxtcfuIqlokx-WGolue5XVxkKskADPeqVmLxj73_eIfG07vrlcw')`,
            }}
          ></div>

          <div className="p-5">
            <h3 className="text-lg font-bold truncate">AI Content Generation Tool</h3>
            <p className="text-sm text-text-light-secondary mt-1">
              AI Tool
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-black text-primary">$129</span>
              <Link href={"/product/01"} className="h-10 px-4 bg-primary/10 text-primary text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors flex justify-center items-center">
                <span>Live Demo</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-background-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group">
          <div
            className="w-full h-48 bg-gray-200 bg-cover bg-center"
            data-alt="Abstract placeholder for a React masterclass course thumbnail."
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRr4FQt45hHtZHCe4SffpscwHvsvQLCLaMTBc2GUwfTOGkYRCARra1c1h6naf0NVx0mdhqvIFXx0K8P59254TABfZmqGNzOZd2IWu_m-aWCtpoB-JBzg4uO9DzYd2JxuTIf_-fK_hI5VcLfmAy7qD_OUPdo7pjIsivFSo9nHTSW2KVJZ6hPfv8hCxtezNrrJVB78B8Ge5VHTA4LmCPyemMOxJrrGvb4944HiPs80cQj3GoPYQXgvE-70e1BZRGxv1jKjnL19Rlv0c')`,
            }}
          ></div>

          <div className="p-5">
            <h3 className="text-lg font-bold truncate">The Ultimate React Masterclass</h3>
            <p className="text-sm text-text-light-secondary mt-1">
              Course
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-black text-primary">$99</span>
              <Link href={"/product/01"} className="h-10 px-4 bg-primary/10 text-primary text-sm font-bold rounded-lg group-hover:bg-primary group-hover:text-white transition-colors flex justify-center items-center">
                <span>View Course</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}